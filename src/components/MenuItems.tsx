import MenuItem from "../types"


interface MenuProvider {
    articulo: MenuItem
    obtenerIten : (item : MenuItem) => void
}

export const MenuItems = ({articulo, obtenerIten}:MenuProvider) => {
  return (
    
    <button className=" border-2 border-teal-400 w-full hover:bg-teal-200 p-3 flex justify-between"
     onClick={()=> obtenerIten(articulo)}  >
    <p>{articulo.name}</p>
    <p className=" font-black">€{articulo.price}</p>
    </button>
  )
}
