import { useRouter } from 'next/router'
import StudentForm from '../src/app/components/StudentForm'

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <h1>Portfolio Form</h1>
      <StudentForm onSaved={() => router.push('/teacher')} />
    </div>
  )
}
