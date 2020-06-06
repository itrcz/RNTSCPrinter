
# rn-tsc-printer

## TSC Printer SDK for React-Native

### Requirements

React-Native 0.60+

### Install

`$ yarn add rn-tsc-printer --save`

#### iOS

1. Not implemeted yet

#### Android

1. 🙏

### How to use


```typescript
import TSCPrinter from 'rn-tsc-printer';

```
2. Create printer instance

```typescript
const printer = new TSCPrinter({
	ip: "192.168.1.39",
	port: 9100,
	paperWidth: 60,
	paperHeight: 30,
});

```

3. Print

```typescript
	await printer.open()
	await printer.clear()
	await printer.setup()
	await printer.barcode({
		x: 20,
		y: 20,
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
```

### TODO

1. iOS sdk implementation
2. image upload