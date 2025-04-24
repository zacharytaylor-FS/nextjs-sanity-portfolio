# 📑 Portfolio SEO Plan - Taylor'D

- **SEO Plan**
- **Zachary Taylor**
- **Assignment Due Date: 04/13/25**

---

## Keyword Strategy

Target keywords that represent skills and services you may offer. Mix primary and secondary keywords in headings, paragraphs, image alt texts, and meta tags

### **Primary Keywords**

- Next.js developer
- JavaScript developer portfolio
- Frontend Web developer
- Web developer portfolio
- Next.js CMS portfolio
- Backend web developer

### **Secondary Keywords**

- Portfolio website using Next.js and Sanity CMS
- Full stack developer with MongoDB and Express
- Web developer using Tailwind CSS and Framer Motion
- Custom portfolio design with Sanity CMS
- SEO optimized React developer portfolio

---

## On-Page SEO

### **Meta-tags**

- **Title**: "Taylor'D|Web Developer Portfolio - Next.js, Tailwind, Sanity, HeroUI"
- **Meta Description**: "Taylor'D a eye-catching, modern portfolio that shows custom web development using Next.js, Tailwind CSS, Sanity CMS, and HeroUI. Explore projects, services, and blog post(optional)"

Meta tag example:

```javascript
export const metadata = {
  title:
    'Taylor’D | Creative Web Developer Portfolio – Next.js, Tailwind, Sanity',
  description:
    'Taylor’D is a bold and modern portfolio showcasing custom web development using Next.js, Tailwind CSS, Sanity CMS, and Framer Motion. Discover unique projects and creative digital solutions.',
  keywords: [
    'Web Developer Portfolio',
    'Next.js Developer',
    'Tailwind CSS',
    'Sanity CMS',
    'JavaScript Developer',
    'Framer Motion',
    'Frontend Developer',
    'Full Stack Developer',
  ],
  authors: [{ name: 'Taylor’D' }],
  openGraph: {
    title: 'Taylor’D | Creative Web Developer Portfolio',
    description:
      'Explore Taylor’D, a modern web developer portfolio built with Next.js, Tailwind CSS, Sanity CMS, and Framer Motion.',
    url: 'https://taylord.dev',
    siteName: 'Taylor’D Portfolio',
    images: [
      {
        url: 'https://taylord.dev/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Taylor’D Portfolio Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taylor’D | Creative Web Developer Portfolio',
    description:
      'Check out Taylor’D – a visually bold portfolio site made with Next.js, Tailwind CSS, Sanity, and more.',
    images: ['https://taylord.dev/preview.jpg'],
    creator: '@yourhandle',
  },
};
```

### **URL Structure**

Use clean, meaningful, and readable URLs:

- /projects
- /project/[slug]
- /about
- /work
- /

### **Headings (H1-H3)**

- H1: Zachary Taylor + "Full stack developer" or "Web Developer"
- H2: Projects, Studies, Skills, About, Work
- H3: Tools, Technologies, Blog post description

### **Image Optimization (H1-H3)**

- Compress images (with next/images)
- Add descriptive alt tags using relevant keywords

### **Structured Data**

Enable search results that engage users and encourage them to interact with your website, called _rich results_

- Google, uses Structured data to understand page content, information about the web, and the world (people, books, or organizations in markup)
- **JSON-LD**: JSON for Linking Data, JavaScript notation in `<head>` and `<body` elements of an HTML page
  - Person
  - Website
  - [ProfilePage structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
- Use [schema.org](schema.org) vocabulary along with Microdata, RDFa, or JSON-LD format to add information to your Web content

---

## Technical SEO

- **Fast Loading**: Use lazy loading, optimize fonts and images, and minimize scripts
- **Responsive Design**: Mobile first approach (Tailwind CSS)
- **Accessible Markup**: HeroUI uses React-Aria
- **Sitemap**: Add sitemap.xml then submit to Google Search Console
- **Robots.txt**: Indexing but block unwanted pages (e.g, /api/)
- Shareability: configured Open Graph and Twitter card metadata makes portfolio more accessible that increases it's reach
- Maintenance: Next.js Metadata API makes it easy to manage and update my portfolio's metadata, easier to improve SEO over time

---

## Off-Page SEO

- **Backlink building**: Guest post on dev blogs, share projects on GitHub or Reddit, add site to directories (e.g, Dribbble)
- **Social Sharing**: Share new projects or posts and updates to LinkedIn or developer communities
  - Ex. Business Card - Digital & Physical
  - Cost
  - Resources
- How methods will work and why

---

## Reference Links

Use this section to highlight your own independent research. Replace the example references below with your own links and recommended resources. For example...

**Google**
[URL Inspection Tool](https://support.google.com/webmasters/answer/9012289): URL Inspection report and test

**Next.js Metadata**
[Metadata and OG images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images):How to add metadata and create OG images

**Google AI**  
[Metadata to attract the right employer](https://docs.google.com/document/d/e/2PACX-1vQBQMRdWBD8tgg0kGzEDi3PToysmpbYwhf8vIZNp28hSNmD5xIO9VWEX6ylCqqH-Ij31UUffDzbqSF6/pub): Tips to improve SEO and attract employers.

**Google Search Central**
[Profile page structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page): ProfilePage markup designed for people or organizations that are viewed by others

[Creating helpful, reliable,people-first content](https://www.digitalsilk.com/digital-trends/website-development-process/): Self-assess your content

---
