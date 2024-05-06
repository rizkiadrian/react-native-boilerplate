import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Text from 'src/components/atoms/Text';
import styles from 'src/components/molecules/CategoryTag/styles';
import {ICategoryProps} from 'src/components/molecules/CategoryTag/types';
import {IRootState} from 'src/redux/configureReducer';

function CategoryTag(props: ICategoryProps) {
  const {tag, isActive, onPress} = props;
  // prevent press while fetching product data
  const onProductFetch = useSelector(
    (state: IRootState) => state.homepage.onProductFetch,
  );
  return (
    <TouchableOpacity
      onPress={() => {
        // prevent press while fetching product data
        if (onPress && !onProductFetch) {
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
