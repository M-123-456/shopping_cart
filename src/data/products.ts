import { IProduct } from '../types/products/IProduct';
import lamp from '../assets/images/lamp.jpg';
import speaker from '../assets/images/speaker.jpg';


export const products: IProduct[] = [
    {
        id: '12345',
        name: 'The book of dogs',
        description: 'DVD',
        price: 16.99,
        quantity: 10,
        image: "https://source.unsplash.com/oU6KZTXhuvk",
    },
    {
        id: '65487',
        name: 'Great Sound Speaker',
        description: 'Speaker',
        price: 21.99,
        quantity: 3,
        image: "https://source.unsplash.com/u8-QI4tRES0",
    },
    {
        id: '54879',
        name: 'The Lamp of the good old days',
        description: 'interior',
        price: 10.99,
        quantity: 5,
        image: "https://source.unsplash.com/BCNO7JuNi1w",
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