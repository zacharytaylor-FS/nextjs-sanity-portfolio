import { groq } from "next-sanity";
import { client } from "./client";
export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project" && defined(slug.current)]{
  _id, title, slug, coverImage, site}`
  );
} 