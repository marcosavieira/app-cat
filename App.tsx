import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import catColor from './assets/catYeys.png';
import catBlack from './assets/catBlack.jpg';

export default function App() {
  const [isActive, setIsActive] = useState(false);
  let imgName = isActive ? catColor : catBlack;


  function handleState(){
    setIsActive((oldValue:boolean) => {
      return !oldValue
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Toque no gato</Text>
      <TouchableOpacity onPress={handleState}>

      <Image  source={imgName}></Image>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'red',
    fontSize: 30,
  }

});
