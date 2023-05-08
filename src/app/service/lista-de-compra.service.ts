import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('items') || '[]');
  };

  getListaDeCompra(){
    return this.listaDeCompra;
  };

  criarItem(nomeItem: string){
    const id = this.listaDeCompra.length+1;
    const item: Item = {
      id: id,
      nome: nomeItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    };

    return item;
  };

  postItem(nomeItem: string){
    const item = this.criarItem(nomeItem);
    this.listaDeCompra.push(item);
  };

  editarLista(itemDB: Item, nomeEditado: string){
    const itemEditado: Item = {
      id: itemDB.id,
      nome: nomeEditado,
      data: itemDB.data,
      comprado: itemDB.comprado
    };

    const id = itemDB.id;
    this.listaDeCompra.splice(Number(id)-1, 1, itemEditado);
  };

  atualizaLocalStorage () {
    localStorage.setItem('items', JSON.stringify(this.listaDeCompra));
  }
};
