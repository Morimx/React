const productos = [
  {
    nombre: "Formateo de PC",
    id: "1",
    precio: 2000,
    tipo: "servicios",
    descripcion:
      "Este servicio incluye un formateo completo del equipo, dejando el mismo limpio de virus o cualquier amenza y agilizando la velocidad del mismo",
    cantidad: 1,
    foto: "https://www.neostuff.net/wp-content/uploads/2014/09/Formatear.jpg",
  },
  {
    nombre: "Backup Cloud",
    id: "2",
    precio: 5000,
    tipo: "servicios",
    cantidad: 1,
    descripcion:
      "Este servicio incluye un backup completo de archivos en la nube para cualquier dispositivo con un total de hasta 2TB de almacenamiento",
    foto: "https://www.almazena.com/wp-content/uploads/2018/05/Cloud-backup-server-768x551.jpg",
  },
  {
    nombre: "Cotizacion vigilancia",
    precio: 2000,
    tipo: "servicios",
    cantidad: 1,
    descripcion:
      "Este servicio incluye una cotizacion para el servicio de video vigilancia, Camaras, NVR, DVR, etc.",
    id: "3",
    foto: "https://la.network/wp-content/uploads/2017/02/santa-cruz-centro-de-vigilancia.jpg",
  },

  {
    nombre: "Intel Core i5-10400F",
    precio: 32000,
    id: "4",
    tipo: "CPU",
    cantidad: 5,
    descripcion:
      "Ejecuta programas de edición de videos, creación de contenido, streaming y videojuegos sin afectar el rendimiento del dispositivo. Memoria caché de 12 MB, rápida y volátil. Soporta memoria RAM DDR4. Su potencia es de 65 W. Cuenta con Hyper-Threading que favorece la ejecución de programas en simultáneo, al dividir el procesador físico en dos procesadores lógicos. Producto en empaque original.    Procesador avanzado de alto desempeño y marca líder en el rubro.",
    foto: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6411/6411498_sd.jpg;maxHeight=640;maxWidth=550",
  },
  {
    nombre: "Memoria Trident Z RGB 16GB G.Skill",
    precio: 21000,
    id: "5",
    tipo: "Memorias",
    cantidad: 10,
    descripcion:
      "Modelo     Marca G.SKILL     Serie Serie TridentZ RGB      Modelo F4-4000C16D-16GTZRA    Detalles     Capacidad 16 GB (2 x 8 GB)     scribe SDRAM DDR4 de 288 pines    Velocidad DDR4 4000 (PC4 32000)     Latencia CAS dieciséis    Momento 16-16-16-36    Voltaje 1,40 V    ECC No    En búfer / registrado Sin búfer    Kit multicanal Kit de doble canal    Chipset Intel XMP 2.0    Color Negro    Difusor de calor sí    Características Efecto de iluminación LED RGB revolucionario diseñado para mostrar su sistema",

    foto: "https://www.gskill.com/_upload/images/156283840610.png",
  },
  {
    nombre: "Igame Geforce Rtx3080ti",
    precio: 371000,
    id: "6",
    tipo: "VGA",
    cantidad: 15,
    descripcion: (
      <a href="https://www.nvidia.com/es-la/geforce/graphics-cards/30-series/rtx-3080-3080ti/">
        Mas Informacion del Producto
      </a>
    ),

    foto: "https://http2.mlstatic.com/D_NQ_NP_608107-MLA46952554318_082021-W.jpg",
  },
];

export const getFetch = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos);
  }, 1);
});
