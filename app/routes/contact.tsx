import type { Route } from "./+types/contact";
import { ContactPage } from "~/pages/ContactPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact — STUDIO®" },
    { name: "description", content: "Start your project with STUDIO®. Get in touch with our team." },
  ];
}

export default function Contact() {
  return <ContactPage />;
}
