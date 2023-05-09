import { Component, DoCheck, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { ModalDeletarComponent } from './modal-deletar/modal-deletar.component';

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
  @ViewChild(ModalDeletarComponent) modalRef!: ModalDeletarComponent;

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
    this.service.deletarItem(this.itemDeletar.id!)
    this.modalRef.fecharModal();
  };

  abrirModalDeletar(item: Item){
    this.itemDeletar = item;
    this.modalRef.abrirModal();
  }

}
