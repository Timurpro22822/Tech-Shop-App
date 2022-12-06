import { Component } from '@angular/core';
import { IProduct } from '../products/products';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  products: IProduct[] = [];

  responsiveOptions;

  constructor(private productService: ProductsService) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
   }
    
    ngOnInit(): void {
      this.productService.getAllProducts().subscribe(result => {
        this.products = result;
      });
    }
}
