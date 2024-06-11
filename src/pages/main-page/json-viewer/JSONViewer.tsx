import { JSONElement } from './JSONElement'
import testJSON from './test.json'
import { JSONArray } from './types'
import './jsonviewer.css'

const json: JSONArray = testJSON

export const JSONViewer = () => {
  console.log('testJSON', testJSON)
  return (
    <div className="container">
      {json.map((el) => (
        <JSONElement jsonMember={el} />
      ))}
    </div>
  )
}
