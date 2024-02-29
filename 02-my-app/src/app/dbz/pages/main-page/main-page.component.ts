import { Component } from '@angular/core';

import { Character } from '../../interfaces/Chararcter';
import { DbzService } from '../../services/dbz.service';
@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  //personData:Character[] = [];

  // inyección de depencia, por costumbre suele ser privado
  constructor(public dbzService:DbzService){
    //this.personData = this.dbzService.personData;
  }


  get character():Character[]{

    //return this.dbzService.personData;
    return [...this.dbzService.personData];
  }

  /**
   * Agrega el dato a la lista
   * @param newPerson character
   */
    addPerson(newPerson:Character):void{
        this.dbzService.addPerson(newPerson);
    }

    /**
     * Metodo que borrar un elmento dado su indice del array
     * esto es mala practica pora informaicón volatil donde es compartida en servicios
     * se recomiendo borrar por id
     *
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
     * @param position
     */
    recevidPosition = (position:number) => {
      console.log(position);
      this.dbzService.removeByIndex(position);

    }

    recevidIdPerson = (idPerson:string) => {
      console.log(idPerson);
      this.dbzService.removeById(idPerson);

    }
}
