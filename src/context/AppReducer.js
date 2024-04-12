import { act } from "react-dom/test-utils";

export default (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload,...state.transactions]
            }
        case 'UPDATING_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.map(transaction => 
                    transaction.id === action.payload.id ? {
                        ...transaction,
                        text: action.payload.text,
                        amount: action.payload.newAmount
                    }
                    : transaction
                )
            }
        default:
            return state;
    }
}