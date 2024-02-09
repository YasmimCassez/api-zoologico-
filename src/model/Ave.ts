// Importa a classe Animal do arquivo Animal.ts.//
import { Animal } from "./Animal";

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

    constructor(_envergadura:number,
        _nome:string,
        _idade:number,
        _genero:string) {
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
public setEnvergadura(_envergadura: number){
    this.envergadura = _envergadura;
}

}
