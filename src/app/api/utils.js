import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export  function generateRandomString(length=20) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function isValidUrl(url) {
  // Regular expression to match URLs
  const urlRegex = /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;

  return urlRegex.test(url);
}

import mysql from 'mysql2';

export async function databaseConnection(){
  const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
  });
  return connection;
}

export function executeQuery(connection, q) {
  return new Promise((resolve, reject) => {
      connection.query(q, (error, results) => {
          if (error) {
              reject(new Error('Error- ' + error.message + ' query: ' + q));
          } else {
              resolve(results);
          }
      });
  });
}

export async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

export async function comparePassword(plainPassword, hash){
  return  await bcrypt.compare(plainPassword, hash);
}

export function generateToken(email) {
  const secretKey = 'your_secret_key'; // Replace this with your own secret key
  const payload = { email };

  return jwt.sign(payload, secretKey);
}