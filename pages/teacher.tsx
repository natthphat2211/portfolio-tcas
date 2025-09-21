import { useState } from 'react'
import TeacherTable from '../src/app/components/TeacherTable'
import Link from 'next/link'

export default function TeacherPage() {
  const [sortDesc, setSortDesc] = useState(true)
  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <button onClick={() => setSortDesc(s => !s)}>
        Sort GPA: {sortDesc ? 'DESC' : 'ASC'}
      </button>
      <Link href="/">เพิ่มนักเรียน</Link>
      <TeacherTable sortByGpaDesc={sortDesc} />
    </div>
  )
}
