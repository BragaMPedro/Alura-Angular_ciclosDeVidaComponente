import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { log } from 'console';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() itemEditar!: Item;
  editando: boolean = false;
  valorItem!: string;

  constructor(private service: ListaDeCompraService) { }

  ngOnInit(): void { };

  ngOnChanges(changes: SimpleChanges) {
    if(!changes["itemEditar"].firstChange){
      this.editando = true;
      this.valorItem = this.itemEditar?.nome;
    }
  }

  addItem(){
    console.log(this.valorItem);
    this.service.postItem(this.valorItem);
    this.limparCampo();
  };

  editarItem(){
    this.service.editarLista(this.itemEditar, this.valorItem);
    this.limparCampo();
    this.editando = false;
  }

  limparCampo(): void {
    this.valorItem = "";
  }
}
