import { groq } from "next-sanity";
import { client } from "./client";

// Get all projects
export const getProjects = groq`*[_type == "project" && defined(slug.current)]{
  _id, title, slug, coverImage, site}`

export async function getprojects() {
  const query = `*[_type == "project" && defined(slug.current)]{
  _id, title, slug, coverImage, site}`;
  return await client.fetch(query);
} 

export async function getProjectBySlug(slug) {
  const query = `*[_type == "project" && slug.current == $slug][0]{_id, title, slug, site, description, coverImage {alt, "image": asset->url}, url, tags [], technologies, client, timeline}`;
  return await client.fetch(query, { slug })
}