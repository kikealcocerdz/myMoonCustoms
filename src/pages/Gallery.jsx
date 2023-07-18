import { Products } from "../../components/Products";
import { products } from "../assets/products.json";

export function Gallery() {
  return (
    <div className='screen-full'>
    <div className='main' name='gallery'>
      <h2>Nuestros trabajos</h2> 
      <Products products={products} />
    </div>
    </div>
  )
}

export default Gallery