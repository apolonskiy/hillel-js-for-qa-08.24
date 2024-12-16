export default class BaseApiClient {
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

  async getAuthHeaders() {
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