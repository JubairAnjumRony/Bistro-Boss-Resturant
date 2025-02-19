
import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
// ToDO:Add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="payment" subHeading={"Please Pay to eat"}></SectionTitle>
            {/* <div>
                <h2 className='text-4xl '> taka poisa sob Allah er dan</h2>
            </div> */}
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;