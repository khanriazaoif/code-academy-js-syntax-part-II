debugger;
const menu = {
    _courses:{
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers(){
        return this._courses.appetizers;
    },
    get mains(){
        return this._courses.mains;
    },
    get desserts(){
        return this._courses.desserts;
    },
    set appetizers(appetizers){//appetizerIN
        return this._courses.appetizers = appetizers;//appetizerIN
    },
    set mains(mains){
        return this._courses.mains = mains;
    },
    set desserts(desserts){
        return this._courses.desserts = desserts;
    },
    get courses(){
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        }
   
    },
    addDishToCourse(courseName, dishName, dishPrice){
        const dish = {
            name: dishName,
            price: dishPrice,
        }
        return this._courses[courseName].push(dish)    
    },

    getRandomDishFromCourse(courseName){
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;

        return `Your meal starts with an appetizer of ${appetizer.name}, followed by a lovely main meal of ${main.name}, and last but not least, we follow up with the always amazing dessert of ${dessert.name}, The price is $${totalPrice}.`
    },
    
};

menu.addDishToCourse('appetizers', 'enchalado', 4.25);
menu.addDishToCourse('appetizers', 'salad', 4.25);
menu.addDishToCourse('appetizers', 'wings', 6.25);

menu.addDishToCourse('mains', 'ribs', 13.25);
menu.addDishToCourse('mains', 'steak', 3.25);
menu.addDishToCourse('mains', 'chicken', 7.25);

menu.addDishToCourse('desserts', 'cake', 6.25);
menu.addDishToCourse('desserts', `ice-cream`, 4.50);
menu.addDishToCourse('desserts', 'cookies', 6.25);



const meal = menu.generateRandomMeal();
console.log(meal);

