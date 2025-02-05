export default function postReducer(state = { list: [], loader: true }, action) {
    switch (action.type) {
        case "UPDATE_STORE":
            console.log(action.payload, "PAYLOAD")
            return { ...state, list: [...action.payload], loader: false };
        case "REMOVE_POST":
            return {...state, list: state.list.filter(expense => expense.id !== action.payload)};
        default:
            return state;
    }
}