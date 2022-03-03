import { StudentDetail } from '@/components/swr'
import { useState } from 'react'

export interface SWRPageProps {}

export default function SWRPage(props: SWRPageProps) {
  const [detailList, setDetailList] = useState([1, 1, 1])

  function handelAddClick() {
    setDetailList((prevList) => [...prevList, 1])
  }

  return (
    <div>
      <h1>SWR</h1>
      <button onClick={handelAddClick}>Add detail</button>
      <ul>
        {detailList.map((x, i) => (
          <li key={i}>
            <StudentDetail studentId="sktwi1cgkkuif36f5" />
          </li>
        ))}
      </ul>
    </div>
  )
}
