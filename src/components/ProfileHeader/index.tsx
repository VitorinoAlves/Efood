
import { BannerContent, BannerTexts, StyledLink, ReataurantImage, ReataurantImageContent } from './style';
import banner from '../../assets/images/banner.png';
import logo from '../../assets/images/logo.svg';
import restaurantPhoto from '../../assets/images/macarrao.png';

const ProfileHeader = () => (
    <>
        <div  style={{backgroundImage: `url(${banner})`}}>
            <BannerContent className='container'>
                <StyledLink to='/'>Restaurantes</StyledLink>
                <img src={logo} alt="efood logo" />
                <BannerTexts>0 produto(s) no carrinho</BannerTexts>
            </BannerContent>
        </div>
        <ReataurantImage style={{backgroundImage: `url(${restaurantPhoto})`}}>
            <ReataurantImageContent>
                <div className='container'>
                    <p>Italiana</p>
                    <h2>La Dolce Vita Trattoria</h2>
                </div>
            </ReataurantImageContent>
            
        </ReataurantImage>
    </>
)

export default ProfileHeader;