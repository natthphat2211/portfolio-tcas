import Link from 'next/link'
import { useMemo } from 'react'
import { usePortfolioStore } from '../Store/portfolioStore'

export default function TeacherTable({ sortByGpaDesc = true }: { sortByGpaDesc?: boolean }) {
  const portfolios = usePortfolioStore((s) => s.portfolios)

  const sorted = useMemo(() => {
    const copy = [...portfolios]
    copy.sort((a, b) => (sortByGpaDesc ? b.gpa - a.gpa : a.gpa - b.gpa))
    return copy
  }, [portfolios, sortByGpaDesc])

  return (
    <table>
      <thead>
        <tr><th>ชื่อ</th><th>โรงเรียน</th><th>GPA</th><th>Action</th></tr>
      </thead>
      <tbody>
        {sorted.map((s) => (
          <tr key={s.id}>
            <td>{s.firstName} {s.lastName}</td>
            <td>{s.school}</td>
            <td>{s.gpa.toFixed(2)}</td>
            <td><Link href={`/student/${s.id}`}>รายละเอียด</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
