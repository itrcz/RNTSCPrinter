/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, Alert, View, Button } from 'react-native';
import TSCPrinter from 'rn-tsc-printer'

const printer = new TSCPrinter({
  ip: '192.168.1.39',
  port: 9100,
  width: 60,
  height: 30,
})

const App = () => {
  const [busy, setBusy] = useState(false)
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{ padding: 40, justifyContent: "center" }}>
          <Button
            title={busy ? '...waiting...' : 'Print'}
            disabled={busy}
            onPress={async () => {
              if (busy) return
              try {
                setBusy(true)
                await printer.open()
                await printer.clear()
                await printer.setup()
                await printer.barcode({
                  x: 20,
                  y: 90,
                  height: 100,
                  narrow: 2,
                  wide: 0,
                  printText: false,
                  rotation: 0,
                  type: '128',
                  code: '1234567890'
                })
                await printer.print(1,1)
                await printer.close()
              } catch (error) {
                console.error(error)
              } finally {
                setBusy(false)
              }
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
