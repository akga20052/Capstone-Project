import './App.css';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Navigation from './navigation';

const stripePromise = loadStripe('pk_test_51OHuOTKqe3iUPPvtBf2QLje1548HqmXukQ3yIGEaE8B8G9BWLcwtclDJbOdmG8mv7yBZUBbakRDvGjNZX9jL96XJ00H8VjluVy');

function App() {
  return (
    <div className="App">
      <Elements stripe={stripePromise}>
        <Navigation />
      </Elements>
    </div>
  );
}

export default App;