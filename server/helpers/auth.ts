import * as bcrypt from 'bcrypt';

export async function comparePasswords(
  password: string | Buffer,
  hash: string,
) {
  return await bcrypt.compare(password, hash);
}

export async function hashPassword(password: string | Buffer) {
  return await bcrypt.hash(password, 10);
}
