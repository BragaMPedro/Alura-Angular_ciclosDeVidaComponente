import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck {
  title = 'app-lista-de-compras';
  listaDeCompra!: Item[];
  itemEditar!: Item;
  itemDeletar!: Item;
  modalDeletarAberto: boolean = false

  constructor(private service: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaDeCompra = this.service.getListaDeCompra();
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes["itemEditar"].currentValue);  
  }

  ngDoCheck(): void {
    console.log("ngDoCheck doing check");
    
    this.service.atualizaLocalStorage();
  }

  editarItem(item: Item){
    this.itemEditar = item;
  }

  deletarItem(){
    const index = this.listaDeCompra.findIndex(item => {
      item.id === this.itemDeletar.id;
    });
    this.listaDeCompra.splice(index, 1);
    this.fecherModalDeletar();
  };

  abrirModalDeletar(item: Item){
    this.itemDeletar = item;
    this.modalDeletarAberto = !this.modalDeletarAberto;
  }

  fecherModalDeletar(){
    this.modalDeletarAberto = !this.modalDeletarAberto;
  }

}
