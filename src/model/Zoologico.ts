// Importa a classe Atracao do arquivo Atracao.ts.//
import { Atracao } from "./Atracao";

// Declaração da classe Zoologico.//

export class Zoologico {
// Propriedades privadas que representam as características do zoológico.//

    private nome: string;  // Nome do zoológico.//
    private lista_de_atracoes: Array<Atracao>; // Lista de atrações no zoológico.//


    /**
     * Construtor da classe Zoologico.
     * 
     * @param _nome Nome do zoológico.
     * @param _lista_de_atracoes Lista de atrações no zoológico.
     */

    constructor(_nome:string,
                _lista_de_atracoes: Array<Atracao>){
                    
      // Inicializa as propriedades do zoológico com os valores passados como parâmetros.//

                    this.nome = _nome;
                    this.lista_de_atracoes = _lista_de_atracoes;
                }

 /**
     * Retorna o nome do Zoologico
     * 
     * @returns nome do zoologico
     */
 public getNome(): string {
    return this.nome;
}

  /**
 * Atribui o parâmetro ao atributo nome
 * 
 * @param _nome :Define o nome do zoologico
 */
  public setNome(_nome: string): void{
    this.nome = _nome;
}

  /**
 * Retorna a lista de atrações
 * 
 * @returns lista de atrações
 */
  public getLista_de_atracoes(): Array<Atracao> {
    return this.lista_de_atracoes;
}

 /**
 * Atribui o parâmetro ao atributo lista de atrações
 * 
 * @param _lista_de_atracoes: Define a lista de atrações
 */
 public setLista_de_atracoes(_lista_de_atracoes: Array<Atracao>): void{
    this.lista_de_atracoes = _lista_de_atracoes;
}
}