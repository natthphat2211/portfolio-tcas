import { useRouter } from 'next/router'
import StudentDetail from '../../src/app/components/StudentDetail'

export default function StudentPage() {
  const { query } = useRouter()
  if (!query.id) return <p>Loading...</p>
  return <StudentDetail id={String(query.id)} />
}
