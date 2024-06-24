const object = {
    door: 4,
    car: function() {
        return "car noise is too loud";
    }
};

console.log(object.car());

const innova = Object.create(object);
innova.color = "white";
innova.sample = function() {
    return "innova sound is very low";
};

console.log(innova.color);
console.log(innova.sample());

const tesla = Object.create(innova);
tesla.rate = "50,000,00";
tesla.high = function() {
    return this.color + " no sound and high efficiency"; 
};

console.log(tesla.high());
console.log(tesla.color); 
console.log(tesla.door); 