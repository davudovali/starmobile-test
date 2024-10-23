import {useCallback} from "react";

export default function CategorySelect({categories, setSelectedCategory}: {categories: string[], setSelectedCategory: (category: string | undefined) => void}) {
  const onChange = useCallback((value: any) => {
    setSelectedCategory(value.target.value || undefined);
  }, [])
  return <select onChange={onChange}>
    <option value="">Choose Category</option>
    {categories.map((category) => <option value={category} key={category}>{category}</option>)}
  </select>
}