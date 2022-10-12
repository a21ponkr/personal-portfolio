import React from 'react'
function SectionTitle({children, id}){
  return (
    <h1 id={id && id}
    className="text-3xl text-center font-bold mb-5 text-white">
        {children}
    </h1>
  )
}

export default SectionTitle;