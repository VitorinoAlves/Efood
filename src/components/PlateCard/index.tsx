import { PlateCardConteiter, PlateName, PlateDescription, AddButton } from './style';

type Props= {
    name: string
    description: string
    photo: string
}

const PlateCard = ({name, description, photo}: Props) => (
    <PlateCardConteiter>
        <img src={photo} alt='pizza' />
        <PlateName>{name}</PlateName>
        <PlateDescription>{description}</PlateDescription>
        <AddButton>Adicionar ao carrinho</AddButton>
    </PlateCardConteiter>
)

export default PlateCard;