import jwt from 'jsonwebtoken';

const secret: string = 'top_secret';

export function createToken(data: any) {
  const token = jwt.sign(
    data,
    secret,
    { expiresIn: '2h' }
  );
  return token || null;
}

export function readToken(token: string) {
  return jwt.verify(token, secret) || null;
}