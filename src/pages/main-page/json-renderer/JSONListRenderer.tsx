import { RowRenderer } from './RowRenderer'
import { JSONArray } from './types'
import './jsonviewer.css'

interface JSONListRendererProps {
  data: JSONArray
}

export const JSONListRenderer = ({ data }: JSONListRendererProps) => {
  console.log('data', data)
  return (
    <div className="container">
      {(data ?? []).map((el) => (
        <RowRenderer rowItem={el} />
      ))}
    </div>
  )
}
