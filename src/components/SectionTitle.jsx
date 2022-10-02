import React from 'react'
function SectionTitle({children, id}){
  return (
    <h1 id={id && id}
    className="text-3xl text-center font-bold mb-5 text-sky-500">
        {children}
    </h1>
  )
}

export default SectionTitle;