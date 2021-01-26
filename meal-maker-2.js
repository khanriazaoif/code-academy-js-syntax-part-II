const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],

    },

    get appetizers() {

    },
    get mains() {

    },
    get desserts() {

    },
    set appetizers(appetizerIn) {

    },
    set mains(mainIn) {

    },
    set desserts(dessertIn) {

    },
    get courses() {
        return{
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        }
    },


}


