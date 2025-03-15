import { blockContentType } from './blockContentType'
// import { authorType } from './documents/authorType'
// import { eventType } from './documents/eventType'
import { categoryType } from './documents/categoryType'
import { jobType } from './documents/jobType'
import { pageType } from './documents/pageType'
import { postType } from './documents/postType'
import { profileType } from './documents/profileType'
import { projectType } from './documents/projectType'
import { durationType } from './objects/duration'
import { milestoneType } from './objects/milestoneType'
import { timelineType } from './objects/timelineType'

export const schema = {
  types: [blockContentType, projectType, categoryType ,postType, pageType, milestoneType, timelineType, durationType, jobType, profileType],
} 
