import React from "react";
import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarAction from "./navbar-action";

const Navbar = async () => {
  const categories = await getCategories()
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 md:px-6 lg:px-8 flex items-center h-16">
          <Link href={"/"} className="ml-4 lg:ml-0 gap-x-2">
            <p className="text-xl font-bold">In Shop</p>
          </Link>
          <MainNav data={categories}/>
          <NavbarAction />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
