import RestClient from "../restClient/RestClient";



export default class RestfulApi extends RestClient{
    constructor(){
        super()
        this.serviceUrl = '/objects'
    }

    createdObjectIds = [];

    async getAllObjects(){
        return this.sendGet({url: this.serviceUrl})
    }

    async getObjectsById(ids){
        const idsString = ids.reduce((acc, curr) => acc.concat(`id=${curr}&`), '?')
        return this.sendGet({url: `${this.serviceUrll}${idsString}`})
    }

    async getObjectById(id){
        return this.sendGet({url: `${this.serviceUrll}/${id}`})
    }

    /*
    @param payload = {
        "name": "Apple MacBook Pro 16",
        "data": {
            "year": 2019,
            "price": 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
        }
    }
    */
    async createObject(payload){
        const response = await this.sendPost({url: this.serviceUrl, data: payload});
        this.createdObjectIds.push(response.data.id);
        return response
    }

    /*
        @param payload = {
        "name": "Apple MacBook Pro 16",
        "data": {
            "year": 2019,
            "price": 1849.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB"
        }
    }
    */
    async  updateObject(payload){
        return this.sendPut({url: this.serviceUrl, data: payload})
    }

    async deleteObject(id){
        return this.sendDelete({url: `${this.serviceUrl}/${id}`})
    }

    async cleanUp(){
        const ids = [...this.createdObjectIds];
        for await(const id of ids){
            try{
                await this.deleteObject(id);
                console.log(`Removed object with ID ${id}`)
            } catch (err){
                console.error(`Could not delete object with ID ${id}, ${err.stack}`);
            }
        }
    }
}