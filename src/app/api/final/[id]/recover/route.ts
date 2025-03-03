import { NextRequest } from 'next/server'
import { finalController } from '@/server/controllers/finalController'

export async function POST(req: NextRequest) {
  const parts = req.nextUrl.pathname.split('/')
  const id = parts[parts.length - 2] // URL에서 ID 추출
  const numId = Number(id)

  return finalController.recoverFinal(req, numId)
}