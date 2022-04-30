import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

import { Product } from './product.model';

const products = [
    { title: 'a carpet', price: 29.99 },
    { title: 'A book', price: 10.99 }
];

const newProd = new Product('', -7);

validate(newProd).then(errors => {
    if (errors.length > 0) {
        console.log('validation errors');
        console.log(errors);
    } else {
        console.log(newProd.getInformation());
    }
});

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}