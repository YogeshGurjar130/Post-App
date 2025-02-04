export default function postReducer(state = [], action) {
    switch (action.type) {
        case "UPDATE_STORE":
            console.log(action.payload, "PAYLOAD")
            return [...action.payload];
        case "REMOVE_POST":
            return state.filter(expense => expense.id !== action.payload);
        default:
            return state;
    }
}