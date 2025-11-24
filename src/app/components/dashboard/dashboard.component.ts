import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  totalProductos: number = 0;
  categorias: string[] = [];
  productosPorCategoria: { [categoria: string]: number } = {};
  productosEnStock: number = 0;
  productosAgotados: number = 0;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    const productos = this.productoService.getProductos();
    this.totalProductos = productos.length;

    // Categorías únicas
    this.categorias = Array.from(new Set(productos.map(p => p.categoria)));

    // Contar productos por categoría
    this.productosPorCategoria = {};
    this.categorias.forEach(cat => {
      this.productosPorCategoria[cat] = productos.filter(p => p.categoria === cat).length;
    });

    // Contar productos en stock y agotados
    this.productosEnStock = productos.filter(p => p.enStock ?? false).length;
    this.productosAgotados = this.totalProductos - this.productosEnStock;
  }
}
