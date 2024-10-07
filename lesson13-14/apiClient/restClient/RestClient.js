import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    

/*
export default class RestClient {
  constructor(baseUrl = proces.env.URL || "https://demoqa.com") {
    this.baseUrl = baseUrl;
    this.axiosInstance = axios.create({baseURL: this.baseUrl, validateStatus: () => true});
  }
*/
const __dirname = dirname(fileURLToPath(import.meta.url));

const config = JSON.parse(fs.readFileSync(path.join(__dirname, `../config/config.${process.env.TEST_ENV || 'dev'}.json`)))

export default class RestClient {
  constructor(baseUrl = config.baseUrl) {
    this.baseUrl = baseUrl;
    this.axiosInstance = axios.create({baseURL: this.baseUrl, validateStatus: () => true});
  }


  async sendPost({url, headers, params, data, additionalConfigs}) {
    return this.#sendRequest({url, headers, params, data, additionalConfigs, method: 'POST'})
  }
  async sendGet({url, headers, params, additionalConfigs}) {
    return this.#sendRequest({url, headers, params, additionalConfigs, method: 'GET'})
  }
  async sendPut({url, headers, params, data, additionalConfigs}) {
    return this.#sendRequest({url, headers, params, data, additionalConfigs, method: 'PUT'})
  }
  async sendPatch({url, headers, params, data, additionalConfigs}) {
    return this.#sendRequest({url, headers, params, data, additionalConfigs, method: 'PATCH'})
  }
  async sendDelete({url, headers, params, additionalConfigs}) {
    return this.#sendRequest({url, headers, params, additionalConfigs, method: 'DELETE'})
  }

  async #sendRequest({url, method, headers, params, data, additionalConfigs}) {
    try {
      return this.axiosInstance.request({url, method, headers, params, data, ...additionalConfigs})
    } catch (err) {
      throw new Error(`Error occured on request to ${this.baseUrl}${this.url}. Error stack: ${err.stack}`);
    }
  }
}