
import sushi from '../../assets/images/sushi.png';
import { Card, CardHeader, Description, MoreInfoButton, ImageCard, CardContent } from './style';

export const RestoCard = () => (
    <Card>
        <ImageCard src={sushi} alt="" />
        <CardContent>
            <CardHeader>
                <h2>Hioki Sushi</h2>
                <p>4.9&#11088;</p>
            </CardHeader>
            <Description>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</Description>
            <MoreInfoButton href='#'>Saiba mais</MoreInfoButton>
        </CardContent>
        
    </Card>
)