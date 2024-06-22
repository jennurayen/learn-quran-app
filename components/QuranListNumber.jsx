import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const QuranListNumber = ({num, fsize=16, width=30}) => {
  return (
    <View style={[styles.left, {width: width, height: width}]}>
      <View style={[styles.left, styles.leftA, {width: width , height: width}]}>
        <Text style={[styles.leftText, {fontSize: fsize} ]}>{num}</Text>
      </View>
    </View>
  );
};

export default QuranListNumber;

const styles = StyleSheet.create({
    left: {
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        borderColor: 'tomato',
        borderWidth: 1,
      },
      leftA: {
        transform: 'rotate(45deg)',
        backgroundColor: 'white'
      },
      leftText: {
        color: 'tomato',
        transform: 'rotate(-45deg)'
      },
});
