"use client"
import React from 'react'

import usePreviewModal from '@/hooks/use-preview-modal'

import Modal from '@/components/ui/modal'
import Gallery from '@/components/gallery'
import Info from '@/components/info'

const PreviewModal = () => {
  const previewmodal = usePreviewModal()
  const product = usePreviewModal((state) => state.data)
  if(!product) return null
  return (
   <Modal open={previewmodal.isOpen}  onClose={previewmodal.onClose} >
    <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-x-6 lg:gap-x-8 gap-y-8 items-start">
        <div className="sm:col-span-4 lg:col-span-5">
            <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
            <Info data={product} />
        </div>
    </div>

   </Modal>
  )
}

export default PreviewModal