let Color = Object.freeze({
    red: 'red',
    green: 'green',
    blue: 'blue'
});

let Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large'
});

class Product {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

class ProductFilter {
    filterByColor(products, color) {
        return products.filter(p => p.color === color);
    }

    filterBySize(products, size) {
        return products.filter(p => p.color === color);
    }

    filterBySizeAndColor(products, size, color) {
        return products.filter(p => p.color === color && p.size === size);
    }

    // state space explosion

}

class ColorSpecification {
    constructor(color) {
        this.color = color;
    }

    isSatisfied(item) {
        return item.color === this.color;
    }
}

class BetterFilter {
    filter(items, spec) {
        return items.filter(element => spec.isSatisfied(element))
    }
}

class SizeSpecification {
    constructor(size) {
        this.size = size;
    }

    isSatisfied(item) {
        return item.size === this.size;
    }
}

class AndSpeciFication {
    constructor(...specs) {
        this.specs = specs;
    }

    isSatisfied(item) {
        return this.specs.every(spec => spec.isSatisfied(item));
    }
}

let apple = new Product('Apple', Color.green, Size.small);
let tree = new Product('Tree', Color.green, Size.large);
let house = new Product('House', Color.blue, Size.large);

let products = [apple, tree, house];

let pf = new ProductFilter();
console.log('Green products (old way):');
for (let product of pf.filterByColor(products, Color.green)) {
    console.log(`  * ${product.name} is green`);
}

let betterFilter = new BetterFilter();
console.log('Green products (new)');
for (let product of betterFilter.filter(products, new ColorSpecification(Color.green))) {
    console.log(` * ${product.name} is green`);
}

console.log('Large and green products');
let spec = new AndSpeciFication(
    new ColorSpecification(Color.green),
    new SizeSpecification(Size.large)
);

for (let product of betterFilter.filter(products, spec)) {
    console.log(` * ${product.name} is large and green`);
}