export const BUY_ITEM = "BUY_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM"

export const buyItem = (feature) => {
    return {
        type: BUY_ITEM,
        payload: feature
    };
};

export const removeItem = (feature) => {
    return {
        type: REMOVE_ITEM,
        payload: feature
    };
};