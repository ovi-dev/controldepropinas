// transformar la moneda 
export const monedas = ( lamoneda : number) => {
    return new Intl.NumberFormat('es-EU', {
        style: 'currency', currency: 'EUR'
    }).format(lamoneda)

}