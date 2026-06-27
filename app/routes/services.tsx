import type { Route } from "./+types/services";
import { ServicesPage } from "~/pages/ServicesPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services — STUDIO®" },
    { name: "description", content: "Brand Strategy, Visual Identity, Digital Experience, Content & Campaigns." },
  ];
}

export default function Services() {
  return <ServicesPage />;
}
