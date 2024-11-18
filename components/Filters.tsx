"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import getLocation from "@/app/utils/getLocation";
import { ICity, IState } from "country-state-city";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { Input } from "./ui/input";

const Filters = () => {
  const router = useRouter();
  const params = useSearchParams();

  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleReset = () => {
    setLocation("");
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <div className="flex gap-4 justify-center flex-wrap">
      <div>
        <Input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div>
        <Input
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>

      <div>
        <Input
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      {location && (
        <Button onClick={() => handleReset()}>
          <X className="w-5 h-5" />
          Clear Filters
        </Button>
      )}
    </div>
  );
};

export default Filters;
