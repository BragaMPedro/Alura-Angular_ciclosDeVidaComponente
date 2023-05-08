import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../interfaces/iItem';

@Component({
  selector: 'app-modal-deletar',
  templateUrl: './modal-deletar.component.html',
  styleUrls: ['./modal-deletar.component.css'],
})
export class ModalDeletarComponent {
  @Input() itemDeletar!: Item;
  @Output() fecharModalEventEmiter = new EventEmitter();
  @Output() confirmacaoDeletarEmiter = new EventEmitter();

  fecharModal() {
    this.fecharModalEventEmiter.emit();
  }

  confirmarDeletarItem() {
    this.confirmacaoDeletarEmiter.emit();
  }
}
