import styles from './ProductCard.module.css'

export type Product = {
  id: string,
  name: string,
  price: number,
  category: string,
  image_url: string,
}

export default function ProductCard({product}: {product: Product}) {
  return <div className={styles.container}>
    <h3>
      {product.name}
    </h3>
    <img src={product.image_url} alt={product.name} className={styles.image}/>
    <div>Price: {product.price}</div>
    <div>Category: {product.category}</div>

  </div>

}