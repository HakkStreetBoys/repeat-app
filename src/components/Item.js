import React from 'react';
import { View, Text, Image } from 'react-native';

const Item = ({ item }) => {
  const { menu_title, menu_image, menu_price } = item.acf;

  return (
    <View style={styles.itemContainer}>
      <Image style={Object.assign({}, styles.thumbnailStyle, styles.shadowStyle)} source={{ uri: menu_image.sizes.medium }} />
      <View style={Object.assign({}, styles.labelCard, styles.shadowStyle)}>
        <Text style={styles.labelCardText}>{menu_title}</Text>
      </View>
    </View>
  );
}

const styles = {
  itemContainer: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,

  },

  labelCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingTop: 60,
    paddingBottom: 20,
    marginTop: -40,
  },

  labelCardText: {
    color: '#343845',
    fontSize: 24,
    paddingLeft: 10,
    fontWeight: 'bold'
  },

  // thumbnailContainerStyle: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginLeft: 10,
  //   marginRight: 10,
  // },

  thumbnailStyle: {
    // height: 300,
    // flex: 1,
    width: null,
    height: 300,
    borderRadius: 10,
    position: 'relative',
    zIndex: 1
    // resizeMode: 'cover',
    // width: 50,
  },

  shadowStyle: {
    shadowColor: "#000000",
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0
    }
  }
}

export default Item;
