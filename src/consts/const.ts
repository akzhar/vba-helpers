/* eslint-disable max-len */
type TLinks = { [key: string]: string };

export const AppRoutes: TLinks = {
  HOME: '/',
  CATEGORIES: '/categories',
  SEARCH: '/search',
  SEARCH_HELPER: '/search-from-excel'
};

export const WikiLinks: TLinks = {
  VBA: 'https://en.wikipedia.org/wiki/Visual_Basic_for_Applications',
  DRY: 'https://en.wikipedia.org/wiki/Don%27t_repeat_yourself',
  CLI: 'https://en.wikipedia.org/wiki/Command-line_interface'
};

export const DocsLinks: TLinks = {
  EXCEL_VBA_API: 'https://learn.microsoft.com/en-us/office/vba/api/overview/excel',
  PERSONAL_XLSB: 'https://support.microsoft.com/en-us/office/create-and-save-all-your-macros-in-a-single-workbook-66c97ab3-11c2-44db-b021-ae005a9bc790',
  IMMEDIATE_WINDOW: 'https://learn.microsoft.com/en-us/office/vba/language/reference/user-interface-help/use-the-immediate-window',
  TRUST_ACCESS_VBOM: 'https://support.microsoft.com/en-gb/topic/programmatic-access-to-office-vba-project-is-denied-960d5265-6592-9400-31bc-b2ddfb94b445#ID0EDBBD'
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
