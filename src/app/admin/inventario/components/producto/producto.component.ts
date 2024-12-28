import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {

  categorias: any = [
    { name: 'Moldes', code: 'MD' },
    { name: 'Siliconas', code: 'SN' },
    { name: 'Accesorios', code: 'AS' },
  ];

  // Productos con imágenes de Bing
  products: any[] = [
    {
      id: 1,
      nombre: "Molde De letras",
      precio: 6.00,
      categoria_id: 3,
      stock: 10,
      estado: "Disponible",
      imagen: "https://m.media-amazon.com/images/I/61CgjRWV3rL.jpg"
    },
    {
      id: 2,
      nombre: "Molde Frase",
      precio: 8.00,
      categoria_id: 1,
      stock: 20,
      estado: "Disponible",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_710096-MLA48594162863_122021-O.webp"
    },
    {
      id: 3,
      nombre: "Molde De Lectura",
      precio: 5.00,
      categoria_id: 2,
      stock: 8,
      estado: "Agotado",
      imagen: "https://tse2.mm.bing.net/th?id=OIP.rUce9I7FhdRiDb2n3aX4OwHaHa&pid=Api"
    },
    {
      id: 4,
      nombre: "Molde Corazon 3D",
      precio: 4.00,
      categoria_id: 3,
      stock: 15,
      estado: "Disponible",
      imagen: "https://tse3.mm.bing.net/th?id=OIP.9tH6v8c9uERaIzSVo3d0BwHaEK&pid=Api"
    },
    {
      id: 5,
      nombre: "Molde Esfero",
      precio: 6.00,
      categoria_id: 1,
      stock: 12,
      estado: "Disponible",
      imagen: "https://img.joomcdn.net/e6a24c0e27583f41492df3170673d9ff3d89c486_original.jpeg"
    },
    {
      id: 6,
      nombre: "Molde Osito Gominola",
      precio: 8.00,
      categoria_id: 2,
      stock: 18,
      estado: "Disponible",
      imagen: "https://m.media-amazon.com/images/I/61+W7RYSUGL.jpg"
    },
    {
      id: 7,
      nombre: "Molde Minie O Mikey",
      precio: 4.5,
      categoria_id: 3,
      stock: 5,
      estado: "Agotado",
      imagen: "https://http2.mlstatic.com/D_NQ_NP_862308-MLA53461275838_012023-O.webp"
    },
    {
      id: 8,
      nombre: "Molde Bandeja",
      precio: 7.00,
      categoria_id: 1,
      stock: 25,
      estado: "Disponible",
      imagen: "https://d22fxaf9t8d39k.cloudfront.net/58bda1ca8e524f8c062334708eecebb1e7d9dcb6a48e882be7672187805dfb0269554.jpeg"
    },
    {
      id: 9,
      nombre: "Molde Huesito",
      precio: 4.00,
      categoria_id: 2,
      stock: 9,
      estado: "Disponible",
      imagen: "https://cdn.quicksell.co/-MwwE-JFLD9yvY_NVsZi/products/-NXmKx9Vsv0n2Kz2NwCF.jpg"
    },
    {
      id: 10,
      nombre: "Molde Osito",
      precio: 4.5,
      categoria_id: 3,
      stock: 14,
      estado: "Disponible",
      imagen: "https://acdn.mitiendanube.com/stores/112/914/products/oso-teddy1-37c9a94f17b2a25f2716597425454182-480-0.jpg"
    }
  ];

  cols: any[] = [];

  openNew() {
    // Lógica para agregar un nuevo producto
  }

  editProduct(prod: any) {
    // Lógica para editar un producto
  }

  deleteProduct(prod: any) {
    // Lógica para eliminar un producto
  }
}


