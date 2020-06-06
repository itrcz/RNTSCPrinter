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
  ip: '192.168.31.39',
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
                await printer.openport()
                const e = await printer.printerstatus(1000)
                await printer.clearbuffer()
                await printer.setup()
                await printer.printerfont({
                  x: 20, y: 20, font: '4', rotation: 0, text: "Заказ #4", zoomX: 1, zoomY: 1
                })
                await printer.printerfont({
                  x: 20, y: 60, font: '2', rotation: 0, text: "Помидоры азербайджанские", zoomX: 1, zoomY: 1
                })
                await printer.printerfont({
                  x: 20, y: 210, font: '3', rotation: 0, text: "ВЕС: 2,44 Кг", zoomX: 1, zoomY: 1
                })
                await printer.printerfont({
                  x: 300, y: 210, font: '1', rotation: 0, text: "foods & goods", zoomX: 1, zoomY: 1
                })
                // await printer.sendcommand("TEXT 130,210,\"3\",0,1,1,\"foods & goods\"\r\n")
                await printer.barcode({
                  x: 20,
                  y: 90,
                  height: 100,
                  narrow: 2,
                  wide: 0,
                  printText: false,
                  rotation: 0,
                  type: '93',
                  code: '12345-12345-12345'
                })
                await printer.printlabel(1,1)
                await printer.closeport()
                console.warn(e)
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
