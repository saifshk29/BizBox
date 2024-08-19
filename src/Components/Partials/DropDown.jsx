import React from 'react'
import '../../../src/index.css'

const DropDown = ({title, options, func}) => {
  return (
    <div className="select">
        <select onChange={func} name="format" id="format">
            <option value="" disabled selected>{title}</option>
            {
                options.map((currentElement, index) => (
                    <option key={index} value={currentElement.toLowerCase()}>
                        {currentElement.toUpperCase()}
                    </option>
                ))
            }
        </select>
    </div>
  )
}

export default DropDown
