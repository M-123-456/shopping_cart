import { IProduct } from '../types/products/IProduct';
import jurassicWorld from '../assets/images/jurassic-world.jpg';
import lamp from '../assets/images/lamp.jpg';
import speaker from '../assets/images/speaker.jpg';


export const products: IProduct[] = [
    {
        id: '12345',
        name: 'Jurassic World: Ein neues Zeitalter',
        description: 'DVD',
        price: 16.99,
        quantity: 10,
        image: `${jurassicWorld}`,
    },
    {
        id: '65487',
        name: 'LENRUE A15 Bluetooth Speaker',
        description: 'Speaker',
        price: 21.99,
        quantity: 3,
        image: `${speaker}`,
    },
    {
        id: '54879',
        name: 'Dansi 44001 LED Bicycle Battery Light Set',
        description: 'Bike lamp',
        price: 10.99,
        quantity: 5,
        image: `${lamp}`,
    },
];

export const getProducts = (): IProduct[] => {
    return products;
}

export const getProductById = (id: string | undefined): IProduct | undefined => {
    return products.find(item => item.id === id);
}

export const getProductsByKeyword = (words: string): IProduct[] => {
    let result:IProduct[] = [];

    products.forEach(article => {
        const textsToSearch = `${article.name.toLowerCase()}${article.description.toLowerCase}`;
        
        if(textsToSearch.includes(words.toLowerCase())) {
            const articleDetail = getProductById(article.id)
            if(articleDetail) {
                result.push(articleDetail)
            }
        } 
    })
    return result;
}