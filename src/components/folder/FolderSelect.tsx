import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown } from "lucide-react"

interface FolderSelectProps {
  selectedFolders: number[]
  folders: { id: number; name: string }[]
  onFolderToggle: (folderId: number) => void
}

export function FolderSelect({ selectedFolders, folders, onFolderToggle }: FolderSelectProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[200px] justify-between">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              폴더 선택하기
              {selectedFolders.length > 0 && (
                <span className="rounded-full bg-slate-200 px-1.5 py-0.5 text-xs">
                  {selectedFolders.length}
                </span>
              )}
            </div>
            <ChevronDown className="h-4 w-4" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder="폴더 검색..." />
          <CommandList>
            <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
            <CommandGroup>
              {folders.map(folder => (
                <CommandItem
                  key={folder.id}
                  onSelect={() => onFolderToggle(folder.id)}
                  className="flex items-center gap-2"
                >
                  <div className="flex items-center gap-2 flex-1">
                    {selectedFolders.includes(folder.id) && (
                      <Check className="w-4 h-4" />
                    )}
                    {folder.name}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
} 