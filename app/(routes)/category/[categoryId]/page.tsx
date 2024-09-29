export const revalidate = 0;
import React from "react";

import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";

import Billboard from "@/components/billboard";
import Filter from "@/components/filter";
import Container from "@/components/ui/container";
import ProductCard from "@/components/product-card";
import NoResult from "@/components/no-result";
import MobileFilter from "@/components/mobile-filter";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}
const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId,
  });
  const colors = await getColors();
  const sizes = await getSizes();
  const category = await getCategory(params.categoryId);
  const filterProducts = products.filter(
    (product) => product.category.id === category.id
  );
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4space-y-10 pb-10">
          <Billboard data={category.billboard} />
        </div>
        <div className="px-4 sm:px-6 lg:px-8 pb-4">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* Add mobile filter */}
            <MobileFilter colors={colors} sizes={sizes} />
            <div className="hidden lg:block">
              <Filter valueKey={"sizeId"} name={"Sizes"} data={sizes} />
              <Filter valueKey={"colorId"} name={"Colors"} data={colors} />
            </div>

            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {filterProducts.length === 0 && <NoResult />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                {filterProducts.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr className="py-2" />
      </Container>
    </div>
  );
};

export default CategoryPage;
