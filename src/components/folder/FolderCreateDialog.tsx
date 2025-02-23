"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface FolderCreateDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCreateFolder: (name: string) => void
}

export function FolderCreateDialog({ open, onOpenChange, onCreateFolder }: FolderCreateDialogProps) {
  const [newFolderName, setNewFolderName] = useState("")

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      onCreateFolder(newFolderName.trim())
      setNewFolderName("")
      onOpenChange(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 폴더 만들기</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <Input
            type="text" 
            placeholder="폴더 이름" 
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
          />
          <div className="flex justify-center">
            <Button onClick={handleCreateFolder}>
              폴더 생성
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 