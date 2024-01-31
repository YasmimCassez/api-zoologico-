import { Animal } from "./Animal";


class Mamifero extends Animal{
    private raca: string;
    
    constructor(_raca:string,
                _nome:string,
                _idade:number,
                _genero:string) {
                super(_nome, _idade, _genero);
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