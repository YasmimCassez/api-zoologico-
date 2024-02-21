// Importa a classe Animal do arquivo Animal.ts.//
import { Animal } from "./Animal";
import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool;

// Declaração da classe Reptil que herda de Animal.//

export class Reptil extends Animal {
// Propriedade privada que representa o tipo de escamas do réptil.//
    private tipo_de_escamas: string;

/**
     * Construtor da classe Reptil.
     * 
     * @param _tipo_de_escamas Tipo de escamas do réptil.
     * @param _nome Nome do réptil.
     * @param _idade Idade do réptil.
     * @param _genero Gênero do réptil.
     */

    constructor(_tipo_de_escamas:string,
        _nome:string,
        _idade:number,
        _genero:string) {
    // Chama o construtor da classe pai (Animal) com os parâmetros fornecidos.//
        
        super(_nome, _idade, _genero);

    // Inicializa a propriedade tipo_de_escamas com o valor fornecido.//

        this.tipo_de_escamas = _tipo_de_escamas;
    }
     /**
     * Retorna o tipo-de-escamas do animal
     * 
     * @returns tipo-de-escamas :tipo-de-escamas do animal
     */
public getTipo_de_escamas(): string {
    return this.tipo_de_escamas;
}

/**
 * Atribui o parâmetro ao atributo tipo-de-escamas
 * 
 * @param _tipo-de-escamas : tipo-de-escamas do animal
 */
public setTipo_de_escamas(_tipo_de_escamas: string){
    this.tipo_de_escamas = _tipo_de_escamas;

} 

static async listarRepteis() {
    const listaDeRepteis: Array<Reptil> = [];
    try {
        const queryReturn = await database.query(`SELECT * FROM  reptil WHERE tipo_de_escamas = 'Escudos'`);
        queryReturn.rows.forEach(reptil => {
            listaDeRepteis.push(reptil);
        });

        // só pra testar se a lista veio certa do banco
        console.log(listaDeRepteis);

        return listaDeRepteis;
    } catch (error) {
        console.log('Erro no modelo');
        console.log(error);
        return "error";
    }
}

}
