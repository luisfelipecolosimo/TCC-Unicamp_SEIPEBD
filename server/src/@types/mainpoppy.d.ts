/* eslint-disable prettier/prettier */
declare module "mainpoppy" {
    /**
     * Biblioteca MainPoppy 🛠️
     * 
     * Adiciona comentários da Poppy em arquivos de forma divertida.
     * Todas as funções são síncronas ou assíncronas dependendo da ação.
     */
    interface MainPoppy {
        /** Comenta em todos os arquivos uma imagem aleatória da Poppy */
        martelao(): void;

        /** Comenta em todos os arquivos .js uma imagem aleatória da Poppy */
        martelo(): void;

        /** Comenta em um arquivo uma imagem aleatória da Poppy */
        martelinho(arquivo: string): void;

        /** Adiciona arquivos à lista de não alteração */
        escudo(arquivo: string): void;

        /** Remove um item da lista de não alteração */
        escudada(arquivo: string): void;

        /** Reseta a lista de não alteração */
        reset(): void;

        /** Retorna uma imagem aleatória da Poppy (Promise<string>) */
        poppyzinha(): Promise<string>;

        /** Retorna um array com todas as imagens da Poppy (Promise<string[]>) */
        filiacaopoppy(): Promise<string[]>;

        /**
         * Comenta em um arquivo uma imagem da Poppy — recomendado usar com `poppyzinha` ou `filiacaopoppy`.
         */
        martelinhoteleguiado(arquivo: string, imagem: string): void;

        /**
         * Comenta em um arquivo uma imagem da Poppy escolhida pela posição.
         * Se a posição for inválida, escolhe uma aleatória.
         */
        martelinhodirecional(arquivo: string, posicao: number): void;
    }

    const poppy: MainPoppy;
    export default poppy;
}
