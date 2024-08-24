import ProductList from "../../components/ProductList/ProductList";
import { useParams } from 'react-router-dom';

const Category = () => {
    const params = useParams();

    return (
        <div>
            <h1 className="categ">Category page</h1>
<ProductList category={params.category} limit={null} />
        </div>
    );
}

export default Category;
