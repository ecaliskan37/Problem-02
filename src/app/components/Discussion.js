import { useEffect, useState } from 'react'

const Discussion = (item) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount((count) => item.id)
  }, [item.id])

  return (
    <div>
      <p className="text-sm font-semibold leading-6 text-gray-900">
        <a href={`#${count}`} className="hover:underline">
          {`${item.content}#${count}`}
        </a>
      </p>
      <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
        <p>
          <a href="#" className="hover:underline">
            {item.user}
          </a>
        </p>
        <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
          <circle cx={1} cy={1} r={1} />
        </svg>
        <p>
          <time>{count} gün önce</time>
        </p>
      </div>
    </div>
  )
}
export default Discussion
