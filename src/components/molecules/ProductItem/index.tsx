import React from 'react';
import {
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Text from 'src/components/atoms/Text';
import styles from 'src/components/molecules/ProductItem/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {IProduct} from 'src/general-typings';
import {typographySheet} from 'src/global-styles';

interface Props {
  item: IProduct;
}

function ProductItem(props: Props): JSX.Element {
  const {item} = props;
  return (
    <TouchableWithoutFeedback>
      <View style={[styles.root, typographySheet.shadow]}>
        <Image source={{uri: item.img_url}} style={styles.imgStyle} />
        <View style={styles.bottomContent}>
          <View style={styles.dimBox}>
            <Text
              style={styles.nameText}
              numberOfLines={1}
              ellipsizeMode="tail">
              {item.name}
            </Text>
          </View>
          <View style={styles.bottomRow}>
            <View style={[styles.dimBox, styles.starDim]}>
              <Icon name="star" size={16} color="#D8D138" />
              <Text style={styles.ratingText}>{item.rating}</Text>
            </View>
            <TouchableOpacity
              style={[styles.favCircle, typographySheet.shadow]}>
              <Icon
                name="heart"
                size={14}
                color="#EC5655"
                style={styles.icnStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ProductItem;
