import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'boilerplate';

  products = [
    { name: 'Product A', price: 10.99, inStock: true, stock: 5 },
    { name: 'Product B', price: 19.99, inStock: false, stock: 0 },
    { name: 'Product C', price: 7.99, inStock: true, stock: 2 },
    { name: 'Product D', price: 14.99, inStock: true, stock: 10 },
    { name: 'Product E', price: 8.99, inStock: false, stock: 0 }
  ];
}
