import React from 'react'

import Image from 'next/image'
import { Tab } from '@headlessui/react'

import { Image as ImageType } from '@/types'
import { cn } from '@/lib/utils'
interface GalleryTabProps {
    image:ImageType
}

const GalleryTab:React.FC<GalleryTabProps> = ( {image}) => {
  return (
    <Tab className="relative flex items-center justify-center rounded-md bg-white aspect-square cursor-pointer" >
        {({selected})=>(
            <div >
                <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                    <Image src={image.url} alt='' fill />
                </span>
                <span className={cn("absolute inset-0 ring-2 ring-offset-2 rounded-md", selected?"ring-black":"ring-transparent")}></span>
            </div>
        )}
    </Tab>
  )
}

export default GalleryTab