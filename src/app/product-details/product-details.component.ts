import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//importer les données
import { products } from '../list';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product
// c'est ici que tout est lu pour le component avant quoi que ce soit. dans les ()
// stoker le programme
  constructor(
  private route : ActivatedRoute

  ) { }
// ca va utiliser le programme
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
