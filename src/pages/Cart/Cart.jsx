import './cart.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, decrementCart, deleteCart } from '../../redux/reducer';
import { MdDelete } from "react-icons/md";

const Cart = () => {
    const cart = useSelector(s => s.reducer.cart);
    const dispatch = useDispatch();
    return (
        <div>
               <div className="container">
                {
                    cart.map(item =>{
                       return <div key={item.id} className="cart-item">
                        <div className="cart-item-left">
                            <img src={item.image} alt="" />
                            <div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>

                            <div className="cart-item-right">
                                <div className="cart-count">
                                    <button
                                    onClick={()=>{
                                        dispatch(addCart(item))
                                    }}
                                    className="cart-count-btn">+</button>
                                    <span>{item.count}</span>
                                    <button
                                    onClick={()=>{
                                        if(item.count > 1) dispatch(decrementCart(item.id))
                                    }}
                                    className="cart-count-btn">-</button>
                                </div>
                                <p className="cart-item-price"></p>
                                <button
                                onClick={()=>{
                                    dispatch(deleteCart(item.id))
                                }}
                                className="cart-delete-btn"><MdDelete />delete</button>
                            </div>
                    </div>
                    })
                }


            </div>
            <hr />

        </div>
    );
}

export default Cart;
