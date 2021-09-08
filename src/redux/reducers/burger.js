import { IS_BURGER } from "redux/constants/constants";

const burgerReducer = (state = false, action) => {
    switch (action.type) {
        case IS_BURGER:
            return !state;
        default: return state;
    }
}

export default burgerReducer;