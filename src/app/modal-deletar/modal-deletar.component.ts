import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../interfaces/iItem';

@Component({
  selector: 'app-modal-deletar',
  templateUrl: './modal-deletar.component.html',
  styleUrls: ['./modal-deletar.component.css'],
})
export class ModalDeletarComponent {
  @Input() itemDeletar!: Item;
  @Output() confirmacaoDeletarEmiter = new EventEmitter();
  modalAberto: boolean = false;

  abrirModal(){
    this.modalAberto = true
  }

  fecharModal() {
    this.modalAberto = false;
  }

  confirmarDeletarItem() {
    this.confirmacaoDeletarEmiter.emit();
  }
}
