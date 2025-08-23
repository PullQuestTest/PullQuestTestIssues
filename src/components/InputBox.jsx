import React from 'react'

const InputBox = ({label, type, placeholder, onChange}) => {
  return (
    <div className='w-full flex flex-col gap-1'>
      <label className='text-sm font-medium'>{label}</label>
      <input onChange={onChange} type={type} placeholder={placeholder} className='px-4 py-2 rounded-md outline-none placeholder:text-slate-300 text-sm bg-slate-100'/>
    </div>
  )
}

export default InputBox
