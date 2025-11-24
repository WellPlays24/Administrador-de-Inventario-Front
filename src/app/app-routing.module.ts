import { Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { NuevoProductoComponent } from './components/nuevo-producto/nuevo-producto.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'productos', component: ListaProductosComponent },
  { path: 'producto/:id', component: DetalleProductoComponent },
  { path: 'productoAdd', component: NuevoProductoComponent },
  { path: '**', redirectTo: '/dashboard' },
];
