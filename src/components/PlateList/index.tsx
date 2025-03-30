import { PlateCardConteiter, PlateName, PlateDescription, AddButton, PlateListContainer, ModalContent, ModalAddButton, Modal, CloseIcon } from "./style";


import closeIcon from '../../assets/images/closeIcon.svg'
import { useState } from "react";
import { ItemCardapio } from "../RestoList";
import { useDispatch } from "react-redux";
import { addToCartStore, open } from "../../store/reducers/cart";


type Props = {
    platesList: ItemCardapio[]
}

type ModalState = {
    isVisible: boolean
    modalPlate: ItemCardapio
}

const emptyPlate:ItemCardapio = {
    foto: '',
    preco: 0,
    id: 0,
    nome: '',
    descricao: '',
    porcao: ''
}

export const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(preco)
}

const PlateList = ({ platesList }: Props) => {
    const dispatch = useDispatch();
    const [modal, setModal] = useState<ModalState>({
        isVisible: false,
        modalPlate: emptyPlate
    });
    

    const addToCart = (plate: ItemCardapio) => {
        dispatch(addToCartStore(plate));
        dispatch(open())
    }

    return (
    <>
        <PlateListContainer className="container">
            {platesList.map((plate) => (
                <PlateCardConteiter key={plate.id}>
                    <img src={plate.foto} alt='pizza' />
                    <PlateName>{plate.nome}</PlateName>
                    <PlateDescription>{plate.descricao}</PlateDescription>
                    <AddButton onClick={() => setModal({isVisible: true, modalPlate: plate})}>Adicionar ao carrinho</AddButton>
                </PlateCardConteiter>
            ))}
        </PlateListContainer>

        <Modal className={modal.isVisible ? 'visible' : ''}>
            <ModalContent className="container">
                
                <img src={modal.modalPlate.foto} alt="" />
                <div>
                    <CloseIcon src={closeIcon} onClick={() => setModal({isVisible: false, modalPlate: emptyPlate})} alt="icone para fechar a modal" />
                    <h3>{modal.modalPlate.nome}</h3>
                    <p>{modal.modalPlate.descricao}</p>
                    <p>Serve: {modal.modalPlate.porcao}.</p>
                    <ModalAddButton onClick={() => addToCart(modal.modalPlate)}>Adicionar ao carrinho - {formataPreco(modal.modalPlate.preco)}</ModalAddButton>
                </div>
            </ModalContent>
            <div className="overlay" onClick={() => setModal({isVisible: false, modalPlate: emptyPlate})}></div>
        </Modal>
    </>
    )
}

export default PlateList;