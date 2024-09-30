import { useState } from "react"
import MenuItems, { OrdenItem } from '../../types/index';


 
export const useOrden = () => {

    const [orden, setorden] = useState<OrdenItem[]>([])
    const [tip, settip] = useState(0)

   

    // agregar productos o iten
     const obtenerIten = (item : MenuItems) => {

         // verificar si el Item o producto existe
        const itemExiste = orden.find( OrdenItem => OrdenItem.id === item.id )
        // identificar con map el codigo que este repetido
        if (itemExiste) {
            const identificaOrden = orden.map( OrdenItem => OrdenItem.id === item.id ?
            //   trae una copia de OrdenItem intera en quantiti
                {...OrdenItem, quantiti: OrdenItem.quantiti +1 }  : OrdenItem
            )
            setorden(identificaOrden)
        }
            // si no existe 
        else {
            let newItem: OrdenItem = {
                ...item, quantiti: 1,
                length: 0
            }
             setorden([...orden, newItem])
          }

        }
        //  eliminar Iten o articulos seleccionado
         const elimirarX = (id: MenuItems['id'])=> {
            setorden(orden.filter( item => item.id !== id))
         }
        //  boton morado se dispara al darle OnClick
        const BotonMorado = () => {
            setorden([])
            settip(0)

        }

  return {

      obtenerIten,
      elimirarX,
      BotonMorado,
      settip,
      orden,
      tip
  }
  
}
