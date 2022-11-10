import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'agregar',
    loadChildren: () => import('./producto/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'modificar/:idProducto',
    loadChildren: () => import('./producto/modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  {
    path: 'eliminar/:idProducto',
    loadChildren: () => import('./producto/eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./producto/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito-de-compra/carrito-de-compra.module'  ).then( m => m.CarritoDeCompraPageModule)
  },
  {
    path: 'detalle/:idProducto',
    loadChildren: () => import('./producto/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./user/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./user/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./carrito/listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./user/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'modificarCart/:idProducto',
    loadChildren: () => import('./carrito/modificar-cart/modificar-cart.module').then( m => m.ModificarCartPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
