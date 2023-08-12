import Image from "next/image";
import { client } from "@/sanity/lib/client";

export default async function Home() {
  // const products = await client.fetch(`*[_type == "product"]`);
  const products = await client.fetch(`*[_type == "product"]{
    _id,
    name,
    category->{   // Use the arrow function to expand the category reference
      _id,
      name,
      // Add more fields as needed for the category document
    }
  }`);
  const billboards = await client.fetch(`*[_type == "billboard"]{
    _id,
    label,
    'imageUrl': imageUrl.asset->url
  }
  `);
  console.log(billboards);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      dashboard

    </main>
  );
}
