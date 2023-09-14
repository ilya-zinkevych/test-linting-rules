import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const delayedResponse = <T,>(response: T, duration = 1_000): Promise<T> =>
  new Promise((res) => setTimeout(() => res(response), duration))

function App() {
  const [count, setCount] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(false)
  const [listSize, setListSize] = useState(0)

  const handleGetList = () => {
    setIsLoading(true)
  }

  useEffect(() => {
    const getList = async () => {
      const list = await delayedResponse([1, 2, 3])
      setListSize(list.length)
      setIsLoading(false)
    }

    if (isLoading) {
      getList().catch((e: unknown) => console.log(e))
    }
  }, [isLoading])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => setCount((count: string | number) => +count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={handleGetList} disabled={isLoading}>
        {isLoading ? 'loading' : 'get size'}
      </button>
      <div>List size: {listSize}</div>
    </>
  )
}

export default App
