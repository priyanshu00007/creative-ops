import type { Route } from "./+types/agency";
import { AgencyPage } from "~/pages/AgencyPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Agency — STUDIO®" },
    { name: "description", content: "We believe that design is not just visual. It is behavioral." },
  ];
}

export default function Agency() {
  return <AgencyPage />;
}
