import fs from 'fs'
import { ContactPageProps, HomePageProps } from '../interfaces/interfaces';

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

interface Data {}

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

  // about page

  // portfolio page

  // contact page

  // blog page

  // individual blogs