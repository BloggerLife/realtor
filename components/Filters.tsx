"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  "Hotel",
  "House",
  "Apartment",
  "Hostel",
  "Resort",
  "Villa",
  "Cabin",
  "Cottage",
  "Guesthouse",
];

const prices = [
  {
    name: "$1 to $50",
    value: "1-50",
  },
  {
    name: "$51 to $200",
    value: "51-200",
  },
  {
    name: "$201 to $1000",
    value: "201-1000",
  },
];

const Filters = () => {
  const router = useRouter();
  const params = useSearchParams();

  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    if (location === "" && category === "" && priceRange === "") {
      return router.push("/");
    }
    let currentQuery: any = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    if (category) {
      currentQuery = {
        ...currentQuery,
        category,
      };
    }
    if (location) {
      currentQuery = {
        ...currentQuery,
        location,
      };
    }
    if (priceRange) {
      currentQuery = {
        ...currentQuery,
        priceRange,
      };
    }
    if (location === "" && currentQuery.location) {
      delete currentQuery.location;
    }
    if (priceRange === "" && currentQuery.priceRange) {
      delete currentQuery.priceRange;
    }
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: currentQuery,
      },
      {
        skipNull: true,
        skipEmptyString: true,
      }
    );
    router.push(url);
  }, [category, location, priceRange]);

  const handleReset = () => {
    setCategory("");
    setLocation("");
    setPriceRange("");
  };

  return (
    <div className="flex gap-4 justify-center flex-wrap">
      <div>
        <Input
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Select value={priceRange} onValueChange={setPriceRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {prices.map((price) => (
                <SelectItem key={price.value} value={price.value}>
                  {price.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
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
