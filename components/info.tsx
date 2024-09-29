import React from "react";

import { Product as ProductType } from "@/types";
import { formatter } from "@/lib/utils";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
interface InfoProps {
  data: ProductType;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1
        className="text-3xl font-bold text-gray-900
        "
      >
        {data.name}
      </h1>
      <div className="mt-3 flex justify-between items-end">
        <p className="text-2xl text-gray-900">
          {" "}
          {formatter.format(Number(data.price))}{" "}
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div className="">{data.size.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            title={data.color.name}
            style={{ backgroundColor: data.color.value }}
          ></div>
        </div>
      </div>
      <div className="flex items-center gap-x-3 mt-10">
        <Button className="flex items-center gap-x-2" >Add to cart <ShoppingCart/> </Button>
      </div>
    </div>
  );
};

export default Info;
