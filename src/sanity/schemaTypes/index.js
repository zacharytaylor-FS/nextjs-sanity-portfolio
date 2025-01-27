import { blockContentType } from './blockContentType'
import { authorType } from './documents/authorType'
import { eventType } from './documents/eventType'
import { jobType } from './documents/jobType'
import { pageType } from './documents/pageType'
import { profileType } from './documents/profileType'
import { projectType } from './documents/projectType'
import duration from './objects/duration'
import { milestoneType } from './objects/milestoneType'
import { timelineType } from './objects/timelineType'

export const schema = {
  types: [blockContentType, authorType, eventType, projectType, pageType, milestoneType, timelineType, duration, jobType, profileType],
}
