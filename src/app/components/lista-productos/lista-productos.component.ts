import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
})
export class ListaProductosComponent implements OnInit {
  productos: Producto[] = [];
  categorias: string[] = [];
  categoriaSeleccionada: string = '';

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
  this.productos = this.productoService.getProductos();

  this.categorias = Array.from(
    new Set(this.productos.map(p => p.categoria))
  );
}


  filtrarProductos(): Producto[] {
    if (!this.categoriaSeleccionada) {
      return this.productos;
    }
    return this.productos.filter(
      (p) => p.categoria === this.categoriaSeleccionada
    );
  }
}
