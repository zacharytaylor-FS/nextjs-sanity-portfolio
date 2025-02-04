import { groq } from "next-sanity";
import { client } from "./client";

// Get all projects
export const getProjects = groq`*[_type == "project" && defined(slug.current)]{
  _id, title, slug, coverImage, site}`
  
