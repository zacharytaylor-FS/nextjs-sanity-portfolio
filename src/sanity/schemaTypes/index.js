import { authorType } from './authorType'
import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { eventType } from './eventType'
import { DurationInput } from './objects/duration/durationInput'
import { milestoneType } from './objects/milestoneType'
import { timelineType } from './objects/timelineType'
import { pageType } from './pageType'
import { postType } from './postType'
import { projectType } from './projectType'

export const schema = {
  types: [blockContentType, categoryType, postType, authorType, eventType, projectType, pageType, timelineType, milestoneType, DurationInput],
}
