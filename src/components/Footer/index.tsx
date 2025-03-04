/* eslint-disable jsx-a11y/anchor-is-valid */

import { FooterContainer, Social, FooterText } from './style';

import logo from '../../assets/images/logo.svg';
import instagramLogo from '../../assets/images/instagram.svg';
import facebookLogo from '../../assets/images/facebook.svg';
import twitterLogo from '../../assets/images/twitter.svg';

const Footer = () => (
    <FooterContainer>
        <img src={logo} alt="Logo efood" />
        <Social>
            <a href="#">
                <img src={instagramLogo} alt="Link para o instagram" />
            </a>
            <a href='#'>
                <img src={facebookLogo} alt="Link para o facebook" />
            </a>
            <a href='#'>
                <img src={twitterLogo} alt="Link para o twitter" />
            </a>
        </Social>
        <FooterText>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br /> dos produtos é toda do estabelecimento contratado.</FooterText>
    </FooterContainer>
)

export default Footer