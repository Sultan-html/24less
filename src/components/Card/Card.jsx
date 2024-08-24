import './card.scss'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/reducer';
import { CiShoppingCart } from "react-icons/ci";

const Card = ({item}) => {
    const dispatch = useDispatch();
    return (
        <div className='product-card'>
            <Link to={`/product/${item.id}`}>
            <img src={item.image} alt="" className='product-card-img' />
            <h3 className='product-card-title'>{
                item.title.length >30
                ? item.title.substr(0,27).trim() +'...'
                : item.title
                }</h3>
            <p className='product-card-text'>{
            item.description.length > 30
                 ? item.description.substr(0,27).trim() +'...'
                 : item.description
                }
            </p>

            </Link>

            <div className="product-card-block">
                <p className="price">${item.price}</p>
                <button className="product-card-btn" onClick={()=>{
                    dispatch(addCart(item))
                }}><CiShoppingCart className="icon" />buy</button>
            </div>
        </div>
    );
}

export default Card;
