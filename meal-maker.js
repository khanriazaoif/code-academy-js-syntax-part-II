const menu = {
    _courses:{
        appetizers: [],
        mains: [],
        desserts: [],
        get courses(){
            return {
                appetizers: this.appetizers,
                mains: this.mains,
                desserts: this.desserts,
            }
        }
    },
    get appetizers(){
        return this._courses;
    },
    set appetizers(appetizerIn){
        return this._courses;
    },
    get mains(){
        return this._courses;
    },
    set mains(mainIn){
        return this._courses
    },
    get desserts(){
        return this._courses;
    },
    set desserts(dessertIn){
        return this._courses
    },

};
