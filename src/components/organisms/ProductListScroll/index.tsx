import React, {useMemo, useState} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useLazyGetPlacesQuery} from 'src/apis/product';
import Text from 'src/components/atoms/Text';
import ProductItem from 'src/components/molecules/ProductItem';
import styles from 'src/components/organisms/ProductListScroll/styles';
import {IPlaceQuery, IProduct} from 'src/general-typings';
import {IRootState} from 'src/redux/configureReducer';
import {useDidMountEffect, useDidUpdateEffect} from 'src/utilities/hooks';
import PLSSkeleton from './skeleton';
import {setProductFetch} from 'src/redux/reducers/Homepage';

interface Props {
  title?: string;
  titleStyle?: StyleProp<ViewStyle> | undefined;
  titleContainerStyle?: StyleProp<ViewStyle> | undefined;
}

function ProductListScroll(props: Props): JSX.Element {
  const {title, titleStyle, titleContainerStyle} = props;
  const dispatch = useDispatch();
  /**
   * Product API
   */
  const [productTrigger] = useLazyGetPlacesQuery();
  const [products, setProducts] = useState<IProduct[]>();
  const [loading, setLoading] = useState<boolean>(true);

  /**
   * Get active category from redux
   */
  const activeCategory = useSelector(
    (state: IRootState) => state.homepage.activeCategory,
  );

  /**
   * Fetch Base function
   */
  const fetchPlace = async () => {
    setLoading(true);
    // set prevent press variable on category tab
    dispatch(setProductFetch(true));
    const query: IPlaceQuery = {
      category_id: activeCategory,
    };
    const productsRes = await productTrigger(query).unwrap();
    setProducts(productsRes);
    setLoading(false);
    // set prevent press variable on category tab
    dispatch(setProductFetch(false));
  };

  /**
   * Call initial category on didmount effect
   */
  useDidMountEffect(() => {
    fetchPlace();
    return true;
  });

  const _renderProductItem = (product: ListRenderItemInfo<IProduct>) => {
    const {item} = product;
    return (
      <>
        <ProductItem item={item} />
        <View style={styles.itemPager} />
      </>
    );
  };

  useDidUpdateEffect(() => {
    fetchPlace();
  }, [activeCategory]);

  const _renderContent = useMemo(() => {
    if (loading) {
      return <PLSSkeleton />;
    }
    return (
      <FlatList
        data={products}
        horizontal
        keyExtractor={(i, idx) => idx.toString()}
        renderItem={_renderProductItem}
        contentContainerStyle={styles.scrollContent}
        showsHorizontalScrollIndicator={false}
      />
    );
  }, [loading, products]);

  return (
    <View style={styles.root}>
      <View style={[styles.titleContainer, titleContainerStyle]}>
        <Text style={[styles.titleText, titleStyle]}>{title}</Text>
        <Text style={styles.seeAllStyle}>See all</Text>
      </View>
      <View style={styles.productContainer}>{_renderContent}</View>
    </View>
  );
}

export default ProductListScroll;
