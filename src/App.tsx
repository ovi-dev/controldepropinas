import { ConteOrden } from './components/ConteOrden';
import { useOrden } from './components/hook/useOrden';
import { MenuItems } from "./components/MenuItems"
import { OrdendeTotal } from './components/OrdendeTotal';
import { PropinasTotales } from './components/PropinasTotales';
import { menuItems } from "./data/db"



// 27 set analitica 10:30 y 12 am consulta medicina interna 1:20 endocrino 

function App() {

  const { orden, obtenerIten, elimirarX, tip, settip, BotonMorado } = useOrden()



  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl uppercase font-bold"> Propinas y Consumo</h1>
      </header>
      <main className=" max-w-[1200px] mx-auto grid md:grid-cols-2 py-10">
        <div className='p-5'>
          <h2 className=" text-[30px] font-bold">Menu</h2>
          <div className=" space-y-3 py-3">

            {menuItems.map((item) => (
              <MenuItems
                key={item.id}
                articulo={item}
                obtenerIten={obtenerIten}

              />

            ))}

          </div>
        </div>

        <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {orden.length > 0 ? (

            <>


              <ConteOrden
                orden={orden}
                elimirarX={elimirarX}
              />

              <PropinasTotales
                settip={settip}
                tip={tip}

              />

              <OrdendeTotal
                orden={orden}
                tip={tip}
                BotonMorado={BotonMorado}
              />
            </>


          )




            : (

              <p> no hay nada seleccionadp</p>
            )}
        </div>
      </main>

    </>
  )
}

export default App
