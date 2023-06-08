"use client"

import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import Item from './Item'
import Footer from './Footer'
import TaskInput from './TaskInput'

type Props = {}

type Task = {
    id: number
    value: string
    status: boolean
  }

export default function Tasks({}: Props) {

  const [ tasks, setTasks ] = useState<Task[] | null>(null)
  const [ inputValue, setInputValue ] = useState<string>('')

  const [ filter, setFilter ] = useState<string>('all')

  //add item to tasks list
  function addToTasks() {
    const newTask: Task = {
        id: tasks && tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        value: inputValue,
        status: false
    }

    setTasks(tasks ? [...tasks, newTask] : [newTask])
    setInputValue('')
  }

  //change task name
  function changeName(value: string, id: number) {
     let copy = [...tasks!]
     copy.filter(task => task.id === id)[0].value = value
     setTasks(copy)
  }

  //delete item from tasks list
  function deleteItem(id: number) {
      let copy = [...tasks!]
      copy = copy.filter(task => task.id !== id)
      setTasks(copy)
  }

  //mark task as done
  function markDone(id: number) {
    let copy = [...tasks!]
    copy.filter(task => task.id === id)[0].status = !copy.filter(task => task.id === id)[0].status
    setTasks(copy)
  }

  //get active items count
  function getItemsCount() {
    let count = 0
    tasks?.forEach(task => {
        if(!task.status) {
            count++
        }
    })
    return count
  }

  //delete completed tasks
  function clearCompleted() {
    let copy = [...tasks!]
    copy = copy.filter(task => !task.status)
    setTasks(copy)
  }

  //mark all tasks as done
  function markAll() {
    let copy = [...tasks!]
    copy.forEach(task => task.status = true)
    setTasks(copy)
  }

  //filter tasks when user clicks on filter buttons
  const filteredTasks = useMemo(() => {
    if (!tasks) return null
    if (filter === 'all') return tasks
    return tasks.filter(task => (filter === 'active' ? !task.status : task.status))
  }, [tasks, filter])


  return (
    <div className='flex relative items-center justify-center'>
        <div style={{width:'50vw'}} className='flex flex-col items-start justify-start w-max bg-white shadow z-40'>
            <TaskInput inputValue={inputValue} setInputValue={setInputValue} markAll={markAll} addToTasks={addToTasks}/>

            {
                filteredTasks && filteredTasks.length > 0 ? filteredTasks.map((task, index) => {
                    return <Item key={index} task={task} changeName={changeName} deleteItem={deleteItem} markDone={markDone}/>
                })
                :
                <div className='flex items-center justify-center p-4 w-full'>
                    <h1 className='text-2xl font-light text-gray-700 text-opacity-50'>No tasks in {filter} yet</h1>
                </div>
            }

            <Footer filter={filter} setFilter={setFilter} getItemsCount={getItemsCount} clearCompleted={clearCompleted}/>
        </div>

        <div className='absolute z-20 flex flex-col w-full h-full items-start justify-start bg-whit shadow -mb-4'>
        </div>
        <div className='absolute z-10 w-full h-full flex flex-col items-start justify-start bg-white shadow -mb-8'>
        </div>
    </div>
  )
}