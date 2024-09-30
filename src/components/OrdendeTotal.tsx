import { useMemo } from "react"
import { OrdenItem } from "../types"

interface propOrdenTotal {
    orden : OrdenItem[],
    tip: number
    BotonMorado: () => void

}




export const OrdendeTotal = ({orden, tip, BotonMorado}: propOrdenTotal) => {
    // para agregar la suma del total 
    const subTotal = useMemo(() => orden.reduce( (total, item) => total + (item.quantiti * item.price), 0),[orden], )
    // para agregar las propinas 
    const sumaPropinaCambia = useMemo(() => subTotal * tip, [tip,orden])
    const totalCuenta = useMemo(() => subTotal + sumaPropinaCambia, [tip,orden])

  return (
    <>
    <div className=" space-y-3">
        <h2 className=" font-black text-2xl">Totales y Propinas:</h2>
        <p> Sub Total a Pagar
            <span className=" font-bold"> €{subTotal}</span>
        </p>
        <p> Propinas
            <span className=" font-bold"> €{sumaPropinaCambia}</span>
        </p>
        <p> Total a Pagar
            <span className=" font-bold"> €{totalCuenta}</span>
        </p>
    </div>
    <button 
    className=" w-full bg-violet-800 p-3 text-white uppercase font-bold mt-10 disabled:opacity-20"
    disabled={totalCuenta === 0}
    type="button"
    onClick={BotonMorado}
    > Guardar Orden</button>
    
    </>
  )
}
