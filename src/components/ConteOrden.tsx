import { monedas } from '../helpers';
import MenuItems, { OrdenItem } from '../types/index';

interface proIten {
  orden: OrdenItem[],
  elimirarX: (id: MenuItems["id"]) => void
}

export const ConteOrden = ({orden, elimirarX} : proIten) => {
  return (
    <div className=''>
      <h2 className=" font-black text-3xl">Consumo</h2>

        <div className=' space-y-3 mt-10'>
          {/* se selecciona al pulsar cada item si tiene o no tiene lo muestra */}
             {orden.map( pulsar => (
              // aparece el nombre y el precio con el componente creado de moneda con last-of-type:border-b crea una linea hasta abajo el ultimo 
              <div className=' flex justify-between items-center border-t py-2 last-of-type:border-b'
              key={pulsar.id}>

                  <div>
                <p className=' text-lg'>
                  {pulsar.name} - {monedas(pulsar.price)}
                </p>

                {/* incrementa la cantidad al pulsar y el subtotal */}
                <p className='font-black'>
                  Cantidad: {pulsar.quantiti} - {monedas(pulsar.price * pulsar.quantiti)}
                </p>

                  </div>


                <button 
                className=' bg-red-500 h-8 w-8 rounded-full text-white font-bold' 
                type="button"
                onClick={()=> elimirarX(pulsar.id)}
                >
                  
                  X
                </button>
              </div>
             )

             )
              
              }
        </div>
    </div>
  )
}
