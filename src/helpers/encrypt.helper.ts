import bcrypt from 'bcryptjs';

const saltRounds = 10;

export function encryptData(payload: string, salt = saltRounds): string {
  return bcrypt.hashSync(payload, salt);
}

export function decryptData(payload: string, hash: string) {
  return bcrypt.compareSync(payload, hash);
}