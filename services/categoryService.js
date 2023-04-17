import fs from "fs";

export default {
    getCategories() {
        var categories = JSON.parse(fs.readFileSync('./data/categories.json', 'utf8'));
        return categories
    },
    getCategoryById(id){
        var categories=this.getCategories();
        var category=categories.filter(x=>x.id===id);
        return category
    }

}