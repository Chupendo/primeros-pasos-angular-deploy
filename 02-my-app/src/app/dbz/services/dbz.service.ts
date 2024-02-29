import { Injectable } from '@angular/core';
import { Character } from '../interfaces/Chararcter';
import { v4 as uuid} from 'uuid';

// sinpper: a-service
@Injectable({providedIn: 'root'})
export class DbzService {
  // arreglo compartido para todos los
  // componetes que lo inyecta el servicio
  personData:Character[] = [
    //{ id: v4(), name:'Goku',power:10},
    { id: uuid(), name:'Goku',power:10},
    { id: uuid(), name:'Crilin',power:6},
    { id: uuid(), name:'Bulma',power:2},
    { id: uuid(), name:'Son Ghoan',power:8}];

  constructor() { }

   /**
   * Agrega el dato a la lista
   * @param newPerson character
   */
  //addPerson(newPerson:any):void{
  //addPerson( {name,power}:Character):void{ //Desctructuracion
    addPerson( character:Character):void{
      let newPerson:Character ={
          ...character,id: uuid() // añade todas las propqieades de character y el id le pone uuid()
      }
      // al final del array
      //this.personData.push(newPerson);
      // al principio del a rray
      if(newPerson.name.trim().length!=0 && newPerson.power>=0)
        newPerson.id = uuid();
        this.personData.unshift(newPerson);
    }

    /**
     * Metodo que borrar un elmento dado su indice del array
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
     * @param position
     */
    removeByIndex = (position:number) => {
      console.log(position);
      debugger
      let personRemove:Character[] = this.personData.splice(position,1); //posicion del elemento a borrar, numero de elementos a borrar
      if(personRemove.length>0)
        console.log("Personaje: "+personRemove[0].name);
      else
        console.log("id no encontrado");
    }

    /**
     * Metodo que borrar un elmento dado su indice del array
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
     * @param position
     */
    removeById = (id:string) => {
      console.log(id);
      this.personData = this.personData.filter(person=>person.id!=id);
    }


}
