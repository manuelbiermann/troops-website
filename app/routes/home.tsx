import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Troops - Shopify Apps & Ecommerce Solutions" },
    { name: "description", content: "We develop innovative Shopify apps and support ecommerce merchants. SMS Troopers is our flagship cart recovery solution with real human agents." },
  ];
}

export default function Home() {
  return <Welcome />;
}
