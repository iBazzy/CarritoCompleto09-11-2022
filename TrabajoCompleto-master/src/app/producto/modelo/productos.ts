

export interface Productos {
  nombre: string;
  detalle: string;
  precio: number;
  imagen: string;
  marca: string;
  categoria: string;
  procesador: string;
  ram: string;
  memoriaInterna: string;
  cantidad:number;
  usuario:number;
}
export interface idProducto extends Productos{
  id: number;

}

export interface NotebookModificar extends Partial<Productos>{}
