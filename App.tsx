/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import type { PropsWithChildren,} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,

} from 'react-native';
import Test from './Components/Test';

const name = "Abhishek"
let age = 39;







const App = () => {
  function pressme() {
    setName2("abhishek");
  }
  
  const [name2, setName2] = useState("Ravina")
  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>{name2}</Text>
<Button onPress={pressme} title='ClickHere'></Button>
<Test/>
    </View>
  );
};

export default App;
