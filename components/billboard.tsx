import React from 'react'
import { Billboard as BillboardTypes } from '@/types'
interface BillboardProps {
    data:BillboardTypes
}
const Billboard: React.FC<BillboardProps> = ({data}) => {
  return (
    <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden' >
        <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover" style={{
            backgroundImage:`url(${data?.imageUrl})`
        }}>
        <div className="h-full w-full flex felx-col justify-center items-center gap-y-8 text-center">
            <div className="text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white">
                {data.label}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Billboard