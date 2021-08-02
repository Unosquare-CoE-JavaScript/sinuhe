class CodeBuilder {
    constructor(className) {
        this.myClass = new ClassModel(className);
    }

    addField(fieldName) {
        this.myClass.fields.push(fieldName);
        return this;
    }

    toString() {
        let output = [];
        output.push(`class ${this.myClass.name} {\n`);
        output.push(`  constructor(${this.myClass.fields.join(', ')}) {\n`);
        this.myClass.fields.forEach(field => output.push(`    this.${field} = ${field};\n`));
        output.push(`  }\n`);
        output.push(`}`);

        return output.join(' ');
    }

    build() {
        return this.myClass;
    }
}

class ClassModel {
    constructor(name) {
        this.name = name;
        this.fields = [];
    }
}

let codeBuilder = new CodeBuilder('Persona');
codeBuilder.addField('name').addField('age')
console.log(codeBuilder.toString());
