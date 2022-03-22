import React from 'react'
import "./FeedBoxButton.css"

function FeedBoxButton(props) {
  return (
      <div>

            <div className='tooltip feedBoxButton'>
            <props.Icon/>
                <span className='tooltiptext'>{props.text}</span>
            </div>
    </div>
  )
}

export default FeedBoxButton