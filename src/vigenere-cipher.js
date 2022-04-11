const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.reverse = !direct;
  } 
  encrypt(text, key) {
    if (text == undefined || key == undefined) throw new Error('Incorrect arguments!');
    let toEncrypt = text.toUpperCase();
    let start = 'A'.charCodeAt(0);
    let abc = 26;
    let mult = Math.ceil(text.length / key.length);
    key = key.repeat(mult).toUpperCase();
    let result = [];
    let except = ' !@#$%^&*(),<>.?1234567890:+-|/';
    
    for (let i = 0; i < toEncrypt.length; i++) {
    if (except.includes(toEncrypt[i])) result.push(toEncrypt[i]);
    else {
        let index = toEncrypt.charCodeAt(i) - start;
        let shift = key.charCodeAt(0) - start;
        result.push(String.fromCharCode(start + (index + shift) % abc));
        key = key.slice(1);
      }
    }
    if (this.reverse == true) return result.reverse().join('');
    return result.join(''); 
  }
  decrypt(text, key) {
    if (text == undefined || key == undefined) throw new Error('Incorrect arguments!');
    let toEncrypt = text.toUpperCase();
    let start = 'A'.charCodeAt(0);
    let abc = 26;
    let mult = Math.ceil(text.length / key.length);
    key = key.repeat(mult).toUpperCase();
    let result = [];
    let except = ' !@#$%^&*(),<>.?1234567890:+-|/';
    
    for (let i = 0; i < toEncrypt.length; i++) {
    if (except.includes(toEncrypt[i])) result.push(toEncrypt[i]);
    else {
        let index = toEncrypt.charCodeAt(i) - start;
        let shift = key.charCodeAt(0) - start;
        result.push(String.fromCharCode(start + (index - shift + abc) % abc));
        key = key.slice(1);
      }
    }
    if (this.reverse == true) return result.reverse().join('');
    return result.join(''); 
  }
}

module.exports = {
  VigenereCipheringMachine
};
