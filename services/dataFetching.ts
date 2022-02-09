import fs from 'fs'
import { BlogPostProps, ContactPageProps, HomePageProps, PortfolioItem } from '../interfaces/interfaces';

const readFile = async (path: string) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (error, data) => {
            if (error) {
                reject(error);
            }
            resolve(JSON.parse(data));
        });
    });
}

// get files in folder function

const getFilesInFolder: (folder: string) => Promise<string[]> = async (folder: string) => {

    return fs.readdirSync(folder)
}

interface Data { }

const fetchData: (pathName: string) => Promise<any> = async (pathName: string) => {
    return await readFile(pathName)
}

export const fetchHomePage: () => Promise<HomePageProps> = async () => {
    const pathName = './data/homePage.json'
    const settings = await readFile(pathName) as HomePageProps
    return settings
}


export const fetchContactPage: () => Promise<ContactPageProps> = async () => {
    const pathName = "./data/contactPage.json"
    const data = await readFile(pathName) as ContactPageProps
    return data
}

export const fetchBlogPost: (name: string) => Promise<BlogPostProps> = async (name: string) => {
    const baseUrl = "./data/blogs/"
    const pathName = baseUrl + name + ".json"
    return await readFile(pathName) as BlogPostProps
}

export const fetchBlogPostList: () => Promise<string[]> = async () => {
    const baseUrl = "./data/blogs/"
    return await getFilesInFolder(baseUrl)
}

export const fetchPortfolioItemList: () => Promise<string[]> = async () => {
    const baseUrl = "./data/portfolio/"
    return await getFilesInFolder(baseUrl)
}

export const fetchPortfolioItem: (name: string) => Promise<PortfolioItem> = async (name: string) => {
    const baseUrl = "./data/portfolio/"
    const pathName = baseUrl + name + ".json"
    return await readFile(pathName) as PortfolioItem
}

  // about page

  // portfolio page



  // blog page

  // individual blogs