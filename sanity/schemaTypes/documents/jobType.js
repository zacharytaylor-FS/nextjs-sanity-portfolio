import { CaseIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const jobType = defineType({
  type: 'document',
  name: 'job',
  title: 'Job',
  icon: CaseIcon,
  fields: [
    defineField({
      name: "name",
      title: "Company Name",
      type: "string",
      description: 'What is the name of the company?',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      description: "Enter the job title. E.g: Software Developer",
      validation: (Rule) => Rule.required().min(8).max(50),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      description: "Company Logo goes here.",
    }),
    defineField({
      name: "url",
      title: "Company Website",
      type: "url",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
    }),
  ]
})