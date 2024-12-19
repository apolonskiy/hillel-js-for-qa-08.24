import { request as apiRequest } from '@playwright/test'

export default class BaseApiClient {
  #isRequestReplaced = false
  /**
   * @param {import('@playwright/test').request} request
   * @param {import('@playwright/test').context} context
   * @param {import('@playwright/test').baseURL} baseUrl
   */
  constructor(request, context,baseUrl){
    this.request = request;
    this.context = context;
    this.baseUrl = baseUrl;
  }

  async #replaceRequestIfContextClosed() {
    const pages = await this.context.pages();
    if(!pages.length && !this.#isRequestReplaced){
      this.request  = await apiRequest.newContext();
      this.#isRequestReplaced = true;
    }
  }

  async getAuthHeaders() {
    await this.#replaceRequestIfContextClosed()
    if(!this.headers){
      if(this.context) {
        const cookies = await this.context.cookies();
        const cookiesParsed = cookies.reduce((acc, curr) => `${acc}${curr.name}=${curr.value}; `, '');
        this.headers = { cookies: cookiesParsed };
      } else {
        //sing in via api and store it into headers similar way
      }

    }
  }
}