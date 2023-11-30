import { loadStripe } from '@stripe/stripe-js';
import { Elements, useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearAddress, getAddress } from '../stores/userInfo/addressSlice';
import { cartProducts, clearCart } from '../stores/cart/cartSlice';
import  Button  from './elements/Button';

const stripePromise = loadStripe('pk_test_51OHuOTKqe3iUPPvtBf2QLje1548HqmXukQ3yIGEaE8B8G9BWLcwtclDJbOdmG8mv7yBZUBbakRDvGjNZX9jL96XJ00H8VjluVy');

export const StripeWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};
const PaymentForm = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const cart = useSelector(cartProducts);
    const address = useSelector(state => state.address.address);
    const navigate = useNavigate();
    const elements = useElements();
    const stripe = useStripe();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !cart?.length || !address) {
      return;
    }

    setLoading(true);
    try {
      const { error: backEndError, clientSecret } = await fetch(
        'http://localhost:8080/create-payment-intent',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            paymentMethodType: 'card',
            orderItems: cart,
            userId: '', // Replace '123' with the actual user ID or handle this dynamically
            shippingAddress: address,
          }),
        }
      ).then((r) => r.json());
     
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        }
      );

      if (backEndError || stripeError) {
        setError(backEndError || stripeError);
      } else if (paymentIntent.status === 'succeeded') {
        dispatch(clearAddress());
        dispatch(clearCart());
        navigate('/payment-success');
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <form className="md:-2/3 md:mx-auto px-2 pt-1" id="payment-form" onSubmit={handleSubmit}>
        <label htmlFor="card-element" className="pt-4 text-2xl md:text-center">Please enter your card details</label>
        <div className="my-4">
            <CardElement id="card-element" />
        </div>
        <div className="flex justify-center p-2">
            <Button type="submit" disabled={loading} className="bg-marigold text-white text-center py-2 px-4">
                {
                    loading ?
                    'Loading...' :
                    'Pay Now'
                }
            </Button>
        </div>
    </form>
)
}
