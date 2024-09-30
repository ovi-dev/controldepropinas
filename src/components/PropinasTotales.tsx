interface TiporPropPopinas {
    settip: React.Dispatch<React.SetStateAction<number>>
    tip: number
}


const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

export const PropinasTotales = ( {settip, tip}:TiporPropPopinas ) => {
  return (
    <div>
        <h3 className=" font-bold text-2xl"> Propinas:</h3>
         
         <form action="">{tipOptions.map( tipOccion => (

                <div key={tipOccion.id} className=" flex gap-2">
                    <label htmlFor={tipOccion.id}>{tipOccion.label}</label>
                        <input 
                        type="radio" 
                        name="tipo"
                        value={tipOccion.value}
                        onChange={e => settip (+e.target.value)}
                        // fn para borrar el punto de la propina
                        checked={tipOccion.value === tip}
                         />

                </div>
         )) 


         }


         </form>
    </div>
  )
}
