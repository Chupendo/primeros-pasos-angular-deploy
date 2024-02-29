import { Component, EventEmitter, Output } from '@angular/core';

import { Character } from '../../interfaces/Chararcter';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.scss'
})
export class AddCharacterComponent {
    dataForm:Character ={
      name: '',
      power: 0
    };

    // <label-child (characterEmiter)="methodParent($event)" />
    @Output()
    characterEmiter:EventEmitter<Character> = new EventEmitter();

    // este metodo se incova cada vez que
    // se envia el formulario
    // emite al componente padre el valor recibido
    emitCharacter(){
        console.log(this.dataForm);
        this.characterEmiter.emit(this.dataForm);
        // reseteamos el valor, esto hace que [(ngModel)] apunte a otra instancia
        // de lo contrario, no se perdería la referencia y estaría modificando
        // y agregando la misma constantemte
        this.dataForm={name: '', power: 0  };
    }
}
