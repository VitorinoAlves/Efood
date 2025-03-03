import Restaurants from "../../models/Reataurants";
import { RestoCard } from "../RestoCard";
import { CardList } from "./style";

import sushi from '../../assets/images/sushi.png';
import macarrao from '../../assets/images/macarrao.png'

const restaurants: Restaurants[] = [
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
]

export const RestoList = () => (
    <CardList className="container">
        {restaurants.map((restaurant) => (
            <RestoCard 
                key={restaurant.id}
                name={restaurant.name}
                rate={restaurant.rate}
                description={restaurant.description}
                photo={restaurant.photo}
                tags={restaurant.tags}/>
        ))}
        
    </CardList>
)