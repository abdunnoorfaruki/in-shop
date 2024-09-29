"use client";
import React from "react";

import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import { Image as ImageType } from "@/types";
import GalleryTab from "@/components/gallery/gallery-tab";
import Image from "next/image";

interface GalleryProps {
  images: ImageType[];
}
const Gallery: React.FC<GalleryProps> = ({ images }) => {
  console.log("Images :", images);
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full sm:block max-w-xl lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square w-full">
        {images.map((image) => (
          <TabPanel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-md overflow-hidden">
              <Image
                src={image.url}
                alt=""
                fill
                className="object-cover  object-center"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
