/**
 * React-native Mera
 * Created by Ilya Trikoz on 06.06.20.
 * Copyright © 2018 Ilya Trikoz. All rights reserved.
 */

import { NativeModules } from 'react-native'

export namespace Types {
    export type Config = {
        ip: string
        port: number
    }
}

export class Mera {

    config: Types.Config

    constructor(config: Types.Config) {
        this.config = config
    }

    public connect() {
    }

}

export default Mera