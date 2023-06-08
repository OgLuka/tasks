import Image from 'next/image'
import React from 'react'

type Props = {
    inputValue: string
    setInputValue: React.Dispatch<React.SetStateAction<string>>
    markAll: () => void
    addToTasks: () => void
}

export default function TaskInput({ inputValue, setInputValue, markAll, addToTasks }: Props) {
  return (
    <div className='py-5 px-5 flex items-center justify-between shadow-bottom w-full mobile:flex-col mobile:gap-4 mobile:items-start'>
        <div className='flex items-center gap-8'>
            <Image src='/arrowdown.svg' width={20} height={20} alt='arrow down'/>
            <input
            style={{width: '26vw'}}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder='What needs to be done? type...'
            className='text-gray-400 text-opacity-50 font-thin text-2xl italic outline-none'/>
        </div>

        <div className='flex items-center gap-8 mobile:justify-end mobile:w-full'>
            {
                inputValue.length > 0 && <button onClick={() => addToTasks()} className='bg-slate-600 py-1 px-4 rounded text-white bg-opacity-40'>add</button>
            }
            <button onClick={() => markAll()} className='border rounded text-md py-2 px-4 text-red-400'>Mark All Done</button>
        </div>
    </div>
  )
}