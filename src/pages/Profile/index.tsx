import PlateList from "../../components/PlateList";
import ProfileHeader from "../../components/ProfileHeader";
import { useParams } from "react-router-dom";
import { useGetPlateListQuery } from "../../services/api";


const Profile = () => {
    const { id } = useParams();
    const { data:restaurant } = useGetPlateListQuery(id!);

    if(!restaurant){
        return (
            <h2>Carregando...</h2>
        )
    }

    return (
    <>
        <ProfileHeader title={restaurant.titulo} type={restaurant.tipo} cover={restaurant.capa}/>
        <PlateList platesList={restaurant.cardapio} />
    </>
)}

export default Profile;