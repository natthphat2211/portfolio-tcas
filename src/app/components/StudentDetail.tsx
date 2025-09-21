import { usePortfolioStore } from '../Store/portfolioStore'
import Link from 'next/link'

export default function StudentDetail({ id }: { id: string }) {
  const student = usePortfolioStore((s) => s.getById(id))
  if (!student) return <p>ไม่พบนักเรียน</p>

  return (
    <div>
      <h2>{student.firstName} {student.lastName}</h2>
      <p>โรงเรียน: {student.school}</p>
      <p>GPA: {student.gpa}</p>
      <p>สาขา: {student.major}</p>
      <p>มหาวิทยาลัย: {student.university}</p>
      <p>ความสามารถพิเศษ: {student.talent}</p>
      <p>เหตุผล: {student.reason}</p>

      <h3>รูปภาพ</h3>
      {student.images?.map((img, i) => <img key={i} src={img} width={200} />)}

      <Link href="/teacher">กลับ</Link>
    </div>
  )
}
