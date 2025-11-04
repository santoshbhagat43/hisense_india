import React from 'react'

const TextComponents = ({ title, subtitle }: { title: string, subtitle: string }) => {
  return (
    <h2 className="sub-title-india">
        <p>
          {title} <strong>{subtitle}</strong>
        </p>
      </h2>
  )
}

export default TextComponents