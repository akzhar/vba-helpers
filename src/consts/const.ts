type TAppRoutes = { [key: string]: string };

type TCodeLinks = { [key: string]: string };

export const AppRoutes: TAppRoutes = {
  CATEGORIES: '/',
  SEARCH: '/search',
  ABOUT: '/about'
};

export const CodeLinks: TCodeLinks = {
  DOWNLOAD: 'https://raw.githubusercontent.com/akzhar/vba-helpers-api/main/data/code',
  VIEW: 'https://github.com/akzhar/vba-helpers-api/blob/main/data/code'
};
