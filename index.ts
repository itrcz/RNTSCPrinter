/**
 * React-native TSCPrinter
 * Created by Ilya Trikoz on 06.06.20.
 * Copyright © 2018 Ilya Trikoz. All rights reserved.
 */

import { NativeModules } from 'react-native'

export namespace Types {
    export type Config = {
        /**
         * IP address of TSC
         */
        ip: string
        /**
         * Port of TSC
         * @default 9100
         */
        port: number
        /**
         * Paper width, mm
         */
        width: number
        /**
         * Paper height, mm
         */
        height: number
        /**
         * Speed 0~12
         * 1.0"/sec
         * print speeds vary on different printer models 
         */
        speed?: number
        /**
         * Print density 0~15
         */
        density?: number
        /**
         * Gap media, mm
         */
        gap?: number
        /**
         * blackmark media, mm
         */
        bline?: number
        /**
         * 
         */
        encoding?: 'UTF-8'
    }

    export type BarCode = {
        x: number
        y: number
        type: '128' | '128M' | 'EAN128' | '25' | '25C' | '39' | '39C' | '93' | 'EAN13' | 'EAN13+2' | 'EAN13+5' | 'EAN8' | 'EAN8+2' | 'EAN8+5' | 'CODA' | 'POST' | 'UPCA' | 'UPCA+2' | 'UPCA+5' | 'UPCE' | 'UPCE+2' | 'UPCE+5'
        height: number
        printText: boolean
        rotation: 0 | 90 | 180 | 270
        narrow: number
        wide: number
        code: string
    }

    export type PrinterFont = {
        x: number
        y: number
        font: '1' | '2' | '3' | '4' | '5' | 'TST24.BF2' | 'TST16.BF2' | 'TTT24.BF2' | 'TSS24.BF2' | 'TSS16.BF2' | 'K' | 'L'
        rotation: 0 | 90 | 180 | 270
        zoomX: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
        zoomY: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
        text: string
    }
}

export class TSCPrinter {

    public config: Types.Config

    constructor(config: Types.Config) {
        this.config = config
    }

    public updateConfig(config: Types.Config) {
        this.config = config
    }

    public async setup(): Promise<Boolean> {
        const { width, height, speed, density, gap, bline, encoding } = this.config

        await this.cmd(`SIZE ${width} mm, ${height} mm\r\n`)
        await this.cmd(`SPEED ${speed || 5}\r\n`)
        await this.cmd(`DENSITY ${density || 5}\r\n`)
        if (gap) {
            await this.cmd(`GAP ${gap} mm, 0 mm\r\n`)//Gap media
        }
        if (bline) {
            await this.cmd(`BLINE ${bline} mm, 0 mm\r\n`)//blackmark media
        }
        await this.cmd(`CODEPAGE ${encoding || 'UTF-8'}\r\n`)

        return true
    }

    /**
     * Send text to printer
     */
    public async text(params: Types.PrinterFont): Promise<Boolean> {
        return NativeModules.RNTSCPrinter?.printerfont(params)
    }

    /**
     * Send Barcode to printer
     */
    public async barcode(params: Types.BarCode): Promise<Boolean> {
        return NativeModules.RNTSCPrinter?.barcode(params)
    }

    /**
     * Print data
     */
    public async print(sets: number, copies: number): Promise<Boolean> {
        return NativeModules.RNTSCPrinter?.printlabel({
            sets,
            copies,
        })
    }

    /**
     * Open connection
     */
    public async open(): Promise<Boolean> {
        await NativeModules.RNTSCPrinter?.openport(this.config)
        await this.setup()
        return true
    }

    /**
     * Send .txt files to the printer
     * (the file need save to Download folder path in handheld devices)
     */
    public async status(timeout: number): Promise<string> {
        return NativeModules.RNTSCPrinter?.printerstatus(timeout)
    }

    /**
     * Send .txt files to the printer
     * (the file need save to Download folder path in handheld devices)
     */
    public async txt(fileName: string): Promise<Boolean> {
        return NativeModules.RNTSCPrinter?.sendfile(fileName)
    }

    /**
     * Download mono PCX graphic files to the printer 
     * (the file need save to Download folder path in handheld devices)
     */
    public async bmp(fileName: string): Promise<Boolean> {
        return NativeModules.RNTSCPrinter?.downloadbmp(fileName)
    }

    /**
     * Download mono TTF graphic files to the printer 
     * (the file need save to Download folder path in handheld devices)
     */
    public async ttf(fileName: string): Promise<Boolean> {
        return NativeModules.RNTSCPrinter?.downloadttf(fileName)
    }

    /**
     * Download mono PCX graphic files to the printer 
     * (the file need save to Download folder path in handheld devices)
     */
    public async pcx(fileName: string): Promise<Boolean> {
        return NativeModules.RNTSCPrinter?.downloadpcx(fileName)
    }

    /**
     * Close connection
     */
    public async close(delay: number = 100): Promise<Boolean> {
        return NativeModules.RNTSCPrinter?.closeport(delay)
    }

    /**
     * Clear printer buffer
     */
    public async clear(): Promise<Boolean> {
        return NativeModules.RNTSCPrinter?.clearbuffer()
    }

    /**
     * Send command to printer
     */
    public async cmd(command: string): Promise<Boolean> {
        return NativeModules.RNTSCPrinter?.sendcommand(command)
    }
}

export default TSCPrinter