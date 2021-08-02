class Sentence
{
    constructor(plainText)
    {
        this.plainText = plainText;
        this.words = plainText.split(' ').map(word => { return { word, capitalize: false }});
    }

    at(index)
    {
        return this.words[index];
    }

    toString()
    {
        let result = this.words.map(word => {
            if (word.capitalize) {
                return word.word.toUpperCase();
            }

            return word.word;
        });

        return result.join(' ');
    }
}