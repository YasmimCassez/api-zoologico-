// Importa a classe Habitat do arquivo Habitat.ts.//
import { Habitat } from "./Habitat";

// Declarando a classe Atracao.//
export class Atracao {

// Propriedades privadas que representam as características da atração.//
    private nome: string; // Nome da atração.//
    private lista_de_habitats: Array<Habitat>;// Lista de habitats ligados à atração.//


/**
     * Construtor da classe Atracao.
     * 
     * @param _nome Nome da atração.
     * @param _lista_de_habitats Lista de habitats associados à atração.
     */
    
    constructor(_nome:string,
                _lista_de_habitats:Array<Habitat>,){
// Inicializa as propriedades da atração com os valores passados como parâmetros.//
                    this.nome = _nome;
                    this.lista_de_habitats = _lista_de_habitats;
                }

    /**
     * Retorna o nome da atração
     * 
     * @returns nome da atração
     */
    public getNome(): string {
        return this.nome;
    }

      /**
     * Atribui o parâmetro ao atributo nome
     * 
     * @param _nome :Define o nome da atração
     */
      public setNome(_nome: string): void{
        this.nome = _nome;
    }

      /**
     * Retorna a lista de habitats
     * 
     * @returns lista de habitats
     */
      public getLista_de_habitats(): Array<Habitat> {
        return this.lista_de_habitats;
    }

     /**
     * Atribui o parâmetro ao atributo lista de habitats
     * 
     * @param _lista_de_habitats: Define a lista de habitats
     */
     public setLista_de_habitats(_lista_de_habitats: Array<Habitat>): void{
        this.lista_de_habitats = _lista_de_habitats;
    }
}