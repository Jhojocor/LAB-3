import { character } from "./components/card/types/type";

export const getInfo = async(): Promise<Array<character>> => {
    const response = await fetch("https://api.disneyapi.dev/characters");
    const datos = await response.json();
    console.log(datos.data);
    return datos.data;
}

