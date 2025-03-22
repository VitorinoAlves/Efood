import Plates from "../../models/Plates";
import { PlateCardConteiter, PlateName, PlateDescription, AddButton, PlateListContainer, ModalContent, ModalAddButton, Modal, CloseIcon } from "./style";


import pizza from '../../assets/images/pizza.png';
import closeIcon from '../../assets/images/closeIcon.svg'
import { useState } from "react";

const plates: Plates[] = [
    {
        id: 1,
        name: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        photo: pizza
    },
    {
        id: 2,
        name: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        photo: pizza
    },
    {
        id: 3,
        name: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        photo: pizza
    },
    {
        id: 4,
        name: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        photo: pizza
    },
    {
        id: 5,
        name: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        photo: pizza
    },
    {
        id: 6,
        name: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        photo: pizza
    },
]


const PlateList = () => {
    const [showModal, setShowModal] = useState(false);

    return (
    <>
        <PlateListContainer className="container">
            {plates.map((plate) => (
                <PlateCardConteiter key={plate.id}>
                    <img src={plate.photo} alt='pizza' />
                    <PlateName>{plate.name}</PlateName>
                    <PlateDescription>{plate.description}</PlateDescription>
                    <AddButton onClick={() => setShowModal(true)}>Adicionar ao carrinho</AddButton>
                </PlateCardConteiter>
            ))}
        </PlateListContainer>

        <Modal className={showModal ? 'visible' : ''}>
            <ModalContent className="container">
                
                <img src={pizza} alt="" />
                <div>
                    <CloseIcon src={closeIcon} onClick={() => setShowModal(false)} alt="icone para fechar a modal" />
                    <h3>Pizza Marguerita</h3>
                    <p>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.</p>
                    <p>Serve: de 2 a 3 pessoas</p>
                    <ModalAddButton>Adicionar ao carrinho - R$ 60,90</ModalAddButton>
                </div>
            </ModalContent>
            <div className="overlay" onClick={() => setShowModal(false)}></div>
        </Modal>
    </>
    )
}

export default PlateList;