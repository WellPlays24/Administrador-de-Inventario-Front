import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
    private productos: Producto[] = [
      { id: 1, nombre: 'Laptop Dell', categoria: 'Electrónica', precio: 750 , enStock:true},
      { id: 2, nombre: 'Silla Oficina', categoria: 'Muebles', precio: 120 , enStock:true },
      { id: 3, nombre: 'Camiseta Deportiva', categoria: 'Ropa', precio: 35 , enStock:true},
      { id: 4, nombre: 'Smartphone Samsung', categoria: 'Electrónica', precio: 650 , enStock:true},
      { id: 5, nombre: 'Mesa de Comedor', categoria: 'Muebles', precio: 300 , enStock:true},
    ];



  getProductos(): Producto[] {
    return this.productos;
  }

  getProductoPorId(id: number): Producto | undefined {
    return this.productos.find(p => p.id === id);
  }

  addProducto(producto: Producto): boolean {
    if (this.productos.some(p => p.id === producto.id)) {
      return false; // Ya existe un producto con ese id
    }
    this.productos.push(producto);
    return true;
  }
}
