import {StyleSheet, Text, View, FlatList, TouchableOpacity, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import ListOfSura from '../data/ListOfSura';
import MenuDotSvg from '../assets/svg/MenuDotSvg';

const Quran = () => {

  const [isModalShow, setIsModalShow] = useState(false)

  function openMenuModal() {
    setIsModalShow(!isModalShow)
  }


  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.left}>
      <View style={[styles.left, styles.leftA]}>
        <Text style={styles.leftText}>{item.id}</Text>
      </View>
      </View>
      <View style={styles.mid}>
      <Text style={styles.midTextTop}>{item.translation}</Text>         
          <Text style={styles.midTextDown}>{item.transliteration} | {item.total_verses}</Text>          
      </View>
      <View style={styles.right}>
       <Text style={styles.rightText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

   // Header component
   const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Al-Quran Bengali</Text>
      <TouchableOpacity onPress={openMenuModal} style={styles.menuIcon}><MenuDotSvg/></TouchableOpacity>
      {/* Modal */}
      <Modal transparent={true} visible={isModalShow} animationType='fade' >
        <View style={styles.modalView}>
        <View style={styles.modalBox}>
          <View>
            <Text style={styles.Text}>Modal</Text>
          </View>

          <TouchableOpacity onPress={openMenuModal} ><Text style={styles.modalCancelBtn}>Cancel</Text></TouchableOpacity>
        </View>
        </View>
      </Modal>

    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={ListOfSura}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
};

export default Quran;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    width: '100%',
    backgroundColor: 'tomato',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 20,    
    marginLeft: 10,
  },
  menuIcon: {
  },
  card: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    gap: 15,
    borderWidth: 0.5,
    borderColor: '#0005',
    borderRadius: 10,
    alignItems: 'center',
  },
  left: {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    borderColor: 'tomato',
    borderWidth: 1,
    width: 30,
    height: 30,
    
  },
  leftA: {
    transform: 'rotate(45deg)',
    backgroundColor: 'white'
  },
  leftText: {
    fontSize: 18,
    color: 'tomato',
    fontWeight: 'bold',
    transform: 'rotate(-45deg)'
  },
  mid: {
    flex:1
  },
  midTextTop: {
    fontSize: 18,
    color: 'black',
  },
  midTextDown: {
    fontSize: 15,
    color: '#ff634799',
  },
  right: {

  },
  rightText: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'AmiriR',
    lineHeight: 50,
    letterSpacing: -10,
  },
  modalView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalBox: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  modalCancelBtn: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    color: 'white',
  }
});
