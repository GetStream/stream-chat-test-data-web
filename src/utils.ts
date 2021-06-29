import Base64 from 'crypto-js/enc-base64';
import HMACSHA256 from 'crypto-js/hmac-sha256';
import UTF8 from 'crypto-js/enc-utf8';
import CryptoJS from 'crypto-js/core';

const base64UrlEncode = (source: CryptoJS.lib.WordArray) =>
  Base64.stringify(source).replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');

const header = base64UrlEncode(UTF8.parse(JSON.stringify({ alg: 'HS256', typ: 'JWT' })));

export async function signUserToken(userID: string, secret: string, exp?: number) {
  if (!secret || !userID) return '';

  const date = Math.floor(new Date().getTime() / 1000);
  const payload = {
    user_id: userID,
    exp: exp !== undefined ? date + exp * 60 : undefined,
  };
  const encodedPayload = base64UrlEncode(UTF8.parse(JSON.stringify(payload)));
  const token = `${header}.${encodedPayload}`;
  return `${token}.${base64UrlEncode(HMACSHA256(token, secret))}`;
}

export async function signServerToken(secret: string) {
  if (!secret) return '';

  const payload = { server: true };
  const encodedPayload = base64UrlEncode(UTF8.parse(JSON.stringify(payload)));
  const token = `${header}.${encodedPayload}`;
  return `${token}.${base64UrlEncode(HMACSHA256(token, secret))}`;
}

/** adopted from https://github.com/ai/nanoid/blob/master/non-secure/index.js */
const alphabet = 'ModuleSymbhasOwnPr0123456789ABCDEFGHNRVfgctiUvzKqYTJkLxpZXIjQW';
export function randomId() {
  let id = '';
  for (let i = 0; i < 21; i++) {
    id += alphabet[(Math.random() * 64) | 0];
  }
  return id;
}

export function sleep(t = 1000) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

export function randomInt(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
