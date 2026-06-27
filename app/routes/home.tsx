import type { Route } from "./+types/home";
import { HomePage } from "~/pages/home/HomePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "STUDIO® — Digital Flagship Experience" },
    { name: "description", content: "An award-winning creative branding agency delivering iconic brand experiences." },
  ];
}

export default function Home() {
  return <HomePage />;
}
