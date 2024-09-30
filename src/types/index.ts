import { MenuItems } from "../components/MenuItems";

export default interface MenuItems {
    id:number;
    name: string;
    price: number;
}
export  interface OrdenItem extends MenuItems  {
        length: number;
        quantiti: number
}