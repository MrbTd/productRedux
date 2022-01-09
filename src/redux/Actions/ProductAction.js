import { getProductCategory } from "../../Services"
import { ProductType } from "../type-action/ProductType"

export const ProductAction = () => {
    return async dispatch => {
        const result = await getProductCategory()
        dispatch({
            type: ProductType.INIT,
            data: result.data.articles
        })
    }
}

export const ProductActionParnier = (id) => {
    return {
        type: ProductType.PARNIER,
        data: id
    }
}

export const ProductActionIncrement = (id) => {
    return {
        type: ProductType.INCREMENTE,
        data: id
    }
}

export const ProductActionDecrement = (id) => {
    return {
        type: ProductType.DECREMENTE,
        data: id
    }
}