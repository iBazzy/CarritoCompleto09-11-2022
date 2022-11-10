import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, pipe } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { idProducto, NotebookModificar} from '../producto/modelo/productos';
import { Productos } from '../producto/modelo/productos';
@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  public urlUsuari="http://localhost:3000/usuarios";
  //API PRODUCTO ------------>
  private urlProductos= "http://localhost:3000/productos";
  private comLista = new BehaviorSubject<Array<idProducto>>([]);
  private paginaActual = 1;
  public listaProductos$ = this.comLista.asObservable();
  //API PRODUCTO END<<<---------->>>

  //API CARRITO <----------->
  cart=[];
  private contadorItem = new BehaviorSubject(0);
  public urlCarrito="http://localhost:3000/carrito";
  Productos: any;
  //API CARRITO END<----------->
  constructor(private http: HttpClient) { }
    //METODOS PARA PRODUCTO
  public agregarNotebook(producto:Productos){
    return this.http.post(this.urlProductos,producto,{
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
  }

  public obternerTodo(){
    return this.http.get<Array<idProducto>>(`${this.urlProductos}?
    _page=1`).pipe(delay(2000))
    .subscribe(datos =>{
      this.paginaActual= this.paginaActual+1;
      this.comLista.next(datos);
      console.log(this.comLista);
    });
  }
  public obtenerProductoporID(id:number):
  Observable<idProducto| null>{
    return this.http.get<idProducto | null>
    (`${this.urlProductos}/${id}`);
  }
  public eliminarProduct(id:number):Observable<any>{
    return this.http.delete(`${this.urlProductos}/${id}`)

  }

  public modificarProducto(id: number, playload: NotebookModificar): Observable<any>{
    return this.http.patch(`${this.urlProductos}/${id}`,playload,{
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
  }

  /// END METODOS PRODUCTO <------------------------>


  //METODOS CARRITO
  public añadirCarrito( productos ){
      return this.http.post<Array<Productos>[]>(`${this.urlCarrito}`,productos).subscribe( res =>{
         this.cart.push(productos);

      })


  }
  public modificarCarrito(id:number):Observable<idProducto | null>{
    return this.http.get<idProducto | null>(`${this.urlCarrito}/${id}`)


  }
  public modificarPorID(id:number,playload:NotebookModificar ): Observable<any>{
    return this.http.patch(`${this.urlCarrito}/${id}`,playload,{
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
  }

  public eliminarProducto(id: number): Observable<any>{
    return this.http.delete(`${this.urlCarrito}/${id}`)
  }
  public listarProductos(){
    return this.http.get(`${this.urlCarrito}`);
  }

  public obternerCarrito(){
    return this.cart;
  }

}
