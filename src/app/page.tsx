import Tasks from '@/components/Tasks'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-start w-screen min-h-screen'>
          <h1 className='mt-24 text-8xl font-thin text-red-300 text-opacity-30 mb-12'>todos</h1>
          <Tasks />
    </div>
  )
}
