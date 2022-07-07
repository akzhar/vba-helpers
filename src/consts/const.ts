type TAppRoutes = { [key: string]: string };

type TCodeLinks = { [key: string]: string };

type TContactLinks = { [key: string]: string };

export const AppRoutes: TAppRoutes = {
  CATEGORIES: '/',
  SEARCH: '/search',
  ABOUT: '/about'
};

export const CodeLinks: TCodeLinks = {
  DOWNLOAD: 'https://raw.githubusercontent.com/akzhar/vba-helpers-api/main/data/code',
  VIEW: 'https://github.com/akzhar/vba-helpers-api/blob/main/data/code'
};

export const ContactLinks: TContactLinks = {
  GITHUB: 'https://github.com/akzhar/vba-helpers',
  TELEGRAM: 'https://t.me/akzhario'
}
