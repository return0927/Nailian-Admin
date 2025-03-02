import { NextRequest } from 'next/server'
import { aiResultController } from '@/server/controllers/aiResultController'

export async function GET(req: NextRequest) {
  return aiResultController.getAiResults(req)
}