import React  from 'react'
import { memo } from "react";

const Welcom = () => {
    console.log("you are in welcom")
  return (
    <div>Welcom</div>
  )
}

export default memo(Welcom)