import { Component, OnInit } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { Tab1PageModule } from '../../pages/tab1/tab1.module';
import { Tab2PageModule } from '../../pages/tab2/tab2.module';
import { List } from '../../models/list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  constructor(public wishesService: WishesService,
              private router: Router) { }

  ngOnInit() {}


  listaSelected( list: List ) {
    this.router.navigateByUrl(`/tabs/tab1/agregar/${ list.id }`);
  }

}
