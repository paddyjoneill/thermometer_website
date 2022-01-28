import fs from 'fs'
import { HomePageProps } from '../interfaces/interfaces';

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

export const fetchHomePage: () => Promise<HomePageProps> = async () => {
    const pathName = './data/homePage.json'
    const settings = await readFile(pathName) as HomePageProps
    return settings
  }

  // about page

  // portfolio page

  // contact page

  // blog page

  // individual blogs