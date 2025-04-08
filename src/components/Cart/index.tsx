import { CartConteiner, Sidebar, Overlay, ValueText, CartItem, TrashIcon, Form, CartButton } from "./style";
import { AddButton } from "../PlateList/style";
import { close, removeFromCart } from "../../store/reducers/cart";

import trashIcon from '../../assets/images/trashIcon.svg'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { formataPreco } from "../PlateList";
import { ItemCardapio } from "../RestoList";
import { useState } from "react";

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootState) => state.cart);
    const displatch = useDispatch();
    const [cartPhase, setCartPhase] = useState<'selectingProducts' | 'informingAddress' | 'payment' | 'orderFinished'>('selectingProducts');

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
                {cartPhase === 'selectingProducts' && (
                    <>
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
                        <AddButton onClick={() => setCartPhase('informingAddress')}>Confirmar com a entrega</AddButton>
                    </>
                )}

                {cartPhase==='informingAddress' && (
                    <>
                        <h3>Entrega</h3>
                        <Form>
                            <label htmlFor="client">Quem irá receber</label>
                            <input id="client" name="client" type="text" />
                            <label htmlFor="address">Endereço</label>
                            <input id="address" name="address" type="text" />
                            <label htmlFor="city">Cidade</label>
                            <input id="city" name="city" type="text" />
                            <div className="rowHalfLine">
                                <div>   
                                    <label htmlFor="zipCode">Cep</label>
                                    <input id="zipCode" name="zipCode" type="text" />
                                </div>
                                <div>
                                    <label htmlFor="number">Número</label>
                                    <input id="number" name="number" type="text" />
                                </div>
                            </div>
                            <label htmlFor="complement">Complemento</label>
                            <input id="complement" name="complement" type="text" />
                            <div className="buttons">
                                <CartButton onClick={() => setCartPhase('payment')}>Continuar com o pagamento</CartButton>
                                <CartButton onClick={() => setCartPhase('selectingProducts')}>Voltar para o carrinho</CartButton>
                            </div>
                            
                        </Form>
                        
                    </>
                )}
            
            </Sidebar>
        </CartConteiner>
    )
}

export default Cart;