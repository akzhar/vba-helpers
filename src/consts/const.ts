type TLinks = { [key: string]: string };

export const AppRoutes: TLinks = {
  HOME: '/',
  SEARCH: '/search',
  CATEGORIES: '/categories'
};

export const WikiLinks: TLinks = {
  VBA: 'https://en.wikipedia.org/wiki/Visual_Basic_for_Applications',
  DRY: 'https://en.wikipedia.org/wiki/Don%27t_repeat_yourself'
};

export const ReposLinks: TLinks = {
  APP_REPOSITORY: 'https://github.com/akzhar/vba-helpers',
  API_REPOSITORY: 'https://github.com/akzhar/vba-helpers-api'
};

export const ContactLinks: TLinks = {
  TELEGRAM: 'https://t.me/akzhario'
};

export const HelperLinks: TLinks = {
  CODE: 'https://github.com/akzhar/vba-helpers-api/blob/main/data/code',
  FILE: 'https://github.com/akzhar/vba-helpers-api/raw/main/data/code',
  DEMO: 'https://github.com/akzhar/vba-helpers-api/raw/main/data/demo'
};
