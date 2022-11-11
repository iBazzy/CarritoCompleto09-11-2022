export interface Carrito {
  precio:number;
  imagen:string;
  nombre:string;
  cantidad:number;
  productoId:number;
  usuarioId:number;

}

export interface idCarrito extends Carrito{

}

export interface CarritoPartial extends Partial<Carrito>{}
