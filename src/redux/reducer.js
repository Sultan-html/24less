import { createAction, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_CATEGORIES = 'GET_CATEGORIES';
const ADD_CART = "ADD_CART";
const DECREMENT_CART = "DECREMENT_CART";
const DELETE_CART = "DELETE_CART";

const initialState = {
    categories: [],
    cart:[],
};

export const getCategories = () =>{
    const action = createAction(GET_CATEGORIES);
    return (dispatch) =>{
        axios('https://fakestoreapi.com/products/categories')
        .then(({data})=> {
            dispatch(action(data))
        })
    }
}

export const addCart = createAction(ADD_CART);
export const decrementCart = createAction(DECREMENT_CART);
export const deleteCart = createAction(DELETE_CART);

export default createReducer(initialState, (builder)=>{
        builder
        .addCase(GET_CATEGORIES, (state, action) =>{
            state.categories = action.payload
        })
        .addCase(ADD_CART, (state, action)=>{
           const idx = state.cart.findIndex(item => item.id === action.payload.id);
           if(idx > -1){
            state.cart[idx].count++;
            state.cart = [...state.cart];
           } else{
            state.cart = [
                {
                    count: 1,
                    ...action.payload
                },
                ...state.cart
            ]
           }
        })
        .addCase(DECREMENT_CART, (state,action)=>{
           state.cart =  state.cart.map(item => {
                if(item.id === action.payload) return {
                    ...item,
                    count: item.count - 1,
                }
                return item
            })
        })
        .addCase(DELETE_CART, (state, action)=>{
          state.cart =  state.cart.filter(item =>{
                return item.id !== action.payload
            })
        })
});
