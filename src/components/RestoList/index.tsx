import Restaurants from "../../models/Reataurants";
import { RestoCard } from "../RestoCard";
import { CardList } from "./style";

import sushi from '../../assets/images/sushi.png';
import macarrao from '../../assets/images/macarrao.png'
import { useEffect, useState } from "react";

/*const restaurants: Restaurants[] = [
    {
        id: 1,
        name: 'Hioki Sushi',
        rate: '4.9',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        photo: sushi,
        tags: ['Destaque da semana', 'Japonesa']
    },
    {
        id: 2,
        name: 'La Dolce Vita Trattoria',
        rate: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        photo: macarrao,
        tags: ['Italiana']
    },
    {
        id: 3,
        name: 'Hioki Sushi',
        rate: '4.9',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        photo: sushi,
        tags: ['Destaque da semana', 'Japonesa']
    },
    {
        id: 4,
        name: 'La Dolce Vita Trattoria',
        rate: '4.6',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        photo: macarrao,
        tags: ['Italiana']
    }
]*/

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

export const RestoList = () => {
    const [restaurants, setRestaurants] = useState<Restaurante[]>();

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((res) => setRestaurants(res));
    }, []);

    const capitalizeFirstLetter = (str: string): string => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const getTags = (destacado: boolean, tipo: string): string[] => {
        const capitalizedTipo = capitalizeFirstLetter(tipo);
        if (destacado) {
            return ['Destaque da semana', capitalizedTipo];
        }
        return [capitalizedTipo];
    }

    if(!restaurants){
        return (
            <h2>Carregando...</h2>
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