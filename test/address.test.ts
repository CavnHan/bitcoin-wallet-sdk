import bip39 = require("bip39")
import {
    createAddress,
    createSchnorrAddress,
    createMultiSignAddress,
    CreateMultiSigAddressParams,
    CreateAddressParams
} from "../src";
import * as assert from 'assert';

describe('btc unit test case', () => {
    test('createAddress by p2pkh bitcoin', () => {
        const mnemonic = "around dumb spend sample oil crane plug embrace outdoor panel rhythm salon";
        const seed = bip39.mnemonicToSeedSync(mnemonic, "")
        const params: CreateAddressParams = {
            seedHex: seed.toString("hex"),
            receiveOrChange: "0",
            addressIndex: 0,
            network: "bitcoin",
            method: "p2pkh"
        }
        const account = createAddress(params)
        console.log("p2pkh账户地址：", account.address)
        console.log("p2pkh私钥：", account.privateKey)
        console.log("p2pkh公钥：", account.publicKey)
        assert.strictEqual(account.address, '1H7AcqzvVQunYftUcJMxF9KUrFayEnf83T')
        assert.strictEqual(account.privateKey, '60164bec9512d004af7f71e7ed868c8e9ac2cc6234d8b682037ec80547595f2e')
        assert.strictEqual(account.publicKey, '030e93482fd0037d589b08c36bb22afc041338ba444f9f9d7ba129348f9be731c1')
    })

    test('createAddress by p2pkh testnet', () => {
        const mnemonic = "around dumb spend sample oil crane plug embrace outdoor panel rhythm salon";
        const seed = bip39.mnemonicToSeedSync(mnemonic, "")
        const params: CreateAddressParams = {
            seedHex: seed.toString("hex"),
            receiveOrChange: "0",
            addressIndex: 0,
            network: "testnet",
            method: "p2pkh"
        }
        const account = createAddress(params)
        assert.strictEqual(account.address, 'mwd7uu5uJSM3KnN6KsLL54XoiFBg4JYX7o');
        assert.strictEqual(account.privateKey, '60164bec9512d004af7f71e7ed868c8e9ac2cc6234d8b682037ec80547595f2e');
        assert.strictEqual(account.publicKey, '030e93482fd0037d589b08c36bb22afc041338ba444f9f9d7ba129348f9be731c1');
    })

    test('createAddress by p2wpkh bitcoin', () => {
        const mnemonic = "around dumb spend sample oil crane plug embrace outdoor panel rhythm salon";
        const seed = bip39.mnemonicToSeedSync(mnemonic, "")
        const param: CreateAddressParams = {
            seedHex: seed.toString("hex"),
            receiveOrChange: "0",
            addressIndex: 0,
            network: "bitcoin",
            method: "p2wpkh"
        }
        const account = createAddress(param)
        assert.strictEqual(account.address, 'bc1qkzkgj7n4n72yhyjmpzs3a6uzy5kj3cmkad2dk7');
        assert.strictEqual(account.privateKey, '60164bec9512d004af7f71e7ed868c8e9ac2cc6234d8b682037ec80547595f2e');
        assert.strictEqual(account.publicKey, '030e93482fd0037d589b08c36bb22afc041338ba444f9f9d7ba129348f9be731c1');
    });

    test('createAddress by p2wpkh testnet', () => {
        const mnemonic = "around dumb spend sample oil crane plug embrace outdoor panel rhythm salon";
        const seed = bip39.mnemonicToSeedSync(mnemonic, "")
        const param: CreateAddressParams = {
            seedHex: seed.toString("hex"),
            receiveOrChange: "0",
            addressIndex: 0,
            network: "testnet",
            method: "p2wpkh"
        }
        const account = createAddress(param)
        console.log('p2wpkh 测试网账户地址：', account.address)
        console.log('p2wpkh 测试网私钥：', account.privateKey)
        console.log('p2wpkh 测试网公钥：', account.publicKey)
        assert.strictEqual(account.address, 'tb1qkzkgj7n4n72yhyjmpzs3a6uzy5kj3cmkht37dd');
        assert.strictEqual(account.privateKey, '60164bec9512d004af7f71e7ed868c8e9ac2cc6234d8b682037ec80547595f2e');
        assert.strictEqual(account.publicKey, '030e93482fd0037d589b08c36bb22afc041338ba444f9f9d7ba129348f9be731c1');
    });

    test('createAddress by p2sh bitcoin', () => {
        const mnemonic = "around dumb spend sample oil crane plug embrace outdoor panel rhythm salon";
        const seed = bip39.mnemonicToSeedSync(mnemonic, "")
        const param: CreateAddressParams = {
            seedHex: seed.toString("hex"),
            receiveOrChange: "0",
            addressIndex: 0,
            network: "bitcoin",
            method: "p2sh"
        }
        const account = createAddress(param)
        assert.strictEqual(account.address, '35iXFVdZb5qxeqxgkZHBaS3KjaP89e79kP');
        assert.strictEqual(account.privateKey, '60164bec9512d004af7f71e7ed868c8e9ac2cc6234d8b682037ec80547595f2e');
        assert.strictEqual(account.publicKey, '030e93482fd0037d589b08c36bb22afc041338ba444f9f9d7ba129348f9be731c1');
    });

    test('createAddress by p2sh testnet', () => {
        const mnemonic = "around dumb spend sample oil crane plug embrace outdoor panel rhythm salon";
        const seed = bip39.mnemonicToSeedSync(mnemonic, "")
        const param: CreateAddressParams = {
            seedHex: seed.toString("hex"),
            receiveOrChange: "0",
            addressIndex: 0,
            network: "testnet",
            method: "p2sh"
        }
        const account = createAddress(param)
        console.log('p2sh 测试网账户地址：', account.address)
        console.log('p2sh 测试网私钥：', account.privateKey)
        console.log('p2sh 测试网公钥：', account.publicKey)
        assert.strictEqual(account.address, '2MwGjKEZbCYMJrdbERgu4CP2awvbHyHgyqt');
        assert.strictEqual(account.privateKey, '60164bec9512d004af7f71e7ed868c8e9ac2cc6234d8b682037ec80547595f2e');
        assert.strictEqual(account.publicKey, '030e93482fd0037d589b08c36bb22afc041338ba444f9f9d7ba129348f9be731c1');
    });

    test('createAddress by p2tr maninet', () => {
        const mnemonic = "around dumb spend sample oil crane plug embrace outdoor panel rhythm salon";
        const seed = bip39.mnemonicToSeedSync(mnemonic, "")
        const param = {
            seedHex: seed.toString("hex"),
            receiveOrChange: "0",
            addressIndex: "0",
            network: "mainnet",
        }
        const account = createSchnorrAddress(param)
        console.log(account.address);
        console.log(account.privateKey);
        console.log(account.publicKey);
    });

    test('p2pkh multi sign 3-2 address', () => {
        const params: CreateMultiSigAddressParams = {
            pubkeys: [
                '026477115981fe981a6918a6297d9803c4dc04f328f22041bedff886bbc2962e01',
                '02c96db2302d19b43d4c69368babace7854cc84eb9e061cde51cfa77ca4a22b8b9',
                '03c6103b3b83e4a24a0e33a4df246ef11772f9992663db0c35759a5e2ebf68d8e9',
            ].map(hex => Buffer.from(hex, 'hex')),
            network: "bitcoin",
            method: "p2pkh",
            threshold: 2
        }
        const address: string = createMultiSignAddress(params)
        console.log("p2pkh多签地址：", address)
        assert.strictEqual(address, '36NUkt6FWUi3LAWBqWRdDmdTWbt91Yvfu7');
    })

    test('p2wpkh multi sign 3-2 address', () => {
        const param:CreateMultiSigAddressParams = {
            pubkeys: [
                '026477115981fe981a6918a6297d9803c4dc04f328f22041bedff886bbc2962e01',
                '02c96db2302d19b43d4c69368babace7854cc84eb9e061cde51cfa77ca4a22b8b9',
                '03c6103b3b83e4a24a0e33a4df246ef11772f9992663db0c35759a5e2ebf68d8e9',
            ].map(hex => Buffer.from(hex, 'hex')),
            network: "bitcoin",
            method: "p2wpkh",
            threshold: 2
        }
        const address = createMultiSignAddress(param)
        assert.strictEqual(address, 'bc1qj67d3x5sv3cqdnfje67f9kdlavv7fv6xreznweymj3nqj493pulqz8e6gj');
    });

    test('p2sh multi sign 3-2 address', () => {
        const param:CreateMultiSigAddressParams = {
            pubkeys: [
                '026477115981fe981a6918a6297d9803c4dc04f328f22041bedff886bbc2962e01',
                '02c96db2302d19b43d4c69368babace7854cc84eb9e061cde51cfa77ca4a22b8b9',
                '03c6103b3b83e4a24a0e33a4df246ef11772f9992663db0c35759a5e2ebf68d8e9',
            ].map(hex => Buffer.from(hex, 'hex')),
            network: "bitcoin",
            method: "p2sh",
            threshold: 2
        }
        const address = createMultiSignAddress(param)
        assert.strictEqual(address, '3PLy7raPcJCaK4sJyMhWenbzFSZ3YTqo86');
    });
})