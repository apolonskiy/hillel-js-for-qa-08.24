import RestClient from "../restClient/RestClient";

export default class Account extends RestClient {
  createdEntitiesIds = []  
  constructor(){
    // super('someBasrUrlSpecificForthisApi');
    super()
    this.url = '/Account/v1'
  }

  /*
    @param data = {
        "userName": "andrii_2",
        "password": "TestPass1!"
    }
    */
  async createUser(data, headers) {
    const resp = await this.sendPost({url: `${this.url}/User`, data, headers});
    if(resp.status === 201) {
      this.createdEntitiesIds.push({userId: resp.data.userID, userPayload: data})
    }
    return resp
  }

  /*
    @param data = {
        "userName": "andrii_2",
        "password": "TestPass1!"
    }
    */
  async generateToken(data, headers) {
    return this.sendPost({url: `${this.url}/GenerateToken`, data, headers});
  }


  /*
    @param data = {
        "userName": "andrii_2",
        "password": "TestPass1!"
    }
    */
  async isAuthorized(data, headers) {
    return this.sendPost({url: `${this.url}/Authorized`, data, headers});
  }

  async deleteUser(userId, headers) {
    return this.sendDelete({url: `${this.url}/User/${userId}`, headers});
  }

  async getUserById(userId, headers) {
    return this.sendGet({url: `${this.url}/User/${userId}`, headers});
  }

  async cleanUp() {
    for await(const {userPayload, userId} of this.createdEntitiesIds){
      const respToken = await this.generateToken(userPayload);
      await this.deleteUser(userId, {Authorization: `Bearer ${respToken?.data?.token}`})
    }
  }
}