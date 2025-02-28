
import { Image, Title, Logo, Content } from './style'
import banner from '../../assets/images/banner.png'
import logo from '../../assets/images/logo.svg'

export const Banner = () => (
    <Image style={{backgroundImage: `url(${banner})`}}>
        <Content>
            <Logo src={logo} alt="Logo E-food" />
            <Title>Viva experiências gastronômicas <br /> no conforto da sua casa</Title>
        </Content>
    </Image>
)