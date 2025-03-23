
import Tag from '../Tags';
import { Card, CardHeader, Description, MoreInfoButton, ImageCard, CardContent, Tags } from './style';

type Props = {
    id: number
    name: string
    description: string
    rate: number
    photo: string
    tags: string[]
}

export const RestoCard = ({id, name, description, rate, photo, tags}:Props) => {
    const sliceDescription = (des: string): string => {
        return `${ des.slice(0, 250)}...`;
    }

    return (
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
            <Description>{sliceDescription(description)}</Description>
            <MoreInfoButton to={`/profile/${id}`} >Saiba mais</MoreInfoButton>
        </CardContent>
        
    </Card>
)}