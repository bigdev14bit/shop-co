import { useParams } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();

    return (
        <div style={{ padding: '60px 40px', textAlign: 'center' }}>
            <h1>Product Detail Page</h1>
            <p>Product ID: {id}</p>
            <p>We will fetch the full product details here soon.</p>
        </div>
    );
}

export default ProductDetail;
