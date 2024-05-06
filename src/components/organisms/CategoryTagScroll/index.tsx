import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import CategoryTag from 'src/components/molecules/CategoryTag';
import {IActCategory, ICategory} from 'src/general-typings';
import styles from 'src/components/organisms/CategoryTagScroll/styles';
import CTSSkeleton from 'src/components/organisms/CategoryTagScroll/skeleton';
import {useLazyGetCategoriesQuery} from 'src/apis/product';
import {useDispatch} from 'react-redux';
import {setActiveCategory} from 'src/redux/reducers/Homepage';

interface Props {
  activeId?: string;
}

function CategoryTagScroll(props: Props) {
  const {activeId = '1'} = props;
  const dispatch = useDispatch();
  const [tagId, setTagId] = useState(activeId);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [categoryTrigger] = useLazyGetCategoriesQuery();

  useEffect(() => {
    const initial = async () => {
      const categoryResult = await categoryTrigger().unwrap();
      setCategories(categoryResult);
      setLoading(false);
    };
    initial();
  }, [categoryTrigger]);

  // set active category on press on redux
  const setReduxCategory = useCallback(
    (a: string) => {
      const payload: IActCategory = {
        activeCategory: a,
      };
      dispatch(setActiveCategory(payload));
    },
    [dispatch],
  );

  const renderCategoryTag = (tag: ListRenderItemInfo<ICategory>) => {
    return (
      <CategoryTag
        tag={tag.item}
        isActive={tag.item.id === tagId}
        onPress={a => {
          setTagId(a);
          setReduxCategory(a);
        }}
      />
    );
  };
  if (loading) {
    return <CTSSkeleton />;
  }
  return (
    <FlatList
      data={categories}
      renderItem={renderCategoryTag}
      keyExtractor={i => i.id.toString()}
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={styles.listContainer}
    />
  );
}

export default CategoryTagScroll;
