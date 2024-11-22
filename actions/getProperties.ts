import prismadb from "@/lib/prismadb";

interface Props {
  searchParams: {
    title: string;
    location: string;
    category: string;
    priceRange: string;
  };
  page: number;
  limit: number;
}
export const getProperties = async ({ page, limit, searchParams }: Props) => {
  try {
    const properties = await prismadb.property.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: {
        title: {
          contains: searchParams.title,
        },
        location: {
          contains: searchParams.location,
        },
        category: {
          contains: searchParams.category,
        },
      },
    });

    return properties;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get properties", { cause: error });
  }
};
