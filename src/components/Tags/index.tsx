import { TagText, TagBox } from "./style";


type Props= {
    tag: string;
}

const Tag = ({tag}: Props) => (
    <TagBox>
        <TagText>{tag}</TagText>
    </TagBox>
)

export default Tag;