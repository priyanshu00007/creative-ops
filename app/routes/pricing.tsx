import type { Route } from "./+types/pricing";
import { PricingPage } from "~/pages/PricingPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Partnerships — STUDIO®" },
    { name: "description", content: "We partner with ambitious leaders who understand that world-class design is a strategic advantage." },
  ];
}

export default function Pricing() {
  return <PricingPage />;
}
