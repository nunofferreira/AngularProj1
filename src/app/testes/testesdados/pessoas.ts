import { Pessoa } from "./pessoa.type";

export const pessoas: Pessoa[] = [
    {
        id: 1,
        nome: "Pedro Remoaldo",
        idade: 25,
        data_nascimento: new Date('1998-07-18'),
        casado: true
    },
    {
        id: 2,
        nome: "Luísa Todi",
        idade: 43,
        data_nascimento: new Date('1980-04-11'),
        casado: false
    },
    {
        id: 3,
        nome: "Antonino Magalhães",
        idade: 32,
        data_nascimento: new Date('1999-11-07'),
        casado: true
    }
]