import {RestfulApiObjects} from "../apiClient";

let restfulApiObjects;
describe('RestfulApi test scenarios', () => {
    beforeAll(async() => {
        restfulApiObjects = new RestfulApiObjects();
    });
    beforeEach(async() => {
        console.log('Test Started /// Place for login')
    });
    afterEach(async() => {
        console.log('Test Finished /// Place for cleanup if needed');
    });
    afterAll(async() => {
        await restfulApiObjects.cleanUp();
    });

    test('Get all objects', async() => {
        const resp = await restfulApiObjects.getAllObjects();
        expect(resp.status).toEqual(200);
        resp.data.forEach(obj => {
            expect(obj.id).not.toBeUndefined()
        })
    })

    test('Create out object', async() => {
        const payload = {
            name: "Apple MacBook Pro 16",
            data: {
                year: 2019,
                price: 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        }
        const resp = await restfulApiObjects.createObject(payload);
        expect(resp.status).toEqual(200);
        expect(resp.data.name).toEqual(payload.name);
        expect(resp.data.data.year).toEqual(payload.data.year);
        expect(resp.data.data.price).toEqual(payload.data.price);
        expect(resp.data.data["CPU model"]).toEqual(payload.data["CPU model"]);
        expect(resp.data.data["Hard disk size"]).toEqual(payload.data["Hard disk size"]);
    })
})