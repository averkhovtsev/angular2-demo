import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product>;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getAll();
  }


}
