// Interface exportada de Producto
export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: string;
  urlImagen: string;
  altImagen: string;
}

// Arreglo exportado de varios productos
export const PRODUCTOS: Producto[] = [
  {
    id: "A1",
    nombre: "Kalaora wena",
    descripcion: "Esta sierra es calidad tier bueno.",
    precio: "9990",
    urlImagen: "img/producto01.jpg",
    altImagen: "La kalaora buena",
  },
  {
    id: "B2",
    nombre: "Kalaora prime",
    descripcion: "Esta sierra si que es total prime.",
    precio: "19990",
    urlImagen: "img/producto02.jpg",
    altImagen: "La kalaora prime",
  },
  {
    id: "C3",
    nombre: "Kalaora meh",
    descripcion: "Una caladora promedio tirando para mala.",
    precio: "990",
    urlImagen: "img/producto03.jpg",
    altImagen: "La kalaora meh",
  },
  {
    id: "D4",
    nombre: "Kalaora roja",
    descripcion: "Una caladora mala de jueguete.",
    precio: "990",
    urlImagen: "img/producto04.jpg",
    altImagen: "La kalaora roja",
  },
];
