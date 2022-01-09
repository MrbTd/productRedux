import { ProductType } from "../type-action/ProductType";

export const ProductReducer = (state = [], action) => {
    switch (action.type) {
        case ProductType.INIT:
            return action.data;

        case ProductType.PARNIER:
            const id = action.data
            const productItem = state.find(item => item.id === id)
            const mapResult = state.map(item => item.id === id ? { ...productItem, parnier: true } : item)
            return mapResult;

        case ProductType.INCREMENTE:
            const idIncrement = action.data
            const productIcrement = state.find(item => item.id === idIncrement)
            const result = state.map(item => item.id === idIncrement ? { ...productIcrement, quantite: Number(productIcrement.quantite) + 1 } : item);
            console.log("incrmente", productIcrement);
            return result;

        case ProductType.DECREMENTE:
            const idDecrement = action.data
            const productDecrement = state.find(item => item.id === idDecrement)

            return state.map(item => item.id === idDecrement ? { ...productDecrement, quantite: Number(productDecrement.quantite) - 1 } : item)


        default:
            return state;
    }
}