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
    set appetizers(appetizers){
        return this._courses.appetizers = appetizers;
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
        };
    }
addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
        dishName;
        dishPrice;
    };
    this._courses[courseName].push(dish)
}
};
