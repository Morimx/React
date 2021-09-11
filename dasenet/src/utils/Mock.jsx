const productos = [
  {
    nombre: "Formateo de PC",
    id: 1,
    precio: 2000,
    tipo: "Servicio",
    descripcion:
      "Este servicio incluye un formateo completo del equipo, dejando el mismo limpio de virus o cualquier amenza y agilizando la velocidad del mismo",
    cantidad: 1,
    foto: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/04/297501-trucos-rapidos-que-dejaran-tu-pc-como-nuevo-formatear.jpg?itok=Fuy-jPr9",
  },
  {
    nombre: "Backup Cloud",
    id: 2,
    precio: 5000,
    tipo: "Servicio",
    cantidad: 1,
    descripcion:
      "Este servicio incluye un backup completo de archivos en la nube para cualquier dispositivo con un total de hasta 2TB de almacenamiento",
    foto: "https://www.almazena.com/wp-content/uploads/2018/05/Cloud-backup-server-768x551.jpg",
  },
  {
    nombre: "Cotizacion vigilancia",
    precio: 2000,
    tipo: "Servicio",
    cantidad: 1,
    descripcion:
      "Este servicio incluye una cotizacion para el servicio de video vigilancia, Camaras, NVR, DVR, etc.",
    id: 3,
    foto: "http://www.rrhhdigital.com/userfiles/videovigilancia-camaras-empresa.jpg",
  },
  {
    nombre: "Intel Core i5-10400F",
    precio: 32000,
    id: 4,
    tipo: "CPU",
    cantidad: 5,
    descripcion:
      "https://ark.intel.com/content/www/es/es/ark/products/199278/intel-core-i5-10400f-processor-12m-cache-up-to-4-30-ghz.html",

    foto: "https://startuppc.com.ar/wp-content/uploads/2020/12/71bdmuhAypL._AC_SL1500_.jpg",
  },
  {
    nombre:
      "Memoria RAM Trident Z RGB gamer 16GB 2x8GB G.Skill F4-3200C16D-16GTZR",
    precio: 21000,
    id: 5,
    tipo: "Memorias",
    cantidad: 10,
    descripcion: "https://www.gskill.com/products/1/165/326/Trident-Z-Neo",

    foto: "https://www.gskill.com/_upload/images/156283840610.png",
  },
  {
    nombre: "Placa De Video Igame Geforce Rtx3080ti Rtx 3080 Ti Vulcan 12",
    precio: 371000,
    id: 6,
    tipo: "VGA",
    cantidad: 15,
    descripcion:
      "https://www.nvidia.com/es-la/geforce/graphics-cards/30-series/rtx-3080-3080ti/",

    foto: "https://http2.mlstatic.com/D_NQ_NP_608107-MLA46952554318_082021-W.jpg",
  },
];

export const getFetch = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos);
  }, 3250);
});
