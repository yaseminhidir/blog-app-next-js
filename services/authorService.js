import fs from "fs";

export default {
    getAuthors() {
        var authors = JSON.parse(fs.readFileSync('./data/authors.json', 'utf8'));
        return authors
    },
    getAuthorById(id) {
        var list = this.getAuthors();
        var author = list.filter(x => x.id== id)[0];
        return author
    },
    getAuthorByLink(link) {
        var list = this.getAuthors();
        var author = list.filter(x => x.link== link)[0];
        return author
    },
}