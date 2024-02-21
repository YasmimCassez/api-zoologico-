// Importa a classe Animal do arquivo Animal.ts.//
import { Animal } from "./Animal";
import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool;

// Declaração da classe Ave que herda de Animal.//
export class Ave extends Animal {

// Propriedade privada que representa a envergadura da ave.//

    private envergadura: number;

/**
     * Construtor da classe Ave.
     * 
     * @param _envergadura Envergadura da ave.
     * @param _nome Nome da ave.
     * @param _idade Idade da ave.
     * @param _genero Gênero da ave.
     */

    constructor(_nome:string,
        _idade:number,
        _genero:string,
        _envergadura:number) {
// Chama o construtor da classe pai (Animal) com os parâmetros fornecidos.//
        super(_nome, _idade, _genero);
// Inicializa a propriedade envergadura com o valor fornecido.//
        this.envergadura = _envergadura;
    }
    /**
     * Retorna a envergadura do animal
     * 
     * @returns envergadura : envergadura do animal
     */
public getEnvergadura(): number {
    return this.envergadura;
}

/**
 * Atribui o parâmetro ao atributo envergadura
 * 
 * @param _envergadura : envergadura do animal
 */
public setEnvergadura(_envergadura: number): void{
    this.envergadura = _envergadura;
}
static async listarAve() {
    const listaDeAve: Array<Ave> = [];
    try {
        const queryReturn = await database.query(`SELECT * FROM  ave`);
        queryReturn.rows.forEach(ave => {
            listaDeAve.push(ave);
        });

        // só pra testar se a lista veio certa do banco
        console.log(listaDeAve);

        return listaDeAve;
    } catch (error) {
        console.log('Erro no modelo');
        console.log(error);
        return "error";
    }
}

static async cadastrarAve(ave: Ave): Promise<any> {
    try {
        let insertResult = false;
        await database.query(`INSERT INTO ave (nome, idade, genero, envergadura)
            VALUES
            ('${ave.getNome().toUpperCase()}', ${ave.getIdade()}, '${ave.getGenero().toUpperCase()}', ${ave.getEnvergadura()});
        `).then((result) => {
            if(result.rowCount != 0) {
                insertResult = true;
            }
        });
        return insertResult;
    } catch(error) {
        return error;
    }
}
}

