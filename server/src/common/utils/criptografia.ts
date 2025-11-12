import { createHash } from 'crypto';

export class Criptografia {
  public static hash256(senha: string): string {
    return createHash('sha256').update(senha, 'utf8').digest('hex');
  }

  public static md5(senha: string): string {
    return createHash('md5').update(senha, 'utf8').digest('hex');
  }
}
