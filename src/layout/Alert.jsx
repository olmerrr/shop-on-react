import React, {useEffect} from "react";

export const Alert = ({name = "", closeAlert = Function.prototype}) => {
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000)

    return () => {
      clearInterval(timerId)
    }
  }, [name])
  return (
    <div className="toast-container">
      <div className="toast">{name} added in cart</div>
    </div>
  )
}