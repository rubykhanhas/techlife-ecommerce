import {createSlice} from '@reduxjs/toolkit'

export type CartItemType = {
    imageUrl: string;
    amount?: number;
    title: string;
    _id: string;
    color: string;
    salePrice: number;
}

type CartSliceActionType = {
    type: string;
    payload: CartItemType
}

const cache: any = sessionStorage.getItem('cartData');

const initState: CartItemType[] = JSON.parse(cache) || [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: initState,
    reducers: {
        addToCart(state, action: CartSliceActionType){
            if(!action.payload.amount) {
                state.push({...action.payload, amount: 1});
                saveToSession(state);
            } else {
                state.push({...action.payload})
            }
        },
        removeCart(state, action: {payload: {_id: string}}) {
            const myState = state.filter(item => item._id != action.payload._id);
            saveToSession(myState);
            return myState;
        },
        changeAmount(state, action: {payload: {_id: string; amount: number}}) {
            const myState = state.map(item => {
                if(item._id === action.payload._id){
                    return {...item, amount: action.payload.amount}
                } else {
                    return item;
                }
            });
            saveToSession(myState);
            return myState;
        }
    }
})

const saveToSession = (rawData: CartItemType[]) => {
    const data = rawData.map(item => {
        return {
            _id: item._id,
            title: item.title,
            imageUrl: item.imageUrl,
            amount: item.amount,
            color: item.color,
            salePrice: item.salePrice
        }
    });
    sessionStorage.setItem('cartData', JSON.stringify(data));
}

const {actions, reducer} = cartSlice;
export default reducer;
export const { addToCart, removeCart, changeAmount } = actions;