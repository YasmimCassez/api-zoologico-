/**
 * Classe que representa um animal.
 */
export class Animal {

// Propriedades privadas que representam as características do animal.//
    private nome: string;
    private idade: number;
    private genero: string;

/**
     * Construtor da classe Animal.
     * 
     * @param _nome Nome do animal.
     * @param _idade Idade do animal.
     * @param _genero Gênero do animal.
     */

    constructor(_nome:string,
                _idade:number,
                _genero:string){
    // Inicializa as propriedades do animal com os valores passados como parâmetros.//
        
                    this.nome = _nome;
                    this.idade = _idade;
                    this.genero = _genero;
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
 * Retorna a idade do animal
 * 
 * @returns idade : idade do animal
 */
public getIdade(): number {
    return this.idade;
}

/**
 * Atribui o parâmetro ao atributo idade
 * 
 * @param _idade : idade do animal
 */
public setIdade(_idade: number) {
    this.idade = _idade;
}

/**
 * Retorna o gênero do animal
 * 
 * @returns genero : gênero do animal
 */
public getGenero():string {
    return this.genero;
}

/**
 * Atribui o parâmetro ao atributo genero
 * 
 * @param _genero : gênero do animal
 */
public setGenero(_genero: string) {
    this.genero = _genero;
}
}