import { createSlice } from "@reduxjs/toolkit";

type FavoriteActionType = {
    type: string;
    payload: string;
};

const SESSION_KEY = "favoritesData";
const cache: any = sessionStorage.getItem(SESSION_KEY);
const initState: string[] = JSON.parse(cache) || [];

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: initState,
    reducers: {
        toggleFavoriteStatus(state, action: FavoriteActionType) {
            let isExisted: boolean = false;
            state.forEach((item) => {
                if (item === action.payload) {
                    isExisted = true;
                }
            });
            if (!isExisted) {
                const newState = [...state, action.payload]
                saveToSession(newState);
                return newState;
            } else {
                const newState = state.filter((item) => item != action.payload);
                saveToSession(newState);
                return newState;
            }
        },
    },
});

const saveToSession = (rawData: string[]) => {
    const data = rawData.map((item) => item);
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
};

const { actions, reducer } = favoritesSlice;
export const { toggleFavoriteStatus } = actions;
export default reducer;
