# Next.js + Sanity Portfolio Handover Document

## 1. Project Overview

**Project Name:**  
taylord-portfolio

**Description:**  
A content-driven personal portfolio website to display skills, projects, and job experience. Built with Next.js, styled with TailwindCSS and HeroUI (formerly NextUI), and powered by Sanity CMS for dynamic content management.

**Tech Stack:**

- Next.js
- TailwindCSS
- HeroUI (NextUI)
- Sanity (CMS)
- dotenv

---

## 2. Stakeholders & Contacts

| Name           | Role            | Contact Info  |
| -------------- | --------------- | ------------- |
| Zachary Taylor | Owner/Developer | [Add contact] |

---

## 3. Project Status

- **Current Status:** Complete
- **Milestones Achieved:** Initial launch, CMS integration, responsive design, light/dark mode, fullscreen mode
- **Outstanding Issues/Bugs:** [List or link to GitHub issues if any]
- **Next Steps/Recommendations:**
  - Add more content via Sanity Studio as needed
  - Monitor for new Next.js/TailwindCSS updates

---

## 4. Code & Repository Access

- **Repository URL:** [https://github.com/zacharytaylor-FS/taylord-portfolio](https://github.com/zacharytaylor-FS/taylord-portfolio)
- **Branching Strategy:** main
- **Access Instructions:** Request access via GitHub if not already granted
- **Environment Variables:**
  - `.env.example` included in repo
  - Required:
    - `NEXT_PUBLIC_SANITY_PROJECT_ID`
    - `NEXT_PUBLIC_SANITY_DATASET`
    - `SANITY_API_READ_TOKEN`
  - Fill in `.env.local` with your values (see Sanity project dashboard)

---

## 5. Environment & Deployment

- **Node.js Version:** 18.x (recommended)
- **Package Manager:** npm
- **Other Prerequisites:**
  - Sanity project (see CMS section)
  - Vercel account for deployment

**Local Setup:**
git clone <git@github.com>:zacharytaylor-FS/taylord-portfolio.git
cd taylord-portfolio
npm install
cp .env.example .env.local

Add your environment variables to .env.local
npm run dev

text

**Production Build:**
npm run build
npm start

text

**Hosting Provider:** Vercel  
**Production URL:** [Add deployed site URL]  
**Deployment Process:**

- Push to `main` branch triggers Vercel deployment
- Configure environment variables in Vercel dashboard

---

## 6. Directory Structure

/components # Reusable UI components

/pages # Next.js routes

/public # Static assets (images, favicon, etc.)

/styles # Tailwind and custom CSS

text

---

## 7. Assets & Documentation

- **Design System:** HeroUI (NextUI)
- **Static Assets:** `/public` folder in repo
- **CMS Content:** Managed via Sanity Studio (see Sanity project)
- **API Documentation:** [Refer to Sanity docs if extending]
- **User Guide:**
  - Update content via Sanity Studio
  - Deploy changes via Vercel

---

## 8. Testing

- **How to Run Tests:**  
  _No automated test suite included. Manual testing recommended for UI and CMS integration._
- **Test Coverage:** N/A
- **Testing Tools:** N/A

---

## 9. Credentials & Permissions

- **GitHub:** [Access as needed]
- **Vercel:** [Project owner/admin access]
- **Sanity:** [Project admin access]
- **Environment Variables:** Set in both local `.env.local` and Vercel dashboard

---

## 10. Known Issues, Workarounds & Technical Debt

- **Known Issues:** [List here or link to GitHub Issues]
- **Workarounds:** N/A
- **Technical Debt:** N/A

---

## 11. Support & Maintenance

- **Main Contact:** Zachary Taylor ([Add email/contact])
- **Support Period:** [Define, e.g., 30 days post-handoff]
- **Issue Tracker:** [GitHub Issues]

---

## 12. Legal & Compliance

- **Licenses:** MIT (see repository)
- **Security Notes:**
  - Keep Sanity API tokens secure
  - Do not commit `.env.local` to version control

---

## 13. Sign-Off

- **Handover Date:** 2025-05-05
- **Client Acceptance:** [Signature/Date]
- **Feedback/Notes:** [Optional]

---

_For any questions or clarifications, please reach out to the main contact listed above._
