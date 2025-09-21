import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { usePortfolioStore } from '../Store/portfolioStore'
import type { Portfolio } from '../Store/portfolioStore'

type FormData = {
  firstName: string
  lastName: string
  gpa: string
  school?: string
  phone?: string
  talent?: string
  reason?: string
  major?: string
  university?: string
  images?: FileList
}

export default function StudentForm({ onSaved }: { onSaved?: () => void }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const addPortfolio = usePortfolioStore((s) => s.addPortfolio)
  const [previewImgs, setPreviewImgs] = useState<string[]>([])

  async function toDataURL(file: File) {
    return new Promise<string>((res, rej) => {
      const reader = new FileReader()
      reader.onload = () => res(String(reader.result))
      reader.onerror = rej
      reader.readAsDataURL(file)
    })
  }

  const onSubmit = async (data: FormData) => {
    let images: string[] = []
    if (data.images) {
      for (let i = 0; i < data.images.length; i++) {
        const f = data.images.item(i)
        if (f) images.push(await toDataURL(f))
      }
    }
    const payload: Omit<Portfolio, 'id'> = {
      firstName: data.firstName,
      lastName: data.lastName,
      gpa: Number(data.gpa),
      school: data.school,
      phone: data.phone,
      talent: data.talent,
      reason: data.reason,
      major: data.major,
      university: data.university,
      images,
    }
    addPortfolio(payload)
    reset()
    setPreviewImgs([])
    onSaved?.()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="ชื่อ" {...register('firstName', { required: 'กรอกชื่อ' })} />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <input placeholder="นามสกุล" {...register('lastName', { required: 'กรอกนามสกุล' })} />

      <input placeholder="GPA" {...register('gpa', { required: true })} />

      <input placeholder="โรงเรียน" {...register('school')} />
      <input placeholder="เบอร์โทร" {...register('phone')} />
      <input placeholder="ความสามารถพิเศษ" {...register('talent')} />
      <input placeholder="สาขาที่เลือก" {...register('major')} />
      <input placeholder="มหาวิทยาลัย" {...register('university')} />

      <textarea placeholder="เหตุผลในการสมัคร" {...register('reason')} />

      <input type="file" accept="image/*" multiple {...register('images')} />

      <button type="submit">บันทึก</button>
    </form>
  )
}
