type TAppRoutes = { [key: string]: string };

type TContactLinks = { [key: string]: string };

type THelperLinks = { [key: string]: string };

export const AppRoutes: TAppRoutes = {
  HOME: '/',
  SEARCH: '/search'
};

export const ContactLinks: TContactLinks = {
  GITHUB: 'https://github.com/akzhar/vba-helpers',
  TELEGRAM: 'https://t.me/akzhario'
};

export const HelperLinks: THelperLinks = {
  VIEW: 'https://github.com/akzhar/vba-helpers-api/blob/main/data/code',
  RAW: 'https://github.com/akzhar/vba-helpers-api/raw/main/data/code'
};
