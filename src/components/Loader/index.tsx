import { BeatLoader } from 'react-spinners'
import { Container } from './styles'

type Props = {
    color: string
}

const Loader = ({color}:Props) => {
    return (
        <Container>
            <BeatLoader color={color} />
        </Container>
    )
}

export default Loader