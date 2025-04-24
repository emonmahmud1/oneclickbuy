import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCarts } from '../../redux/features/carts/cartsSlice';

const Carts = () => {
    const dispatch = useDispatch()
    const carts = useSelector(state=>state.carts.items)
    console.log(carts);
    const handlecarts =()=>{
        dispatch(addCarts({product_ids:'1'}))
    }
    return (
        <div>
            cart page
            <button onClick={handlecarts} className="btn">add to cart</button>
        </div>
    );
};

export default Carts;