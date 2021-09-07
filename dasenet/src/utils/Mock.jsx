const productos = [
  {
    nombre: "Formateo de PC",
    id: 1,
    precio: 2000,
    descripcion:
      "Este servicio incluye un formateo completo del equipo, dejando el mismo limpio de virus o cualquier amenza y agilizando la velocidad del mismo",
    cantidad: 1,
    foto: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/04/297501-trucos-rapidos-que-dejaran-tu-pc-como-nuevo-formatear.jpg?itok=Fuy-jPr9",
  },
  {
    nombre: "Backup Cloud",
    precio: 5000,
    cantidad: 1,
    descripcion:
      "Este servicio incluye un backup completo de archivos en la nube para cualquier dispositivo con un total de hasta 2TB de almacenamiento",
    id: 2,
    foto: "https://www.almazena.com/wp-content/uploads/2018/05/Cloud-backup-server-768x551.jpg",
  },
  {
    nombre: "Cotizacion vigilancia",
    precio: 2000,
    cantidad: 1,
    descripcion:
      "Este servicio incluye una cotizacion para el servicio de video vigilancia, Camaras, NVR, DVR, etc.",
    id: 3,
    foto: "http://www.rrhhdigital.com/userfiles/videovigilancia-camaras-empresa.jpg",
  },
];

export const getFetch = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});
