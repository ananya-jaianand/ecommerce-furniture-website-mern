import {  useNavigate } from 'react-router-dom';
import data from './data_bedroom';

function BedRoom() {
    const navigate = useNavigate();
    const  BuyNow = async(e)=>{
        e.preventDefault()
       
        navigate('/login?redirect=/checkout');
    }
    return(
        <div>
      <main>
        <h2>Bed Room</h2>
        <div className="products" id="products">
          {data.products.map((product) => (
            <div  className="product"  id="product" key={product.slug}>
              {/* <Link to={`/product/${product.slug}`}>  */}
                <img src={product.image} alt={product.name} />
              {/* </Link> */}
              <div className="product-info">
                <div className="prod-heading"> 
                {/* <Link to={`/product/${product.slug}`}  id="prod-heading"class="link-dark text-decoration-none"> */}
                  <p>{product.name}</p>
                {/* </Link> */}
                </div>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button onClick={BuyNow} class="btn btn-dark btn-lg rounded-pill">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
    )
}
export default BedRoom ;