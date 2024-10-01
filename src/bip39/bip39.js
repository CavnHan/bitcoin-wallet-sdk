"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMnemonic = createMnemonic;
exports.mnemonicToEntropy = mnemonicToEntropy;
exports.entropyToMnemonic = entropyToMnemonic;
exports.mnemonicToSeed = mnemonicToSeed;
exports.mnemonicToSeedSync = mnemonicToSeedSync;
exports.validateMnemonic = validateMnemonic;
var bip39 = require('bip39');
/**
 * 设置词库
 */
var wordlists = {
    //使用索引签名
    chinese_simplified: bip39.wordlists.chinese_simplified,
    chinese_traditional: bip39.wordlists.chinese_traditional,
    english: bip39.wordlists.english,
    french: bip39.wordlists.french,
    italian: bip39.wordlists.italian,
    japanese: bip39.wordlists.japanese,
    korean: bip39.wordlists.korean,
    spanish: bip39.wordlists.spanish
};
/**
 * k:助记词长度
 * v:熵位数
 */
var entropyBitsByWordCount = {
    12: 128,
    15: 160,
    18: 192,
    21: 224,
    24: 256,
};
/**
 * 创建助记词
 * createMnemonic
 * @param number 设置助记词的长度 12,15,18,21,24
 * @param language 设置助记词的语言
 */
function createMnemonic(number, language) {
    var entropyBits = entropyBitsByWordCount[number];
    if (entropyBits === undefined) {
        return '不支持的长度';
    }
    if (!wordlists[language]) {
        return '不支持的语言';
    }
    return bip39.generateMnemonic(entropyBits, null, wordlists[language]);
}
/**
 * 助记词转换为熵
 * mnemonic conversion to entropy
 * @param mnemonic 助记词
 * @param language 语言
 */
function mnemonicToEntropy(mnemonic, language) {
    if (!wordlists[language]) {
        return '不支持的语言';
    }
    return bip39.mnemonicToEntropy(mnemonic, wordlists[language]);
}
/**
 * 熵转换为助记词
 * entropy conversion to mnemonic
 * @param encrytMnemonic 熵
 * @param language 语言
 */
function entropyToMnemonic(encrytMnemonic, language) {
    if (!wordlists[language]) {
        return '不支持的语言';
    }
    return bip39.entropyToMnemonic(encrytMnemonic, wordlists[language]);
}
/**
 * 助记词转换为种子 异步
 * @param mnemonic 助记词
 * @param password 密码
 */
function mnemonicToSeed(mnemonic, password) {
    return bip39.mnemonicToSeed(mnemonic, password);
}
/**
 * 助记词转换为种子 同步
 * @param mnemonic 助记词
 * @param password 密码
 */
function mnemonicToSeedSync(mnemonic, password) {
    return bip39.mnemonicToSeedSync(mnemonic, password);
}
/**
 * 验证助记词
 * @param mnemonic 助记词
 * @param language 语言
 */
function validateMnemonic(mnemonic, language) {
    if (!wordlists[language]) {
        return '不支持的语言';
    }
    return bip39.validateMnemonic(mnemonic, wordlists[language]);
}
