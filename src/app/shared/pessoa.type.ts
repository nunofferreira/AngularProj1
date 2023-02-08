// export interface Pessoa {}
// export class Pessoa {}
// ↑ 2 outras formas de fazer

export type Pessoa = {
    id?: number,
    nome: string,
    idade: number,
    data_nascimento: Date,
    casado: boolean
}
