import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../app/models/product.model';

@Injectable({
  providedIn: 'root',
})
 export class CartService {
  private cartItems: Product[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0); // Holds the cart count

  // Observable for cart count
  cartCount$ = this.cartCountSubject.asObservable();

  // Get current cart items
  getCartItems(): Product[] {
    return this.cartItems;
  }

  // Add item to cart and update count
  addToCart(item: Product): void {
    this.cartItems.push(item);
    this.updateCartCount(this.cartItems.length);
  }

  // Remove item from cart and update count
  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    this.updateCartCount(this.cartItems.length);
  }

  // Clear all items from cart and update count
  clearCart(): void {
    this.cartItems = [];
    this.updateCartCount(0);
  }

  // Update cart count
  private updateCartCount(count: number): void {
    this.cartCountSubject.next(count); // Emit the new cart count
  }
}
