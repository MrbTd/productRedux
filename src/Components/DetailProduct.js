import { Card } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom"
import { ProductActionDecrement, ProductActionIncrement } from '../redux/Actions/ProductAction'
import Barniere from './Barniere'
import HeaderAppBar from './Header'



const DetailProduct = ({ data }) => {
    const dispatch = useDispatch()
    const product = useSelector(state => {
        return state.filter(item => item?.parnier == true)
    })

    const handleIncremente = (id) => {
        dispatch(ProductActionIncrement(id))

    }

    const handleDecremente = (id) => {
        dispatch(ProductActionDecrement(id))

    }


    return (
        <div>
            <HeaderAppBar />
            <Barniere url={`https://zipfilesbucket1.s3.us-east-2.amazonaws.com/GMM_PY.jpg`}
                test={false}
                title="Bonne degustation a vous"
            />

            <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', marginTop: 20, flexDirection: 'column' }}>
                {product.map(item => <Card style={{ width: 700, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }} key={item.id}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={`https://zipfilesbucket1.s3.us-east-2.amazonaws.com/${item.urlPhoto}`} style={{ width: 80, height: 80 }} />
                        <p style={{ marginLeft: 8, fontWeight: 'bold' }}>{item.nom}<br />{item.prix * item.quantite}Fr</p>

                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', width: 90 }}>
                        <p style={{ fontWeight: 'bold', fontSize: 20 }} onClick={() => handleDecremente(item.id)}>-</p>
                        <p style={{ fontWeight: 'bold', fontSize: 20 }}>{item.quantite}</p>
                        <p style={{ fontWeight: 'bold', fontSize: 20 }} onClick={() => handleIncremente(item.id)}>+</p>


                    </div>
                </Card>)}


            </div>
        </div>
    )
}

export default DetailProduct
