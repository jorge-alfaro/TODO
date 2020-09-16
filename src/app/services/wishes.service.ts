import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  lists: List [] = [];

  constructor() {

    this.loadStorage();

    // const lista1 = new List('Aprender Angunlar a nivel Profesional');
    // const lista2 = new List('Comprar unar RTX 3000');

    // this.lists.push(lista1, lista2);
    // console.log(this.lists);

   }


   crearList( titulo: string) {
    const newList = new List(titulo);
    this.lists.push( newList );
    this.saveStorage();

    return newList.id;
   }

   saveStorage() {
    localStorage.setItem('data', JSON.stringify(this.lists));
   }

   obtenerLista(id: string | number) {

    id = Number (id);

    return this.lists.find( listData => listData.id === id );
   }

   loadStorage() {

    if (localStorage.getItem('data')) {

      this.lists = JSON.parse(localStorage.getItem('data'));
    } else {
      this.lists = [];
    }

   }
}
