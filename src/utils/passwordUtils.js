const crypto = require('crypto');

//salt반환 함수 
const createSalt = () => 
    new Promise((resolve, reject) => {
      crypto.randomBytes(64, (err, buf) => {
        if (err) reject(err);
        resolve(buf.toString('base64'));
      });
    });

///salt이용해서 비밀번호 암호화
const createHashedPassword = (plainPassword) => 
    new Promise(async(resolve, reject) => {
        const salt = await createSalt();
        crypto.pbkdf2( plainPassword, salt, 9999, 64,'sha512', (err, key) => {
            if (err) reject(err);
            resolve({ pw: key.toString('base64'), salt });
        });
    });
const hashedInputPassword = (password, salt)=>
    new Promise((resolve, reject) => {
      crypto.pbkdf2(password, salt, 9999, 64, 'sha512', (err, key) => {
        if (err) reject(err);
        resolve(key.toString('base64'));
      });
    });


module.exports = { createSalt, createHashedPassword, hashedInputPassword};