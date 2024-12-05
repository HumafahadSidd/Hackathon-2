import React from 'react'

export default function Button(props:string) {
    const text={props}
  return (
    <div>
      <button>{text.props}</button>
    </div>
  )
}
