// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Portfolio')
    .items([
      S.documentTypeListItem('profile').title('Profiles'),
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('page').title('Pages'),
      S.documentTypeListItem('job').title('Jobs'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['project', 'page', 'author', 'event', 'profile', 'job'].includes(item.getId()),
      ),
    ])
