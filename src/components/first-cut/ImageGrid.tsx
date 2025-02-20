import Image from "next/image"
import IconCheck from "@/assets/icons/icon_check.svg"

interface MockImage {
  id: number
  src: string
  alt: string
  uploadedBy: string
  date: string
  shape?: string
}

interface ImageGridProps {
  images: MockImage[]
  selectedImages: number[]
  onImageSelect: (id: number) => void
}

export function ImageGrid({ images, selectedImages, onImageSelect }: ImageGridProps) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 pl-6 pr-[72px]">
      {images.map((image) => (
        <div 
          key={image.id} 
          className="relative rounded-lg border-2 border-[#CD19FF] overflow-hidden p-2 cursor-pointer"
          onClick={() => onImageSelect(image.id)}
        >
          {selectedImages.includes(image.id) && (
            <div className="absolute top-1 right-1 z-10">
              <IconCheck className="w-5 h-5" />
            </div>
          )}
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-200"
            />
          </div>
          <div className="p-2 space-y-1 bg-white flex flex-col justify-center items-center">
            <p className="text-xs text-gray-600">{image.uploadedBy}</p>
            <p className="text-xs text-gray-600">{image.date}</p>
          </div>
        </div>
      ))}
    </div>
  )
} 