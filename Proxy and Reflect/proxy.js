//1. Use the proxy object to create a simple data validator that logs any changes to an object.
//2. Extend the validator to enforce certain rules (e.g. no negative values for numeric properties.)

const user={
    name:'Alice',
    age:'30',
};

// Proxy for validation
const userValidator= new Proxy(user,{
      // Intercept setting properties
    set(target,property,value){
        if(typeof value== 'number' && value<0){
            console.error(` Error: Cannot set ${property} to a negative value`);
            return false;
        }

       target[property]=value; 
       return true;
    },

    // Intercept getting properties
    get(target,property){
        console.log(`${property} set to new value`);
        return target[property];
    },
});

// Example usage with rules enforced
userValidator.age = 40; // Logs: Setting age to 30
console.log(userValidator.age); // Logs: Getting the value of age

userValidator.age = -5; // Logs: Error: Cannot set age to a negative value
console.log(userValidator.age); // Logs: Getting the value of age (still 30)
