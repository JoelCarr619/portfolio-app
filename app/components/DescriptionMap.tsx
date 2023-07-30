import React from 'react'


export default function DescriptionMap(props) {
    const { list,type } = props
    const contentDisplay = {
        link: (obj) => <p>(obj.content)</p>,
        skills:  (obj) => <p>(obj.content)</p>,
        experience: (obj) => <p>(obj.content.join(', '))</p>,
        education: (obj) => <a>(obj.content)</a>

    }
  return (
    <div>
          {list.map((listItem, listIndex) => {
          return (
            <div key={listIndex}>
              <p><b>{listItem.name}</b></p>
                {contentDisplay[type](listItem)}
              
            </div>
          )

        })}
    </div>
  )
}
