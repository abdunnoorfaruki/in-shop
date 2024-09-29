"use client";
import { formatter } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface CurrencyProps {
  price: string;
}

const Currency: React.FC<CurrencyProps> = ({ price }) => {
  const [isMounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <div className="font-semibold"> {formatter.format(Number(price))} </div>
  );
};

export default Currency;
