import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'

export interface Portfolio {
  id: string
  firstName: string
  lastName: string
  address?: string
  phone?: string
  school?: string
  gpa: number
  talent?: string
  reason?: string
  major?: string
  university?: string
  images?: string[] // เก็บ base64 image
}

interface PortfolioState {
  portfolios: Portfolio[]
  addPortfolio: (p: Omit<Portfolio, 'id'>) => void
  getById: (id: string) => Portfolio | undefined
}

export const usePortfolioStore = create<PortfolioState>((set, get) => ({
  portfolios: [],
  addPortfolio: (p) =>
    set((state) => ({ portfolios: [...state.portfolios, { ...p, id: uuidv4() }] })),
  getById: (id) => get().portfolios.find((x) => x.id === id),
}))
