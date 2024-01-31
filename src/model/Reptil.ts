import { Animal } from "./Animal";

class Reptil extends Animal {
    private tipo_de_escamas: string;

    constructor(_tipo_de_escamas:string,
        _nome:string,
        _idade:number,
        _genero:string) {
        super(_nome, _idade, _genero);
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
}
