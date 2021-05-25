import { Component, OnInit } from '@angular/core';

//importer les donées crées
import { products } from '../list';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Accéder aux données en créant une variable
products = products;

}
