import { JSONObject } from './types'
import { Tags, jsonMemberResolver } from '../../../utils/json-member-resolver'
import './jsonelement.css'

type RowRendererProps = {
  rowItem: JSONObject
  editable?: boolean
}

// получает json member - object
// отрисовывает row c нужными элементами (нередактируемым)
// если нажать на row (или кнопку), то можем открыть модалку с RowRenderer editable
// где мы получим по id нужный обьект, но теперь у нас уже будет форма + submit (save) + cancel

export const RowRenderer = ({
  rowItem: jsonMember,
  editable = false,
}: RowRendererProps) => {
  return (
    <div className="row">
      {Object.entries(jsonMember).map((item: [string, any]) => {
        const val = jsonMemberResolver(item)

        const { value, type, tag } = val || {}
        const id = jsonMember.id

        switch (tag) {
          case Tags.RADIO:
            return (
              <fieldset className="flex">
                <div className="flex">
                  <input
                    type="radio"
                    id={String(id)}
                    name={String(id)}
                    value={String(value)}
                    checked={value === true}
                    disabled={!editable}
                  />
                  <label htmlFor="true">True</label>
                </div>

                <div className="flex">
                  <input
                    type="radio"
                    id={String(id)}
                    name={String(id)}
                    value={String(value)}
                    checked={value === false}
                    disabled={!editable}
                  />
                  <label htmlFor="false">False</label>
                </div>
              </fieldset>
            )

          case Tags.INPUT:
            return (
              <input
                className="item"
                key={String(id)}
                value={value as string | number}
                type={type}
                disabled={!editable}
              />
            )
          case Tags.TEXTAREA:
            return (
              <textarea
                className={`item ${!editable ? 'fixdimensions' : ''}`}
                key={String(id)}
                value={String(value)}
                rows={2}
                cols={33}
                disabled={!editable}
              />
            )
          default:
            return null
        }
      })}
    </div>
  )
}
