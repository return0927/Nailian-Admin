import { NextRequest } from 'next/server'
import { folderController } from '@/server/controllers/folderController'

// GET /api/folder
export async function GET() {
  return folderController.getFolders()
}

// POST /api/folder
export async function POST(req: NextRequest) {
  return folderController.createFolder(req)
} 