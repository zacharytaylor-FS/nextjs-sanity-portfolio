This document is a template for ongoing research. Delete this first paragraph and then update the information below where indicated.

<br>

# Project & Portfolio

- **Research Notes - 359 Milestone 1**
- **Zachary Taylor**
- **Assignment Due Date**

<br>

## Kickoff Questions for Software development

This document contains general notes related to project initiation. Coming up with project ideas while being able to pitch an idea behind the project that serves a purpose, helps picking good projects to build. To finda solid base of questions to consider when coming up with your next project. Checkout [Discovery: Can you answer software's key kickoff questions?](https://envylabs.com/insights/software-development-discovery-process)
<br>

## Next.js Dynamic Routes

Dynamic routes are best used when the exact segment name is unknown. For example if you are working with projects a route would look like this `app/project/[slug]/page.js`.

- Dynamic segments are filled with data at request time or #prerendered#
- Dynamic segments are passed as a param prop to layout, page, route, and generateMetadata
- Params prop is a promise! You MUST use async/await or React's use function
- Wrap folders name in [] for example [id], [slug], [title]

<br>

## Sanity CMS

Sanity is a headless Content Management System(CMS) that is used to manage data by storing structured content that can be used in a application.

- Use schemas to structure data stored
- Can use JS to add validation and set initial values
- Offers it's own query language GROQ
- Live editing with instant UI

<br>

## Query Language (GROQ)

GROQ is Sanity's query language allowing you to query only the data you need and join data from different sets of documents.

- GROQ stand for Graph-Relational Object Queries
- To use queries in the frontend you'll need to create a client that performs the queries
- - : represents every document
- [] : represents the filter
  - Filter document type \_type == 'data'
- {} : represents projections meaning what data you want returned

<br>

## Reference Links

Use this section to highlight your own independent research. Replace the example references below with your own links and recommended resources. For example...

**Resource 1: Discovery: Can you answer software's key kickoff questions?**  
[Discovery: Can you answer software's key kickoff questions?](https://envylabs.com/insights/software-development-discovery-process): I learned some key questions to consider when coming up with project ideas

**Resource 2: Next.js Dynamic Routes**  
[Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes): This site broke down dynamic routes using Next.js App Router

**Resource 3: Jamstack: Sanity**  
[Sanity](https://jamstack.org/headless-cms/sanity/): This article explains Sanity headless CMS features and purpose.

**Resource 4: Sanity: Query Language (GROQ)**  
[Query Language (GROQ)](https://www.sanity.io/docs/groq): This article explains Sanity headless CMS features and purpose.

**Resource 5: Sanity: How Queries Work - GROQ**  
[How queries work - GROQ](https://www.sanity.io/docs/how-queries-work): This article explains how GROQ queries work and how to build them

<br>

**Note:**

- It is acceptable to provide multiple links for a single sub-topic.
- Be sure to explain what resource(s) you found most helpful for the current milestone.
