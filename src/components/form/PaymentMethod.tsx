import { ChangeEvent } from 'react';

import { useStore } from '../../store';


const PaymentMethod = () => {
    const paymentMethod = useStore(state => state.order.paymentMethod);
    const setPaymentMethod = useStore(state => state.setPaymentMethod);


    const handleChangePayment = (e: ChangeEvent<HTMLElement>) => {
        setPaymentMethod(e.target.id)
    }

    return (  
        <div
                area-label="payment_method"
                className="px-3 py-2 border rounded-lg border-slate-400"
            >
                <p>Please choose your payment method</p>
                <form>
                    <div>
                        <input 
                            type="radio" 
                            name="payment_method" 
                            id="creditCard"
                            className="mt-4 mr-2"
                            checked={paymentMethod === "creditCard"}
                            onChange={handleChangePayment}
                        />
                        <label htmlFor="creditCard">Credit Card</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="payment_method" 
                            id="paypal"
                            className="mt-4 mr-2"
                            checked={paymentMethod === "paypal"}
                            onChange={handleChangePayment}
                        />
                        <label htmlFor="paypal">Paypal</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            name="payment_method" 
                            id="klarna"
                            className="mt-4 mr-2" 
                            checked={paymentMethod === "klarna"}
                            onChange={handleChangePayment}
                        />
                        <label htmlFor="klarna">Klarna</label>
                    </div>
                </form>
        </div>
    );
}
 
export default PaymentMethod;