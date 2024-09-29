import { ADD_TO_CART } from "../constants";

const initialCartState = {
    cardData:[]
}

export default function cardItemsReducer(state=[],action){
    console.log(state);
    switch(action.type){
        case ADD_TO_CART:
            return [
                ...state,
                {cardData: action.data}
            ];
        default:
            return state;
    }
}