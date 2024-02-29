import { useEffect, useReducer } from "react";
import "./App.css";
import axios from "axios";
import { cartReducer } from "./reducers/cartReducer";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  // This returns a state - which can be used to handle state
  // disptach - this can be used to manipulate state
  const initialState = {
    products: [],
    cart: [],
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  };

  // empty dependency is passed in useEffect so that it calls fetchProducts on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
