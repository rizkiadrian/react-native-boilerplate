import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from 'src/components/atoms/Text';
import styles from 'src/components/molecules/CategoryTag/styles';
import {ICategoryProps} from 'src/components/molecules/CategoryTag/types';

function CategoryTag(props: ICategoryProps) {
  const {tag, isActive, onPress} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        if (onPress) {
          onPress(tag.id);
        }
      }}
      style={[styles.root, isActive ? styles.rootActive : undefined]}>
      <Text style={[styles.text, isActive ? styles.activeText : undefined]}>
        {tag?.name || 'Empty'}
      </Text>
    </TouchableOpacity>
  );
}

export default CategoryTag;
