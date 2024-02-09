// Importa a classe Animal do arquivo Animal.ts.//
import { Animal } from "./Animal";

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

}