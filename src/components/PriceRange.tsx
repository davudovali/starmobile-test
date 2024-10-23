import {useCallback, useEffect, useState} from "react";

export default function PriceRange({min, max, onChangeRange}: {min: number, max: number, onChangeRange: (value: [number, number]) => void}) {
  const [range, setRange] = useState<[number, number]>([min, max]);
  useEffect(() => {
      const delayTimer = setTimeout(() => {
        onChangeRange([range[0], range[1]])
      }, 300)
      return () => clearTimeout(delayTimer)
  }, [range]);

  const onChangeMin = useCallback(({target: {value}}: {target: {value: string}}) => {
    setRange((oldValue) => {
      const numberValue = Number.parseFloat(value)
      const newValue: [number, number] = [...oldValue]
      newValue[0] = numberValue
      if (newValue[1] < numberValue) newValue[1] = numberValue
      return newValue
    })
  }, [])
  const onChangeMax = useCallback(({target: {value}}: {target: {value: string}}) => {
    setRange((oldValue) => {
      const numberValue = Number.parseFloat(value)
      const newValue: [number, number] = [...oldValue]
      newValue[1] = numberValue
      if (newValue[0] > numberValue) newValue[0] = numberValue
      return newValue
    })
  }, [])
  return <div>
    <div>
      Min: {range[0]}
      <input type="range" min={min} max={range[1]} step={10} defaultValue={min} onChange={onChangeMin} />
    </div>
    <div>
      Max: {range[1]}
      <input type="range" min={range[0]} max={max} step={10} defaultValue={max} onChange={onChangeMax} />
    </div>
  </div>
}
