/* eslint-disable prettier/prettier */


/* tabela usuario */
export interface InfoUsuario {
    id_usuario?: number;
    nome: string;
    sobrenome: string;
    usuario: string;
    senha: string;
    data_nascimento: string;
    tipo?: number;
    status?: number;
    data_inativacao?: string;
}


/* tabela tema_pergunta */
export interface TemaPergunta {
    id_tema: number;
    nome_tema: string;
}

/* tabela pergunta */
export interface Pergunta {
    id_pergunta: number;
    fk_tema: number;
    nivel_dificuldade: 'Fácil' | 'Médio' | 'Difícil';
    tipo_pergunta: 'MULTIPLA_ESCOLHA' | 'BLOCOS';
    enunciado: string;
    resposta_correta: string;
    data_criacao: string; // DATETIME
}

/* tabela alternativa */
export interface Alternativa {
    id_alternativa: number;
    id_pergunta: number;
    texto_alternativa: string;
    letra: string;
}

/* tabela bloco_resposta */
export interface BlocoResposta {
    id_bloco: number;
    id_pergunta: number;
    texto_bloco: string;
}

/* tabela comentario */
export interface Comentario {
    id_comentario: number;
    id_pergunta: number;
    texto_comentario: string;
}

/* tabela score */
export interface Score {
    id_score: number;
    id_usuario: number;
    pontuacao: number;
    nivel_atingido: 'Fácil' | 'Médio' | 'Difícil';
    data_score: string; // DATETIME
}

/* tabela historico_respostas */
export interface HistoricoRespostas {
    id_historico: number;
    id_usuario: number;
    id_pergunta: number;
    resposta_enviada: string;
    acertou: boolean;
    data_resposta: string; // DATETIME
}