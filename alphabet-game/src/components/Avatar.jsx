//Avatar.jsx
import React from "react"

const Avatar = ({ picture }) => {
  console.log(picture)
  return (
    <img
      className="w-48 h-48 overflow-hidden rounded-full my-6"
      // src=
      src={picture}
      alt="Lucca"
    />
  )
}

export default Avatar
