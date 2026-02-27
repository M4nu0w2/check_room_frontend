export interface Aula{
    id:number;
    nome:String;
    edificio:String;
    piano:number;
    capienza: number;
    descrizione:String;
    attiva: boolean;
    createdAt: Date;
    updateAt: Date;

}


export interface Prenotazione{
    id?:number;
    idAula:number;
    userId?:number;
    data: Date;
    inizio: Date;
    fine: Date;

    note: String;
    createdAt?:Date;
    updatedAt?:Date;
}

export interface PrenotazioneF{
    idAula:number;
    data:String;
    inizio:String;
    fine:String;
    note:String;
}

export interface User {

    id?: number
    nome: String;
    cognome: String;
    email: String;
    password: String;
    createdAt: Date;
    updatedAt: Date;



}