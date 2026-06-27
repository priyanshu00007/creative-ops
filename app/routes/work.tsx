import type { Route } from "./+types/work";
import { WorkPage } from "~/pages/WorkPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Work — STUDIO®" },
    { name: "description", content: "A curated selection of brand transformations, digital platforms, and creative campaigns." },
  ];
}

export default function Work() {
  return <WorkPage />;
}
