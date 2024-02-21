// Importa a classe Animal do arquivo Animal.ts.//
import { Animal } from "./Animal";
import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool;

// Declaração da classe Mamifero que herda de Animal.//

export class Mamifero extends Animal{

// Propriedade privada que representa a raça do mamífero.//

    private raca: string;
    
/**
     * Construtor da classe Mamifero.
     * 
     * @param _raca Raça do mamífero.
     * @param _nome Nome do mamífero.
     * @param _idade Idade do mamífero.
     * @param _genero Gênero do mamífero.
     */
    
    constructor(_raca:string,
                _nome:string,
                _idade:number,
                _genero:string) {

    // Chama o construtor da classe pai (Animal) com os parâmetros fornecidos.//
                
                super(_nome, _idade, _genero);

    // Inicializa a propriedade raca com o valor fornecido.//
    
                this.raca = _raca;
            }
/**
     * Retorna a raca do animal
     * 
     * @returns raca : raca do animal
     */
public getRaca(): string {
    return this.raca;
}

/**
 * Atribui o parâmetro ao atributo raca
 * 
 * @param _raca : raca do animal
 */
public setRaca(_raca: string): void{
    this.raca = _raca;
}
static async listarMamifero() {
    const listaDeMamiferos: Array<Mamifero> = [];
    try {
        const queryReturn = await database.query(`SELECT * FROM  mamifero`);
        queryReturn.rows.forEach(Mamifero => {
            listaDeMamiferos.push(Mamifero);
        });

        // só pra testar se a lista veio certa do banco
        console.log(listaDeMamiferos);

        return listaDeMamiferos;
    } catch (error) {
        console.log('Erro no modelo');
        console.log(error);
        return "error";
    }
}

static async cadastrarMamifero(mamifero : Mamifero): Promise<any> {
    try {
        let insertResult = false;
        await database.query(`INSERT INTO mamifero (nome, idade, genero, raca)
            VALUES
            ('${mamifero.getNome().toUpperCase()}', ${mamifero.getIdade()}, '${mamifero.getGenero().toUpperCase()}', '${mamifero.getRaca().toUpperCase()}');
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
