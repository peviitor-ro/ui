import { BACKGROUND_BTN } from "redux/constants/constants";

const backgroundBtnReducer = (state = true, action) => {
    switch (action.type) {
        case BACKGROUND_BTN:
            return !state;
        default:
            return state;
    }
};

export default backgroundBtnReducer;