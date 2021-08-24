import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';

const stylesIcon =  StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'stretch'
  }
})

const styleText = StyleSheet.create({
  innerTextTittle: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'blue',
    fontWeight: 'bold'
  }
})

export default function App() {

  return (
    <View style={styles.container}>
      <Image 
      style = {stylesIcon.logo}
      source={require('./images/avatar.png')}
      />
      <Text style = {styleText.innerTextTittle}>
        Nombre:
        <Text style = {styleText.innerText}> Irvin Armando Recinos Alvarado </Text>
      </Text>
      <Text style = {styleText.innerTextTittle}>
        Hobbies:
        <Text style = {styleText.innerText}> Aprender algo nuevo de programación , video juegos y ver peliculas o series con una buena 🍕 </Text>
      </Text>
      <Text style = {styleText.innerTextTittle}>
        Lenguajes de programación:
        <Text style = {styleText.innerText}> Java , C# y en este momento me esta llamando mucho la atención ReactJS y Native.👀!</Text>
      </Text>
      <StatusBar style="auto" />
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
