import { CartConteiner, Sidebar, Overlay, ValueText, CartItem, TrashIcon } from "./style";
import { AddButton } from "../PlateList/style";
import { close, removeFromCart } from "../../store/reducers/cart";

import trashIcon from '../../assets/images/trashIcon.svg'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { formataPreco } from "../PlateList";
import { ItemCardapio } from "../RestoList";

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootState) => state.cart);
    const displatch = useDispatch();

    const closeCart = () => {
        displatch(close());
    }

    const returnTotalPrice = () => {
        return items.reduce((total, currentItem) => total += currentItem.preco, 0);
    }

    const removeCartItem = (plate: ItemCardapio) => {
        displatch(removeFromCart(plate));
    }

    return (
        <CartConteiner className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart}></Overlay>
            <Sidebar>
                <ul>
                    {items.map((item) => (
                        <CartItem>
                            <img className="productPhoto" src={item.foto} alt="Foto do prato"/>
                            <div>
                                <h4>{item.nome}</h4>
                                <p>{formataPreco(item.preco)}</p>
                            </div>
                            <TrashIcon onClick={() => removeCartItem(item)} src={trashIcon} alt="Excluir item do carrinho" />
                        </CartItem>
                    ))}
                </ul>
                <ValueText>
                    <p>Valor Total</p>
                    <p>{formataPreco(returnTotalPrice())}</p>
                </ValueText>
                <AddButton>Confirmar com a entrega</AddButton>
            </Sidebar>
        </CartConteiner>
    )
}

export default Cart;