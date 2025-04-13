import { useGetReataurantsQuery } from "../../services/api";
import { cores } from "../../styles";
import Loader from "../Loader";
import { RestoCard } from "../RestoCard";
import { CardList } from "./style";

export type ItemCardapio = {
    foto: string;
    preco: number;
    id: number;
    nome: string;
    descricao: string;
    porcao: string;
}

export type Restaurante = {
    id: number;
    titulo: string;
    destacado: boolean;
    tipo: string;
    avaliacao: number;
    descricao: string;
    capa: string;
    cardapio: ItemCardapio[];
}

export const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const RestoList = () => {
    const { data:restaurants } = useGetReataurantsQuery()


    const getTags = (destacado: boolean, tipo: string): string[] => {
        const capitalizedTipo = capitalizeFirstLetter(tipo);
        if (destacado) {
            return ['Destaque da semana', capitalizedTipo];
        }
        return [capitalizedTipo];
    }

    if(!restaurants){
        return (
            <Loader color={cores.laranja} />
        )
    }


    return (
    <CardList className="container">
        {restaurants.map((restaurant) => (
            <RestoCard 
                key={restaurant.id}
                id={restaurant.id}
                name={restaurant.titulo}
                rate={restaurant.avaliacao}
                description={restaurant.descricao}
                photo={restaurant.capa}
                tags={getTags(restaurant.destacado, restaurant.tipo)}/>
        ))}
        
    </CardList>
)}