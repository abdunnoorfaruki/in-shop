"use client";
import React, { MouseEventHandler } from "react";

import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";

import IconButton from "@/components/icon-button";
import Currency from "@/components/currency";

import { Product } from "@/types";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const previewModal = usePreviewModal()
  const cart = useCart()
  const router = useRouter()

  const handleClick = () =>{
    router.push(`/product/${data.id}`)
  }

  const onPreview:MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()

    previewModal.onOpen(data)
  }
  const onAddToCart:MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()

    cart.addItem(data)
  }
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 " onClick={handleClick}>
      <div className="aspect-square bg-gray-100 rounded-xl relative">
        <Image
          src={data?.images?.[0]?.url}
          alt={data.name}
          fill
          className="aspect-square object-cover rounded-md "
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5 ">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="font-bold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      <div>
      <Currency price={data.price} />
      </div>
    </div>
  );
};

export default ProductCard;
