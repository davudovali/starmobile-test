import {useCallback, useEffect, useState} from "react";

export default function Search({onChangeSearch}: {onChangeSearch: (value: string) => void}) {
  const [localValue, setLocalValue] = useState('');
  const onChange = useCallback(({target}: {target: {value: string}}) => {
    setLocalValue(target.value);
  }, [])
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      onChangeSearch(localValue)
    }, 300)
    return () => clearTimeout(delayTimer)
  }, [localValue]);
  return <input type="search" onChange={onChange} placeholder="Search by name..." />
}