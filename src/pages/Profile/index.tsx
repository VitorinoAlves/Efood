
import { useEffect, useState } from "react";
import PlateList from "../../components/PlateList";
import ProfileHeader from "../../components/ProfileHeader";
import { Restaurante } from "../../components/RestoList";
import { useParams } from "react-router-dom";


const Profile = () => {
    const { id } = useParams();
    const [restaurant, setResraurant] = useState<Restaurante>();
    
    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then((res) => res.json())
            .then((res) => setResraurant(res));
    }, [id])


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