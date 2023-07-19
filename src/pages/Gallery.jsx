import { Products } from "../../components/Products";
import { products } from "../assets/products.json";

export function Gallery() {
  return (
    <div className='landing-section bg-black h-screen w-screen text-center overflow-hidden relative'>
    <div className='"z-30 relative h-full flex flex-col' name='gallery'>
      <main className="aspect-square ">
      <ul className="grid grid-cols-4 gap-1">
        {/* eslint-disable-next-line react/prop-types*/}
        {products.map((product) => (
          <li className="aspect-square flex-col object-fill" key={product.id}>
            <img src={product.image} alt={product.name} />
          </li>
        ))}
      </ul>
    </main>
    </div>
    </div>
  )
}

export default Gallery