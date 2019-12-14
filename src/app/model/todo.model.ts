export class Todo {
    public texto: string;
    public id: number;
    public completado: boolean;

    constructor(texto: string){

        this.texto = texto.charAt(0).toUpperCase() + texto.slice(1);
        this.id = Math.random();
        this.completado = false;

    }
}