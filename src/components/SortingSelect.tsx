import {useCallback} from "react";

export default function SortingSelect({setSorting}: {setSorting: (category: string) => void}) {
  const onChange = useCallback((value: any) => {
    setSorting(value.target.value);
  }, [])
  return <select onChange={onChange} defaultValue="pricedesc">
    <option value="pricedesc" >Price High to Low</option>
    <option value="priceasc">Price Low to Higth</option>
    <option value="alphasc">- Alphabetically (A-Z)</option>
    <option value="alphdesc">- Alphabetically (Z-A)</option>
  </select>
}