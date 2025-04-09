import { CartConteiner, Sidebar, Overlay, ValueText, CartItem, TrashIcon, Form, CartButton, OrderFinishedText } from "./style";
import { AddButton } from "../PlateList/style";
import { close, removeFromCart } from "../../store/reducers/cart";
import { InputMask } from '@react-input/mask';
import { useFormik } from 'formik';
import * as Yup from 'yup'


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

    const addressForm = useFormik({
        initialValues: {
            client: '',
            address: '',
            city: '',
            zipCode: '',
            number: '',
            complement: ''

        },
        validationSchema: Yup.object({
            client: Yup.string().min(5, 'O nome precisa ter pelo menos 5 caracteres').required('O campo é obrigatório')
        }),
        onSubmit: (values) => {
            alert('Finalizar form');
        }
    })

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
                                    <InputMask mask="_____-___" replacement={{ _: /\d/ }} id="zipCode" name="zipCode" type="text" />
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

                {cartPhase==='payment' && (
                    <>
                        <h3>Pagamento - Valor a pagar {formataPreco(returnTotalPrice())}</h3>
                        <Form>
                            <label htmlFor="client">Nome do cartão</label>
                            <input id="cardOwner" name="cardOwner" type="text" />
                            <div className="rowTwoThird">
                                <div>   
                                    <label htmlFor="cardNumber">Número do cartão</label>
                                    <InputMask mask="____ ___ ____ ____" replacement={{ _: /\d/ }} id="cardNumber" name="cardNumber" type="text" />
                                </div>
                                <div>
                                    <label htmlFor="cardCvv">CVV</label>
                                    <InputMask mask="___" replacement={{ _: /\d/ }} id="cardCvv" name="cardCvv" type="text" />
                                </div>
                            </div>
                            <div className="rowHalfLine">
                                <div>   
                                    <label htmlFor="monthExpirationCard">Mês de vencimento</label>
                                    <InputMask mask="__" replacement={{ _: /\d/ }} id="monthExpirationCard" name="monthExpirationCard" type="text" />
                                </div>
                                <div>
                                    <label htmlFor="yearExpirationCard">Ano de vencimento</label>
                                    <InputMask mask="__" replacement={{ _: /\d/ }} id="yearExpirationCard" name="yearExpirationCard" type="text" />
                                </div>
                            </div>
                            <div className="buttons">
                                <CartButton onClick={() => setCartPhase('orderFinished')}>Finalizar pagamento</CartButton>
                                <CartButton onClick={() => setCartPhase('informingAddress')}>Voltar para a edição do endereço</CartButton>
                            </div>
                            
                        </Form>
                        
                    </>
                )}

                {cartPhase==='orderFinished' && (
                    <>
                        <h3>Pedido realizado - ORDER_ID</h3>
                        <OrderFinishedText>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</OrderFinishedText>
                        <OrderFinishedText>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. </OrderFinishedText>
                        <OrderFinishedText>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</OrderFinishedText>
                        <OrderFinishedText>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</OrderFinishedText>
                        <CartButton onClick={() => setCartPhase('selectingProducts')}>Concluir</CartButton>
                    </>
                )}
            
            </Sidebar>
        </CartConteiner>
    )
}

export default Cart;