export default function(state = null, action) {
    switch(action.type) {
        case 'ADD_RECIPE': 
        return action.payload; 
    }

    return state; // default option returns same state
}