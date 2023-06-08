import Image from 'next/image'
import React from 'react'

type taskProps = {
    id: number
    value: string
    status: boolean
}

type ItemProps = {
    task: taskProps
    changeName: (value: string, id: number) => void
    deleteItem: (id: number) => void
    markDone: (id: number) => void
  }

export default function Item({ changeName, deleteItem, markDone, task }: ItemProps) {
  return (
    <div className='flex items-center justify-between py-4 px-4 border-b w-full hover-delete'>
        <div className='flex items-center gap-7 '>
            <div
            style={task.status ? {borderColor: 'green'} : {}}
            onClick={() => markDone(task.id)} 
            className='border w-8 h-8 rounded-full flex items-center justify-center'>
                {task.status && <Image src='/done.svg' width={24} height={24} alt='check'/>}
            </div>
            <input
            onChange={(e) => changeName(e.target.value, task.id)}
            value={task.value}
            style={task.status ? {textDecoration: 'line-through', color: '#98a1ad72'} : {}}
            className={`text-black font-light text-xl outline-none`}/>
        </div>
        <div onClick={() => deleteItem(task.id)} className='delete cursor-pointer hidden'>
            <Image src='/delete.svg' width={24} height={24} alt='delete'/>
        </div>
    </div>
  )
}