import { JSONObject } from './types'
import { Tags, jsonMemberResolver } from './utils/json-member-resolver'
import './jsonelement.css'

type JSONElementProps = {
  jsonMember: JSONObject
}

export const JSONElement = ({ jsonMember }: JSONElementProps) => {
  return (
    <div className="row">
      {Object.entries(jsonMember).map((item: [string, any]) => {
        const val = jsonMemberResolver(item)

        if (!val) {
          return
        }

        const { value, type, tag } = val
        const id = item[1].id

        switch (tag) {
          case Tags.RADIO:
            return (
              <fieldset>
                <legend>Select true/false:</legend>

                <div>
                  <input
                    type="radio"
                    id="true"
                    name="true"
                    value="true"
                    checked={value === true}
                  />
                  <label htmlFor="true">True</label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="false"
                    name="false"
                    value="dewey"
                    checked={value === false}
                  />
                  <label htmlFor="false">False</label>
                </div>
              </fieldset>
            )

          case Tags.INPUT:
            return (
              <input key={id} value={value as string | number} type={type} />
            )
          case Tags.TEXTAREA:
            return (
              <textarea key={id} value={String(value)} rows={5} cols={33} />
            )
        }
      })}
    </div>
  )
}
