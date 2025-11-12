import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

interface TokenData {
  anexoId: number;
  expiresAt: number;
}

@Injectable()
export class SecureDownloadTokenService {
  private tokens = new Map<string, TokenData>();

  // Gera token com duração configurável (padrão: 300 segundos - 5 minutos)
  gerarToken(anexoId: number, duracaoSegundos = 300): string {
    const token = uuidv4();
    const expiresAt = Date.now() + duracaoSegundos * 1000;

    this.tokens.set(token, { anexoId, expiresAt });

    return token;
  }

  // Retorna os dados do token se ele estiver válido
  obterDadosDoToken(token: string): TokenData | null {
    const data = this.tokens.get(token);
    if (!data) return null;

    if (Date.now() > data.expiresAt) {
      this.tokens.delete(token); // Limpeza opcional após expiração
      return null;
    }

    return data; // ← Aqui o token continua válido e reutilizável
  }

  // Invalida manualmente o token (opcional)
  invalidarToken(token: string) {
    this.tokens.delete(token);
  }
}