import fs from "fs";
import path from "path";

export type ProductImage = {
  position: number;
  original_url: string;
  local_path: string;
};

export type Product = {
  id: string;
  title: string;
  description: string | null;
  short_description: string | null;
  price: number | null;
  sale_price: number | null;
  url: string;
  attributes: Record<string, string>;
  images: ProductImage[];
  categories: { name: string; slug: string; url: string }[];
};

export function getProducts(categorySlug: string): Product[] {
  const dir = path.join(
    process.cwd(),
    "public",
    "categories",
    categorySlug,
    "products"
  );

  const entries = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  return entries.map((slug) => {
    const raw = fs.readFileSync(
      path.join(dir, slug, "product.json"),
      "utf8"
    );
    return JSON.parse(raw) as Product;
  });
}

const ALL_CATEGORIES = ["current-litters", "studs", "queens", "graduates"];

export function getAllProducts(): Product[] {
  return ALL_CATEGORIES.flatMap((slug) => getProducts(slug));
}

export function getProduct(categorySlug: string, productId: string): Product {
  const raw = fs.readFileSync(
    path.join(
      process.cwd(),
      "public",
      "categories",
      categorySlug,
      "products",
      productId,
      "product.json"
    ),
    "utf8"
  );
  return JSON.parse(raw) as Product;
}
