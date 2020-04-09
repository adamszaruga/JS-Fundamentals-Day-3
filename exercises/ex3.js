/*******************
EX 3: Caesar Cipher
********************/

function decipher(message) {
    // Finish implementing this function!
    // It's supposed to decipher messages encoded with the "caesar cipher" method
    // See the below website for an example of how caesar ciphers work!
    // https://cryptii.com/pipes/caesar-cipher
    // 
    // You can assume that the caesar cipher shifts letters over by 7
    // e.g. a --> h, c --> j,  x --> e

    let alphabet = "abcdefghijklmnopqrstuvwxyz"; 
    // HINT: you can treat strings like arrays. alphabet[2] will evaluate to "c".

    // Don't forget to return the decoded string at the end of the function!
}

// When you implement the function correctly, you should be able to read the secret phrase below!
let decodedMessage = decipher("Vusf nylha wyvnyhttlyz jhu kljpwoly aopz tlzzhnl");

console.log(decodedMessage);