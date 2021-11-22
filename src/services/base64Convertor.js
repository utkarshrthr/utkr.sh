const charSet = '0123456789abcdefghijklmnopqrstuvwxyszABCDEFGHIJKLMNOPQRSTUVWXYZ_-'

const charMap = {};

charSet.split("").forEach((v, i) => charMap[v] = i)

const convertIntToBase64  = num => {
    let chars = [];
    let q = num;
    while (q > 0) {
      let r = q % 64;
      chars.push(charSet.charAt(r));
      q = parseInt(q / 64);
    }
    return chars.reverse().join("");
  }
  
  const convertBase64ToInt = code => {
    let chars = code.split("").reverse();
    let num = 0;
    for (let i = 0; i < chars.length; i++) {
      num += charMap[chars[i]] * Math.pow(64, i);
    }
    return num;
  }
  
  module.exports = {
    convertIntToBase64,
    convertBase64ToInt,
  };