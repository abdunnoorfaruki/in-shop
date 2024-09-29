"use client"
import React, { useEffect, useState } from 'react'

import useCart from '@/hooks/use-cart'

import { ShoppingBag } from "lucide-react"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const NavbarAction = () => {
  const router = useRouter()
  const cart  = useCart()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() =>{
    setIsMounted(true)
  },[])

  if(!isMounted) return null
  return (
    <div className='ml-auto flex items-center gap-x-4' >
        <Button onClick={() =>router.push("/cart")}  className="flex items-start rounded-full bg-black px-4 py-2">
            <ShoppingBag size={20} color='white' />
            <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
        </Button>
    </div>
  )
}

export default NavbarAction