import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import CategoryTag from 'src/components/molecules/CategoryTag';
import {ICategory} from 'src/general-typings';
import styles from 'src/components/organisms/CategoryTagScroll/styles';

interface Props {
  activeId?: string;
}

function CategoryTagScroll(props: Props) {
  const {activeId = '1'} = props;
  const [tagId, setTagId] = useState(activeId);
  const samples: ICategory[] = [
    {
      name: 'Hotels',
      id: '1',
    },
    {
      name: 'Food',
      id: '2',
    },
    {
      name: 'Restaurant',
      id: '3',
    },
    {
      name: 'Trip',
      id: '4',
    },
    {
      name: 'Adventure',
      id: '5',
    },
  ];

  const renderCategoryTag = (tag: ListRenderItemInfo<ICategory>) => {
    return (
      <CategoryTag
        tag={tag.item}
        isActive={tag.item.id === tagId}
        onPress={a => setTagId(a)}
      />
    );
  };
  return (
    <FlatList
      data={samples}
      renderItem={renderCategoryTag}
      keyExtractor={i => i.id.toString()}
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={styles.listContainer}
    />
  );
}

export default CategoryTagScroll;
