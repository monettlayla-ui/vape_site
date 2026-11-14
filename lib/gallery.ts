import fs from "fs";
import path from "path";
import sharp from "sharp";

export type GalleryImage = {
  local_path: string;
  width: number;
  height: number;
};

function getGalleryPaths(): string[] {
  const file = path.join(
    process.cwd(),
    "public",
    "categories",
    "gallery",
    "gallery.json"
  );
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  "use cache";

  const paths = getGalleryPaths();

  return Promise.all(
    paths.map(async (local_path) => {
      const { width, height } = await sharp(
        path.join(process.cwd(), "public", local_path)
      ).metadata();
      return { local_path, width: width ?? 800, height: height ?? 800 };
    })
  );
}
