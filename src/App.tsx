import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import axios from 'axios'

import ProductCard, {Product} from "./components/ProductCard";
import CategorySelect from "./components/CategorySelect";
import Search from "./components/Search";
import PriceRange from "./components/PriceRange";
import SortingSelect from "./components/SortingSelect";


function App() {
  const [categories, setCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number] | undefined>(undefined);
  const [selectedRange, setSelectedRange] = useState<[number, number] | undefined>(undefined);
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>('');
  const [sorting, setSorting] = useState<string>('alphasc');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  useEffect(() => {
    const requestProducts = async () => {
      const params = new URLSearchParams()
      if (selectedCategory) params.set("category", selectedCategory)
      if (selectedRange) params.set("minPrice", selectedRange[0].toString())
      if (selectedRange) params.set("maxPrice", selectedRange[1].toString())
      if (sorting) params.set("sorting", sorting)
      if (search.length > 0) params.set("search", search.toLowerCase().replace(' ', ''))
      const {data: products} = await axios.get(`http://localhost:3001/api/products?${params.toString()}`)
      setProducts(products)
    }
    requestProducts();

  }, [selectedCategory, search, selectedRange, sorting]);

  useEffect(() => {
    const requestCategories = async () => {
      const {data: categories} = await axios.get('http://localhost:3001/api/categories')
      setCategories(categories)
    }
    requestCategories()
  }, []);

  useEffect(() => {
    const requestPriceRange = async () => {
      const {data: priceRange} = await axios.get('http://localhost:3001/api/pricerange')
      setPriceRange(priceRange)
    }
    requestPriceRange();
  }, []);

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <CategorySelect categories={categories} setSelectedCategory={setSelectedCategory} />
        <Search onChangeSearch={setSearch}/>
        {priceRange && <PriceRange min={priceRange[0]} max={priceRange[1]} onChangeRange={setSelectedRange}/>}
        <SortingSelect setSorting={setSorting}/>
      </header>
      <main className={styles.productContainer}>
          {products.map((product: Product) => <ProductCard key={product.id} product={product} />)}
      </main>
    </div>
  );
}

export default App;
