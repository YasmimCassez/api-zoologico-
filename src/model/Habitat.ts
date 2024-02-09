// Importa a classe Animal do arquivo Animal.ts.//
import { Animal } from "./Animal";

// Declaração da classe Habitat.//

export class Habitat {

// Propriedades privadas que representam as características do habitat.//

    private nome: string; // Nome do habitat.//
    private lista_de_animais: Array<Animal>; // Lista de animais presentes no habitat.//

/**
     * Construtor da classe Habitat.
     * 
     * @param _nome Nome do habitat.
     * @param _lista_de_animais Lista de animais presentes no habitat.
     */

    constructor(_nome:string,
                _lista_de_animais: Array<Animal>,) {

    // Inicializa as propriedades do habitat com os valores passados como parâmetros.//
    
        this.nome = _nome;
        this.lista_de_animais = _lista_de_animais;
    }
    /**
     * Retorna o nome do animal
     * 
     * @returns nome : nome do animal
     */
    public getNome(): string {
        return this.nome;
    }
    
    /**
     * Atribui o parâmetro ao atributo nome
     * 
     * @param _nome : nome do animal
     */
    public setNome(_nome: string): void{
        this.nome = _nome;
    }
      /**
     * Retorna a lista do animal
     * 
     * @returns lista : lista do animal
     */
      public getLista_de_animais(): Array<Animal> {
        return this.lista_de_animais;
    }
    
    /**
     * Atribui o parâmetro ao atributo lista
     * 
     * @param _lista_de_animais : lista do animal
     */
    public setLista_de_animais(_lista_de_animais: Array<Animal>): void{
        this.lista_de_animais = _lista_de_animais;
    }
}