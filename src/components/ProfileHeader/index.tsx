
import { BannerContent, BannerTexts, StyledLink, ReataurantImage, ReataurantImageContent } from './style';
import banner from '../../assets/images/banner.png';
import logo from '../../assets/images/logo.svg';
import { capitalizeFirstLetter } from '../RestoList';

type Props ={
    title: string
    type: string
    cover: string
}

const ProfileHeader = ({ title, type, cover }: Props) => (
    <>
        <div  style={{backgroundImage: `url(${banner})`}}>
            <BannerContent className='container'>
                <StyledLink to='/'>Restaurantes</StyledLink>
                <img src={logo} alt="efood logo" />
                <BannerTexts>0 produto(s) no carrinho</BannerTexts>
            </BannerContent>
        </div>
        <ReataurantImage style={{backgroundImage: `url(${cover})`}}>
            <ReataurantImageContent>
                <div className='container'>
                    <p>{capitalizeFirstLetter(type)}</p>
                    <h2>{title}</h2>
                </div>
            </ReataurantImageContent>
            
        </ReataurantImage>
    </>
)

export default ProfileHeader;