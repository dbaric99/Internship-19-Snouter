import * as bcrypt from 'bcrypt';

export function encodePassword(rawPassword: string) {
  const SALT = bcrypt.genSaltSync();
  return { hash: bcrypt.hashSync(rawPassword, SALT), salt: SALT };
}
