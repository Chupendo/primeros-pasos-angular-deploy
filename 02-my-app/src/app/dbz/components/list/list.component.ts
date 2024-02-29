import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/Chararcter';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  @Input('person')
  character:Character[] = [];

  @Output('position')
  positionCharacter:EventEmitter<number> = new EventEmitter();
  @Output()
  idCharacter:EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index:number):void{
    // TODO: Emitir el índice (posición) del personaje
    this.positionCharacter.emit(index);
  }

  onDeleteCharacterById(id?:string):void{
    // TODO: Emitir el id (identificador) del personaje
    if(!id) return; // no envida nada si id es undefined
    this.idCharacter.emit(id);
  }
}
