import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import NextSVGA from '../assets/svg/NextSVGA';
import PrevSVGA from '../assets/svg/PrevSVGA';

const QuranDetailsHeader = ({suraHeading, nextBtn, prevBtn}) => {
  const {id, name, transliteration, total_verses, type} = suraHeading
  return (
    <View style={styles.listHeader}>
      <View style={styles.btn}>
      {id == 114 ? 
      <Text></Text> :
      <TouchableOpacity      
        onPress={nextBtn} style={styles.btnTouch}>
        <NextSVGA fill="black" />
      </TouchableOpacity>}
      </View>
      
      

      <View style={styles.headerBox}>
        <View style={styles.roundBox}>
            <Text style={styles.boxText}>{type}</Text>
        </View>
        <View>
        <Text style={styles.abText}> {name}</Text>
        <Text style={styles.enText}>{id}: {transliteration}</Text>
        </View>
        <View style={styles.roundBox}>
            <Text style={styles.boxText}>{total_verses}</Text>
            <Text style={styles.boxText}>verses</Text>
        </View>
      </View>
      
      <View style={styles.btn}>
      {id == 1 ? 
      <Text></Text>: 
      <TouchableOpacity 
        onPress={prevBtn} style={styles.btnTouch}>
        <PrevSVGA fill="black" />
      </TouchableOpacity>
      }
     </View>
    </View>
  );
};

export default QuranDetailsHeader;

const styles = StyleSheet.create({
  listHeader: {
    height: 60,
    backgroundColor: '#ffb8ab',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  btn: {
    width: 50,
    height: '100%',
  },
  btnTouch: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffa999',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBox: {
    flex: 1,
    flexDirection:  'row',
    justifyContent: 'space-between',
    padding: 2
  },
  abText: {
    fontFamily: 'IndoPak',
    color: 'black',
    textAlign: 'center',
    margin: 0,
    padding: 0,
    lineHeight: 20,
  },
  enText: {
    flexDirection: 'row',
    color: 'black',
    fontSize: 18,
    lineHeight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundBox: {
    borderRadius: 50,
    width: 60,
    height: 40,
    backgroundColor: '#ffdcd6',
    justifyContent: 'center',
    alignItems: 'center',   
  },
  boxText : {
    fontSize: 12,
  },

});
