import { defineQuery, groq } from "next-sanity";
import { client } from "./client";

// Get all projects
export const  getProjects = defineQuery(groq`*[_type == "project" && defined(slug.current)]{
  _id, title, slug, coverImage, site}`)
export const PROJECTS_QUERY = defineQuery(`*[_type == "project" && defined(slug.current)]{
  _id, title, slug, coverImage, site}`)

export async function getProjects1() {
  const query = `*[_type == "project"] || order(_createdAt desc)]{
  _id, title, slug, coverImage, site, description, }`;
 
  return await client.fetch(query);
} 
export async function getProject() {
  const query = `*[_type == "project" && defined(slug.current)][0]{
  _id, title, slug, coverImage, site}`;
 
  return await client.fetch(query);
} 

export async function getProjectBySlug(slug) {
  const query = `*[_type == "project" && slug.current == $slug][0]{_id, title, slug, site, description, coverImage {alt, "image": asset->url}, url, tags [], technologies, client, timeline, publishedAt}`;
  return await client.fetch(query, { slug })
}

export async function getProfile(){
  const query = `*[_type == 'profile']{_id, fullName, email, location, skills, socialLinks, headline, fullBio, shortBio, resumeURL, profileImage {alt, "image": asset->url}}`;

  return await client.fetch(query)
}