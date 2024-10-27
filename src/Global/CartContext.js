import React, { createContext, useReducer } from 'react'
import { CartReducer } from './CartReducer'

export const CartContext = createContext();

export const CartContextProvider = (props) => {

    const [cart, dispatch] = useReducer(CartReducer, { shoppingCart: [], totalPrice: 0, totalQty: 0 })

    return (
        <CartContext.Provider value={{ ...cart, dispatch }}>
            {props.children}
        </CartContext.Provider>
    )
}


// import React, { createContext, useReducer } from 'react';
// // Create the Cart Context
// export const CartContext = createContext();
// // Initial state for the cart
// const initialState = {
//     shoppingCart: [],  // Array to store products
//     totalPrice: 0,     // Total price of the products in the cart
//     totalQty: 0        // Total quantity of products in the cart
// };
// // Cart reducer to handle the actions
// const cartReducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD_TO_CART': {
//             const { product } = action;
//             const existingProduct = state.shoppingCart.find(item => item.ProductID === product.ProductID);

//             if (existingProduct) {
//                 // If product already exists in the cart, increment the quantity
//                 const updatedCart = state.shoppingCart.map(item =>
//                     item.ProductID === product.ProductID
//                         ? { ...item, qty: item.qty + 1, TotalProductPrice: (item.qty + 1) * item.ProductPrice }
//                         : item
//                 );
//                 return {
//                     ...state,
//                     shoppingCart: updatedCart,
//                     totalPrice: state.totalPrice + product.ProductPrice,
//                     totalQty: state.totalQty + 1
//                 };
//             } else {
//                 // If product is new, add it to the cart
//                 const newProduct = { ...product, qty: 1, TotalProductPrice: product.ProductPrice };
//                 return {
//                     ...state,
//                     shoppingCart: [...state.shoppingCart, newProduct],
//                     totalPrice: state.totalPrice + product.ProductPrice,
//                     totalQty: state.totalQty + 1
//                 };
//             }
//         }

//         case 'INC': {
//             const updatedCart = state.shoppingCart.map(item =>
//                 item.ProductID === action.id
//                     ? { ...item, qty: item.qty + 1, TotalProductPrice: (item.qty + 1) * item.ProductPrice }
//                     : item
//             );
//             const product = state.shoppingCart.find(item => item.ProductID === action.id);
//             return {
//                 ...state,
//                 shoppingCart: updatedCart,
//                 totalPrice: state.totalPrice + product.ProductPrice,
//                 totalQty: state.totalQty + 1
//             };
//         }

//         case 'DEC': {
//             const product = state.shoppingCart.find(item => item.ProductID === action.id);

//             if (product.qty === 1) {
//                 return state;
//             }

//             const updatedCart = state.shoppingCart.map(item =>
//                 item.ProductID === action.id
//                     ? { ...item, qty: item.qty - 1, TotalProductPrice: (item.qty - 1) * item.ProductPrice }
//                     : item
//             );

//             return {
//                 ...state,
//                 shoppingCart: updatedCart,
//                 totalPrice: state.totalPrice - product.ProductPrice,
//                 totalQty: state.totalQty - 1
//             };
//         }

//         case 'DELETE': {
//             const filteredCart = state.shoppingCart.filter(item => item.ProductID !== action.id);
//             const product = state.shoppingCart.find(item => item.ProductID === action.id);
//             return {
//                 ...state,
//                 shoppingCart: filteredCart,
//                 totalPrice: state.totalPrice - (product.qty * product.ProductPrice),
//                 totalQty: state.totalQty - product.qty
//             };
//         }

//         default:
//             return state;
//     }
// };

// // CartContext Provider to wrap your app components
// export const CartProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(cartReducer, initialState);

//     return (
//         <CartContext.Provider value={{ ...state, dispatch }}>
//             {children}
//         </CartContext.Provider>
//     );
// };
