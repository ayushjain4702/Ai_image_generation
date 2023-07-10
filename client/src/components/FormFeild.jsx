import React from 'react'

const FormFeild = ({LabelName,type,name,placeholder,value,handleChange,isSupriseMe,handleSupriseMe}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-'>
        <label
          htmlFor={name}
          className='flex items-center gap-2 mb-2'
        >
          {LabelName}
        </label>
        {isSupriseMe && (
          <button
            type='button'
            onClick={handleSupriseMe}
            className='font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black'
          >
            Suprise Me  
          </button>
        )}
      </div>
      <input 
        type= {type}
        id = {name}
        name = {name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3'
      />
    </div>
  )
}

export default FormFeild