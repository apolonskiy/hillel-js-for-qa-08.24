import BaseApiClient from './BaseApiClient'

export default class CarsApi extends BaseApiClient {

  constructor(request,context, baseUrl){
    super(request, context, baseUrl);
    this.apiPath = '/api/cars';
  }

  // async getCars(sessionCookies) {
  //   await this.getAuthHeaders();
  //   return this.request.get(`${this.baseUrl}${this.apiPath}`, { headers: {cookie: sessionCookies} })
  // }

  async getCars() {
    await this.getAuthHeaders();
    return this.request.get(`${this.baseUrl}${this.apiPath}`, { headers: this.headers })
  }


  async deleteCar(id) {
    await this.getAuthHeaders();
    return this.request.delete(`${this.baseUrl}${this.apiPath}/${id}`, { headers: this.headers })
  }

  async getCarBrands() {
    await this.getAuthHeaders();
    return this.request.get(`${this.baseUrl}${this.apiPath}/brands`, { headers: this.headers })
  }


  async getCarModel(brandId) {
    await this.getAuthHeaders();
    return this.request.get(`${this.baseUrl}${this.apiPath}/models`, { headers: this.headers, params: { carBrandId: brandId } })
  }

  async addCar({ brand, model, mileage }) {
    await this.getAuthHeaders();
    const carBrandsResp = await this.getCarBrands();
    const carBrandData = (await carBrandsResp.json()).data.find(({ title }) => title === brand);
    const carModelResp = await this.getCarModel(carBrandData.id);
    const carModelData =  (await carModelResp.json()).data.find(({ title }) => title === model);
    return this.request.post(`${this.baseUrl}${this.apiPath}`, { data: { carBrandId: carBrandData.id, carModelId: carModelData.id, mileage },headers: this.headers })
  }
}