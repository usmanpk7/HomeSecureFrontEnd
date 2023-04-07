import { isNull } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class EncryptionDecryptionService {
    private readonly ENCRYPTION_KEY = '8544426951182946';
    public decrypt(cipherText: {}, key: string = this.ENCRYPTION_KEY) {
     key = CryptoJS.enc.Utf8.parse(key);
        let iv = CryptoJS.enc.Utf8.parse(key);
        let decrypted = CryptoJS?.AES.decrypt(cipherText, key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        const data =  decrypted.toString(CryptoJS.enc.Utf8);
        return data;
    }
    public decryption(cipherText: {}, key: string) {
        key = CryptoJS.enc.Utf8.parse(key);
           let iv = CryptoJS.enc.Utf8.parse(key);
           let decrypted = CryptoJS?.AES.decrypt(cipherText, key, {
               keySize: 128 / 8,
               iv: iv,
               mode: CryptoJS.mode.ECB,
               padding: CryptoJS.pad.Pkcs7
           });
           const data =  decrypted.toString(CryptoJS.enc.Utf8);
           return data;
       }
}
