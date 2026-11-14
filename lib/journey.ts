import fs from "fs";
import path from "path";

export type JourneyProfile = {
  id: string;
  name: string;
  tag: string | null;
  stagesLabel: string;
  description: string[];
  stages: { label: string; local_path: string }[];
};

function loadAll(): JourneyProfile[] {
  const file = path.join(
    process.cwd(),
    "public",
    "categories",
    "journey",
    "journey.json"
  );
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

export function getJourneyProfile(productId: string): JourneyProfile | null {
  return loadAll().find((p) => p.id === productId) ?? null;
}

export function getJourneyProfiles(): JourneyProfile[] {
  return loadAll();
}
