import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
   imports: [CommonModule] // Import directly
})
export class CartComponent {
addToCart(_t4: any) {
throw new Error('Method not implemented.');
}


  cartItems: Product[] = [];
products: any;
cartCount: any;

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }
}
