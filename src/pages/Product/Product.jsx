import './product.scss';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/reducer';

const Product = () => {
    const [data, setData] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch()

    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${params.id}/`)
        .then(({data})=> setData(data))
    },[params])
    return (
        <div className="product">

            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={data.image} alt="" className="product-img" />
                    </div>
                    <div className="col-6">
                        <h3 className="product-title">{data.title}</h3>
                        <p className='product-text'>{data.description}</p>
                        <p className='product-text'>{data.category}</p>
                        <button
                        onClick={()=>{
                            dispatch(addCart(data))
                        }}
                        >buy</button>
                        <button onClick={()=>{
                            navigate(-1)
                        }}>go back</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Product;
