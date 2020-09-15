import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  lists: List [] = [];

  constructor() {

    const lista1 = new List('Aprender Angunlar a nivel Profesional');
    const lista2 = new List('Comprar unar RTX 3000');

    this.lists.push(lista1, lista2);
    console.log(this.lists);

   }


   crearList( titulo: string) {
    const newList = new List(titulo);
    this.lists.push( newList );
   }
}
