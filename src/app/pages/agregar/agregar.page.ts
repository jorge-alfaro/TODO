import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/list.model';
import { ListItem } from '../../models/list-item-model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  list: List;
  itemName = '';

  constructor( private wishesService: WishesService,
               private route: ActivatedRoute ) {



    const listId = this.route.snapshot.paramMap.get('listaId');
    this.list = this.wishesService.obtenerLista( listId );

    console.log(this.list);
   }

  ngOnInit() {
  }

  agregarItems() {

    if ( this.itemName.length === 0 ){
      return;
    }

    const newItem = new ListItem( this.itemName);

    this.list.items.push( newItem );

    this.itemName = '';

    this.wishesService.saveStorage();
  }

  cambioCheck( item: ListItem ){
    const pendientes = this.list.items
                           .filter( itemData => !itemData.completado)
                           .length;
    if ( pendientes === 0 ) {
      this.list.terminadaEn = new Date();
      this.list.terminada = true;
    } else {
      this.list.terminadaEn = null;
      this.list.terminada = false;
    }

    this.wishesService.saveStorage();

    console.log(this.wishesService.lists);
  }

  borrar( i: number ){
    this.list.items.splice(i, 1 );
    this.wishesService.saveStorage();
  }
}
