import * as path from 'path'

export default class BasePage {
    constructor(page, context){
        this.page = page;
        this.context = context;
        this.baseUrl = 'https://staging-bpm-colab.vercel.app'
    }

    getDataFolderPath(subPath){
        return path.join(__dirname, '../data', subPath)
    }
}