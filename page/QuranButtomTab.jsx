import {StyleSheet, View, FlatList, } from 'react-native';
import React from 'react';
import ListOfSura from '../data/ListOfSura';
import QuranListHeader from '../components/QuranListHeader';
import QuranListCard from '../components/QuranListCard';


const QuranButtomTab = ( {navigation} ) => {

  return (
    <View style={styles.container}>
      <FlatList
        data={ListOfSura}
        // renderItem
        renderItem={({ item }) => (
          <QuranListCard item={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
        // renderHeader
        ListHeaderComponent={QuranListHeader}
      />
    </View>
  );
};

export default QuranButtomTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});
