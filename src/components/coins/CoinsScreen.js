import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import Http from '../../libs/http';
import CoinsItem from './CoinsItem';
import Colors from 'cryptoTracker/src/res/colors';

const CoinsScreen = (props) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const req = await Http.instance.get(
      'https://api.coinlore.net/api/tickers/',
    );

    setCoins(req.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const handlePress = () => {
    console.log('go to detail', props);
    props.navigation.navigate('CoinDetail');
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
      ) : null}
      <FlatList
        data={coins}
        renderItem={({ item }) => <CoinsItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.charade,
  },
  titleText: {
    color: '#fff',
    textAlign: 'center',
  },
  btn: {
    padding: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    margin: 16,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
  },
  loader: {
    marginTop: 60,
  },
});

export default CoinsScreen;
