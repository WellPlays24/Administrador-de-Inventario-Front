import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevo-producto',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css'],
})
export class NuevoProductoComponent {
  producto: Producto = {
    id: 0,
    nombre: '',
    categoria: '',
    precio: 0,
    enStock: true,
  };

  mensajeError: string = '';
  mensajeExito: string = '';

  constructor(private productoService: ProductoService, private router: Router) {}

  agregarProducto(form: any) {
    this.mensajeError = '';
    this.mensajeExito = '';

    if (form.valid) {
      const agregado = this.productoService.addProducto(this.producto);
      if (agregado) {
        this.mensajeExito = 'Producto agregado exitosamente.';
        // Redirigir a lista después de 1.5 seg
        setTimeout(() => this.router.navigate(['/productos']), 1500);
      } else {
        this.mensajeError = 'Error: El ID del producto ya existe.';
      }
    } else {
      this.mensajeError = 'Por favor, complete correctamente el formulario.';
    }
  }
}
