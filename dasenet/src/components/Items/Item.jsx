import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Item.css'

const productos = [
    {
        nombre: "Formateo de PC",
        id: 1,
        precio: 2000,
        descripcion: "Este servicio incluye un formateo completo del equipo, dejando el mismo limpio de virus o cualquier amenza y agilizando la velocidad del mismo",
        cantidad: 1,
        foto: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/04/297501-trucos-rapidos-que-dejaran-tu-pc-como-nuevo-formatear.jpg?itok=Fuy-jPr9"
    }, {
        nombre: "Backup Cloud",
        precio: 5000,
        cantidad: 1,
        descripcion: "Este servicio incluye un backup completo de archivos en la nube para cualquier dispositivo con un total de hasta 2TB de almacenamiento",
        id: 2,
        foto: "https://www.almazena.com/wp-content/uploads/2018/05/Cloud-backup-server-768x551.jpg"
    },
    {
        nombre: "Cotizacion vigilancia",
        precio: 2000,
        cantidad: 1,
        descripcion: "Este servicio incluye una cotizacion para el servicio de video vigilancia, Camaras, NVR, DVR, etc.",
        id: 3,
        foto: "http://www.rrhhdigital.com/userfiles/videovigilancia-camaras-empresa.jpg"
    }

]
const getFetch = new Promise ((resolve)=>{ 
    setTimeout(()=>{
        resolve(productos)
    }, 3000)})

export default function Item() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true);


useEffect(() => {
    getFetch
    .then(res =>{
        setProductos(res)
        setLoading(false)
    })
}, []);

    return (
        <div className="d-flex justify-content-center">

        {loading ? <h2 className="fonts">Loading...</h2>
        :
        productos.map(productos => 
            
        <div key={productos.id} className="card ">
            <img className="card-img-top fotoproductos img-fluid" src={productos.foto} alt="Card foto cap" />
            <div className="card-body fotoproductos">
            <h5 className="card-title">{productos.nombre}</h5>
            {productos.descripcion}
            </div>

        <div className="card-footer">
            <button className="btn btn-outline-primary btn-block">
                Agregar al carrito ${productos.precio} 
            </button>
        </div>



        </div>)
        
        
        
        
        
        
        
        
        
        
        
        }
            </div>
        
    )
}
