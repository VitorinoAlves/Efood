import Plates from "../../models/Plates";
import PlateCard from "../PlateCard";
import { PlateListContainer } from "./style";

import pizza from '../../assets/images/pizza.png';

const plates: Plates[] = [
    {
        id: 1,
        name: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        photo: pizza
    },
    {
        id: 2,
        name: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        photo: pizza
    },
    {
        id: 3,
        name: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        photo: pizza
    },
    {
        id: 4,
        name: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        photo: pizza
    },
    {
        id: 5,
        name: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        photo: pizza
    },
    {
        id: 6,
        name: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        photo: pizza
    },
]


const PlateList = () => (
    <PlateListContainer className="container">
        {plates.map((plate) => (
            <PlateCard key={plate.id} name={plate.name} photo={plate.photo} description={plate.description} />
        ))}
    </PlateListContainer>
)

export default PlateList;