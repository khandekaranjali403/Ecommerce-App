import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule], // Import CommonModule directly
})
export class HomeComponent {

  // List of products to display
  products: Product[] = [
    {
      id: 1,
      name: 'Smartphone-Iphone-16',
      description: 'Sharp as a Mac.Lay out your workspace on the fly, browse the web with focus and even mirror your iPhone wirelessly. And Apple Intelligence helps you simplify and accelerate tasks big and small.',
      price: 599,
      image: "assets/images/products/iphone16.jpg", // Updated path
    },
    {
      id: 2,
      name: 'Laptop-MacBook-Pro',
      description: 'Sharp as a Mac.Lay out your workspace on the fly, browse the web with focus and even mirror your iPhone wirelessly. And Apple Intelligence helps you simplify and accelerate tasks big and small.',
      price: 999,
      image: "assets/images/products/laptop.jpg", // Updated path
    },
    {
      id: 3,
      name: 'Headphones-AirPods 4',
      description: 'Sharp as a Mac.Lay out your workspace on the fly, browse the web with focus and even mirror your iPhone wirelessly. And Apple Intelligence helps you simplify and accelerate tasks big and small.',
      price: 199,
      image: "assets/images/products/a1.jpg", // Updated path
    },
    {
      id: 4,
      name: 'Smartwatch-Apple watch Series 10',
      description: 'Sharp as a Mac.Lay out your workspace on the fly, browse the web with focus and even mirror your iPhone wirelessly. And Apple Intelligence helps you simplify and accelerate tasks big and small.',
      price: 299,
      image: "assets/images/products/watch.jpg", // Updated path
    },
  ];

  cartCount: number = 0; // Cart count to display

  constructor(private cartService: CartService) {
    // Subscribe to cart count updates
    this.cartService.cartCount$.subscribe((count) => {
      this.cartCount = count;
    });
  }

  // Method to add a product to the cart
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`${product.name} has been added to the cart!`);
  }
}
