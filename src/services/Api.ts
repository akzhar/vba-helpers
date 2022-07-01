export type TCategory = {
  id: string,
  category: string
}

class Api {

  static _instance: Api
  baseUrl: string

  constructor() {
    if (!Api._instance) {
      Api._instance = this;
    }
    this.baseUrl = 'https://vba-helpers-api.herokuapp.com/api';
    return Api._instance;
  }

  static getInstance() {
    return this._instance;
  }

  getByCategoryLink(category: string) {
    return `${this.baseUrl}/helpers/search-by-category/${category}`;
  }

  async getCategories(): Promise<TCategory[]> {
      const res = await fetch(`${this.baseUrl}/categories`);
      const categories = await res.json();
      return categories;
  }

}

export default Api;
