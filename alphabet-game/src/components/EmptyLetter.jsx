import React from "react"

const EmptyLetter = ({ letter }) => {
  return (
    <div className="w-28 h-24 relative border-b-4 border-blue-500 ">
      <div className="w-full h-full  text-8xl flex justify-center items-center ">
        <span>{letter}</span>
      </div>
    </div>
  )
}

export default EmptyLetter
