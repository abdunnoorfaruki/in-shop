"use client";
import React, { useState } from "react";

import { Color, Size } from "@/types";
import { Plus, X } from "lucide-react";
import { Dialog, DialogPanel } from "@headlessui/react";

import { Button } from "@/components/ui/button";
import IconButton from "@/components/icon-button";
import Filter from "@/components/filter";

interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
}
const MobileFilter: React.FC<MobileFilterProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button className=" flex items-center gap-x-2 lg:hidden" onClick={onOpen}>
        Filter <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        onClose={onClose}
        as="div"
        className="relative z-40 lg:hidden"
      >
        {/* background */}
        <div className="fixed inset-0 bg-black bg-opacity-25">
          <div className="fixed inset-0 z-40 flex">
            <DialogPanel className="ml-auto relative flex w-full h-full max-w-xl flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                <div className="flex items-center justify-end px-4">
                    <IconButton icon={<X size={15} onClick={onClose} className=" text-gray-800 " />} />
                </div>
                {/* Render the filter */}
                <div className="p-4">
                <Filter valueKey={"sizeId"} name={"Sizes"} data={sizes} />
                <Filter valueKey={"colorId"} name={"Colors"} data={colors} />
                </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilter;
