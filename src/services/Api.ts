export type TCategory = {
  id: string,
  category: string,
  helpersCount: number,
  keywords: string[]
}

export type THelper = {
  id: string,
  category: string[],
  name: string,
  title: string,
  _keywords: string,
  description: string,
  usage: string,
  file: string
}

class Api {

  static _instance: Api
  baseUrl!: string

  constructor() {
    if (!Api._instance) {
      Api._instance = this;
    }
    Api._instance.baseUrl = 'https://vba-helpers-api.herokuapp.com/api';
    return Api._instance;
  }

  static getInstance() {
    return this._instance;
  }

  async getCategories(): Promise<TCategory[]> {
    const that = Api.getInstance();
    const res = await fetch(`${that.baseUrl}/categories`);
    const categories = await res.json();
    return categories;
  }

  async getHelpersByTitle(title: string): Promise<THelper[]> {
    const that = Api.getInstance();
    const res = await fetch(`${that.baseUrl}/helpers/search-by-title/${title}`);
    const helpers = await res.json();
    return helpers;
  }

  async getHelpersByCategory(category: string): Promise<THelper[]> {
    const that = Api.getInstance();
    const res = await fetch(`${that.baseUrl}/helpers/search-by-category/${category}`);
    const helpers = await res.json();
    return helpers;
  }

  async getHelpersByKeyword(keyword: string): Promise<THelper[]> {
    const that = Api.getInstance();
    const res = await fetch(`${that.baseUrl}/helpers/search-by-keyword/${keyword}`);
    const helpers = await res.json();
    return helpers;
  }

  async getHelpersByName(name: string): Promise<THelper[]> {
    const that = Api.getInstance();
    const res = await fetch(`${that.baseUrl}/helpers/search-by-name/${name}`);
    const helpers = await res.json();
    return helpers;
  }

  async getHelpersById(id: string): Promise<THelper[]> {
    const that = Api.getInstance();
    const res = await fetch(`${that.baseUrl}/helpers/${id}`);
    const helpers = await res.json();
    return helpers;
  }

}

export default Api;
