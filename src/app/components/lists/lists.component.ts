import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { List } from '../../models/list.model';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @ViewChild( IonList ) list: IonList;
  @Input() terminada = true;

  constructor(public wishesService: WishesService,
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {}


  listaSelected( list: List ) {

    if ( this.terminada ){

      this.router.navigateByUrl(`/tabs/tab2/agregar/${ list.id }`);
    } else {

      this.router.navigateByUrl(`/tabs/tab1/agregar/${ list.id }`);
    }
  }

  deleteList( list: List ) {
    this.wishesService.deleteList(list);
  }

  async editList( list: List ) {

      // this.router.navigateByUrl('/tabs/tab1/agregar');
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Change name',
        inputs: [
          {
            name: 'titulo',
            type: 'text',
            value: list.titulo,
            placeholder: 'Nombre de la lista'
          }
        ],
      // message: 'This is an alert message.',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancelar');
              this.list.closeSlidingItems();
            }
          },
          {
            text: 'actualizar',
            handler: ( data ) => {
              console.log( data );
              if ( data.titulo.lenght === 0) {
                return;
              }

              list.titulo = data.titulo;
              this.wishesService.saveStorage();
              this.list.closeSlidingItems();
            }
          }
        ]
      });

      alert.present();


  }

}
