import { CartConteiner, Sidebar, Overlay, ValueText, CartItem, TrashIcon, Form, CartButton, OrderFinishedText } from "./style";
import { AddButton } from "../PlateList/style";
import { clear, close, removeFromCart } from "../../store/reducers/cart";
import { InputMask } from '@react-input/mask';
import { useFormik } from 'formik';
import * as Yup from 'yup'


import trashIcon from '../../assets/images/trashIcon.svg'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { formataPreco } from "../PlateList";
import { ItemCardapio } from "../RestoList";
import { useEffect, useState } from "react";
import { Delivery, usePurchaseMutation } from "../../services/api";
import Loader from "../Loader";
import { cores } from "../../styles";


const Cart = () => {
    const { isOpen, items } = useSelector((state: RootState) => state.cart);
    const displatch = useDispatch();
    const [cartPhase, setCartPhase] = useState<'selectingProducts' | 'informingAddress' | 'payment' | 'orderFinished'>('selectingProducts');
    const [deliveryAddress, setDeliveryAddress] = useState<Delivery>();

    const [purchase, {isLoading, data, isSuccess, isError}] = usePurchaseMutation();

    const closeCart = () => {
        displatch(close());
    }

    const returnTotalPrice = () => {
        return items.reduce((total, currentItem) => total += currentItem.preco, 0);
    }

    const removeCartItem = (plate: ItemCardapio) => {
        displatch(removeFromCart(plate));
    }

    useEffect(() => {
        if(isSuccess){
            displatch(clear());
        }
    }, [displatch, isSuccess]);

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
            client: Yup.string().min(5, 'O nome precisa ter pelo menos 5 caracteres').required('O campo é obrigatório'),
            address: Yup.string().required('O campo é obrigatório'),
            city: Yup.string().required('O campo é obrigatório'),
            zipCode: Yup.string().min(9, 'O cep precisa de ao menos 9 caracteres').required('O campo é obrigatório'),
            number: Yup.string().required('O campo é obrigatório'),
            complement: Yup.string(),
        }),
        onSubmit: (values) => {
            setDeliveryAddress({
                receiver: values.client,
                address: {
                    description: 'description',
                    city: values.city,
                    zipCode: values.zipCode,
                    number: Number(values.number),
                    complement: values.complement
                }
            });
            setCartPhase('payment');
            console.log(deliveryAddress);
        }
    });

    const paymentForm = useFormik({
        initialValues: {
            cardOwner: '',
            cardNumber: '',
            cardCvv: '',
            monthExpirationCard: '',
            yearExpirationCard: ''
        },
        validationSchema: Yup.object({
            cardOwner: Yup.string().min(5, 'O nome precisa ter pelo menos 5 caracteres').required('O campo é obrigatório'),
            cardNumber: Yup.string().min(19, 'O número precisa ter pelo menos 16 digitos').required('O campo é obrigatório'),
            cardCvv: Yup.string().min(3, 'O CVV deve conter 3 dígitos').required('O campo é obrigatório'),
            monthExpirationCard: Yup.string().min(2, 'O mês de vencimento deve conter 2 dígitos').required('O campo é obrigatório'),
            yearExpirationCard: Yup.string().min(4, 'O ano de vencimento deve conter 4 dígitos').required('O campo é obrigatório')
        }),
        onSubmit: (values) => {
            if (deliveryAddress) {
                purchase({
                    products: items.map((item) => ({
                        id: item.id,
                        price: item.preco as number
                    })),
                    delivery: deliveryAddress,
                    payment: {
                        card: {
                            name: values.cardOwner,
                            number: values.cardNumber,
                            code: Number(values.cardCvv),
                            expires: {
                                month: Number(values.monthExpirationCard),
                                year: Number(values.yearExpirationCard)
                            }
                        }
                    }
                })
                setCartPhase('orderFinished')
            }
            
        }
    })

    const checkAddresstHasError = (fieldName: string) => {
        const isChanged = fieldName in addressForm.touched 
        const isInvalid = fieldName in addressForm.errors
        const hasError = isChanged && isInvalid
    
        return hasError
    }

    const checkPaymentHasError = (fieldName: string) => {
        const isChanged = fieldName in paymentForm.touched 
        const isInvalid = fieldName in paymentForm.errors
        const hasError = isChanged && isInvalid
    
        return hasError
    }

    return (
        <CartConteiner className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart}></Overlay>
            <Sidebar>
                {cartPhase === 'selectingProducts' && (
                    <>
                        <ul>
                            {items.map((item) => (
                                <CartItem key={item.id}>
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
                        {items.length > 0 ? (
                            <AddButton onClick={() => setCartPhase('informingAddress')}>Confirmar com a entrega</AddButton>
                        ) : (
                            <ValueText>
                                <p>Seu carrinho está vazio.</p>
                            </ValueText>
                            
                        )}
                    </>
                )}

                {cartPhase==='informingAddress' && (
                    <>
                        <h3>Entrega</h3>
                        <Form onSubmit={addressForm.handleSubmit}>
                            <label htmlFor="client">Quem irá receber</label>
                            <input id="client" name="client" type="text" value={addressForm.values.client} onChange={addressForm.handleChange} onBlur={addressForm.handleBlur} 
                                className={checkAddresstHasError('client') ? 'error' : ''} />
                            <label htmlFor="address">Endereço</label>
                            <input id="address" name="address" type="text" value={addressForm.values.address} onChange={addressForm.handleChange} onBlur={addressForm.handleBlur} 
                                className={checkAddresstHasError('address') ? 'error' : ''} />
                            <label htmlFor="city">Cidade</label>
                            <input id="city" name="city" type="text" value={addressForm.values.city} onChange={addressForm.handleChange} onBlur={addressForm.handleBlur}
                                className={checkAddresstHasError('address') ? 'error' : ''} />
                            <div className="rowHalfLine">
                                <div>   
                                    <label htmlFor="zipCode">Cep</label>
                                    <InputMask mask="_____-___" replacement={{ _: /\d/ }} id="zipCode" name="zipCode" type="text" 
                                        value={addressForm.values.zipCode} onChange={addressForm.handleChange} onBlur={addressForm.handleBlur}
                                        className={checkAddresstHasError('zipCode') ? 'error' : ''} />
                                </div>
                                <div>
                                    <label htmlFor="number">Número</label>
                                    <input id="number" name="number" type="text" value={addressForm.values.number} onChange={addressForm.handleChange} onBlur={addressForm.handleBlur}
                                        className={checkAddresstHasError('number') ? 'error' : ''} />
                                </div>
                            </div>
                            <label htmlFor="complement">Complemento</label>
                            <input id="complement" name="complement" type="text" value={addressForm.values.complement} onChange={addressForm.handleChange} onBlur={addressForm.handleBlur} 
                                className={checkAddresstHasError('complement') ? 'error' : ''} />
                            <div className="buttons">
                                <CartButton type="submit" onClick={() => addressForm.handleSubmit}>Continuar com o pagamento</CartButton>
                                <CartButton onClick={() => setCartPhase('selectingProducts')}>Voltar para o carrinho</CartButton>
                            </div>
                            
                        </Form>
                        
                    </>
                )}

                {cartPhase==='payment' && (
                    <>
                        <h3>Pagamento - Valor a pagar {formataPreco(returnTotalPrice())}</h3>
                        <Form onSubmit={paymentForm.handleSubmit}>
                            <label htmlFor="cardOwner">Nome do cartão</label>
                            <input id="cardOwner" name="cardOwner" type="text" value={paymentForm.values.cardOwner} onChange={paymentForm.handleChange} onBlur={paymentForm.handleBlur} 
                                className={checkPaymentHasError('cardOwner') ? 'error' : ''} />
                            <div className="rowTwoThird">
                                <div>   
                                    <label htmlFor="cardNumber">Número do cartão</label>
                                    <InputMask mask="____ ____ ____ ____" replacement={{ _: /\d/ }} id="cardNumber" name="cardNumber" type="text" 
                                        value={paymentForm.values.cardNumber} onChange={paymentForm.handleChange} onBlur={paymentForm.handleBlur} 
                                        className={checkPaymentHasError('cardNumber') ? 'error' : ''} />
                                </div>
                                <div>
                                    <label htmlFor="cardCvv">CVV</label>
                                    <InputMask mask="___" replacement={{ _: /\d/ }} id="cardCvv" name="cardCvv" type="text" 
                                        value={paymentForm.values.cardCvv} onChange={paymentForm.handleChange} onBlur={paymentForm.handleBlur} 
                                        className={checkPaymentHasError('cardCvv') ? 'error' : ''} />
                                </div>
                            </div>
                            <div className="rowHalfLine">
                                <div>   
                                    <label htmlFor="monthExpirationCard">Mês de vencimento</label>
                                    <InputMask mask="__" replacement={{ _: /\d/ }} id="monthExpirationCard" name="monthExpirationCard" type="text" 
                                        value={paymentForm.values.monthExpirationCard} onChange={paymentForm.handleChange} onBlur={paymentForm.handleBlur} 
                                        className={checkPaymentHasError('monthExpirationCard') ? 'error' : ''} />
                                </div>
                                <div>
                                    <label htmlFor="yearExpirationCard">Ano de vencimento</label>
                                    <InputMask mask="____" replacement={{ _: /\d/ }} id="yearExpirationCard" name="yearExpirationCard" type="text" 
                                        value={paymentForm.values.yearExpirationCard} onChange={paymentForm.handleChange} onBlur={paymentForm.handleBlur} 
                                        className={checkPaymentHasError('yearExpirationCard') ? 'error' : ''} />
                                </div>
                            </div>
                            <div className="buttons">
                                <CartButton type="submit" onClick={() => paymentForm.handleSubmit} disabled={isLoading}>Finalizar pagamento</CartButton>
                                <CartButton onClick={() => setCartPhase('informingAddress')}>Voltar para a edição do endereço</CartButton>
                            </div>
                            
                        </Form>
                        
                    </>
                )}

                {cartPhase === 'orderFinished' && (
                    <>
                    {isLoading ? (
                        // Cenário de Loading
                        <Loader color={cores.laranjaClaro} />
                    ) : isSuccess && data ? (
                        // Cenário de Sucesso
                        <>
                            <h3>Pedido realizado - {data.orderId}</h3>
                            <OrderFinishedText>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</OrderFinishedText>
                            <OrderFinishedText>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</OrderFinishedText>
                            <OrderFinishedText>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</OrderFinishedText>
                            <OrderFinishedText>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</OrderFinishedText>
                            <CartButton onClick={() => setCartPhase('selectingProducts')}>Concluir</CartButton>
                        </>
                    ) : isError ? (
                        // Cenário de Erro
                        <>
                            <h3>Ops! Algo deu errado</h3>
                            <OrderFinishedText>Algo deu errado ao concluir o seu pedido, por favor tente novamente.</OrderFinishedText>
                            <CartButton onClick={() => setCartPhase('selectingProducts')}>Tentar novamente</CartButton>
                        </>
                    ) : null}
                    </>
                )}
            
            </Sidebar>
        </CartConteiner>
    )
}

export default Cart;