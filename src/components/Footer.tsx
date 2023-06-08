import React from 'react'

type Props = {
    filter: string
    getItemsCount: () => number
    setFilter: (filter: string) => void
    clearCompleted: () => void
}

export default function Footer({ filter, getItemsCount, setFilter, clearCompleted }: Props) {
  return (
    <div className='flex w-full items-center justify-between px-5 py-4 border-t mobile:flex-col mobile:gap-4'>
        <span className='text-gray-700 text-opacity-50 font-light text-xl'>{getItemsCount()} items left</span>

        <div className='flex items-center gap-4 mobile:flex-col mobile:gap-2'>
            <button 
            onClick={() => setFilter('all')} 
            style={filter == 'all' ? {border:'1px solid #ecb8d272'} : {}} 
            className='text-gray-700 text-opacity-50 font-light text-xl py-1 px-2 rounded'>All</button>

            <button
            onClick={() => setFilter('active')} 
            style={filter == 'active' ? {border:'1px solid #ecb8d272'} : {}} 
            className='text-gray-700 text-opacity-50 font-light text-xl py-1 px-2 rounded'>Active</button>
            <button
            onClick={() => setFilter('completed')} 
            style={filter == 'completed' ? {border:'1px solid #ecb8d272'} : {}} 
            className='text-gray-700 text-opacity-50 font-light text-xl py-1 px-2 rounded'>Completed</button>
        </div>

        <button onClick={() => clearCompleted()} className='text-gray-700 text-opacity-50 font-light text-xl'>Clear completed</button>
    </div>
  )
}