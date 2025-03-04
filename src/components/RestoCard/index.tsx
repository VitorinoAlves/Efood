
import Tag from '../Tags';
import { Card, CardHeader, Description, MoreInfoButton, ImageCard, CardContent, Tags } from './style';

type Props = {
    name: string
    description: string
    rate: string
    photo: string
    tags: string[]
}

export const RestoCard = ({name, description, rate, photo, tags}:Props) => (
    <Card>
        <ImageCard src={photo} alt="" />
        <Tags>
            {tags.map((tag) => (
                <Tag key={tag} tag={tag}/>
            ))}
        </Tags>
        <CardContent>
            <CardHeader>
                <h2>{name}</h2>
                <p>{rate}&#11088;</p>
            </CardHeader>
            <Description>{description}</Description>
            <MoreInfoButton to='/profile'>Saiba mais</MoreInfoButton>
        </CardContent>
        
    </Card>
)