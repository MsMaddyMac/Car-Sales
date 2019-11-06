export const BUY_ITEM = "BUY_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM"

export const buyItem = () => {
    return {
        type: BUY_ITEM
    };
};

export const removeItem = () => {
    return {
        type: REMOVE_ITEM
    };
};