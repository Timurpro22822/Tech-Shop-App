import { Component } from '@angular/core';
import { IProduct } from '../products';
import { ProductsService } from '../products.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductsService) { }
    
    ngOnInit(): void {
      this.productService.getAllProducts().subscribe(result => {
        this.products = result;
      });
    }
  
}
