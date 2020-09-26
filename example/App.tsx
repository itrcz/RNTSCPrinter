/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import Mera from 'rn-mera';

const device = Mera.connect({
  ip: '192.168.1.166',
  port: 1001,
})

const App = () => {
  const [value, setValue] = useState('0')
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{ padding: 40, justifyContent: "center" }}>
          <Text>{value}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
