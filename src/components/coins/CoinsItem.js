import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import Colors from 'cryptoTracker/src/res/colors';

const CoinsItem = ({ item }) => {
  const getImgArrow = () => {
    if (item.percent_change_1h > 0) {
      return require('cryptoTracker/src/assets/arrow_up.png');
    } else {
      return require('cryptoTracker/src/assets/arrow_down.png');
    }
  };

  return (
    <View style={styles.constainer}>
      <View style={styles.row}>
        <Text style={styles.symbolText}>{item.symbol}</Text>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.priceText}>{`$${item.price_usd}`}</Text>
      </View>

      <View>
        <Text style={styles.percenText}>{item.percent_change_1h}</Text>
        <Image style={styles.imgIcon} source={getImgArrow()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    borderBottomColor: Colors.zircon,
    borderBottomWidth: 1,
    marginLeft: Platform.OS === 'ios' ? 16 : 0,
  },
  row: {
    flexDirection: 'row',
  },
  symbolText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12,
  },
  nameText: {
    color: Colors.white,
    fontSize: 14,
    marginRight: 16,
  },
  priceText: {
    color: Colors.white,
    fontSize: 14,
  },
  percenText: {
    color: Colors.white,
    fontSize: 12,
    marginRight: 8,
  },
  imgIcon: {
    width: 22,
    height: 22,
  },
});

export default CoinsItem;
