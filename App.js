import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const boyut = 5;

  const satirlar = [];

  let i = 0;
  for (i; i < boyut; i++) {
    satirlar[i] = '';

    for(let j = 0;j <= boyut - i;j++) satirlar[i] += ' ';
    for(let j = 0;j <= 2*i;j++) satirlar[i] += '*';

  }
  
  // let satirlarters = satirlar.reverse();
  // console.log("satirlar");
  // satirlar.forEach(s =>(console.log(s)));
  // console.log("satirlarters")
  // satirlarters.forEach(s =>(console.log(s)));

  satirlar.forEach(s =>(console.log(s)))
  satirlar.reverse().forEach(s =>(console.log(s)))

  // satirlar.forEach(s =>(console.log(s)))
  // satirlar.reverse().forEach(s =>(console.log(s)))

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start a party!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
