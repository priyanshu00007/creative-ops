import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("work", "routes/work.tsx"),
  route("agency", "routes/agency.tsx"),
  route("services", "routes/services.tsx"),
  route("pricing", "routes/pricing.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
