class EventEmitter{
    constructor(){
        this.events={};
    }
// // Method to register an event listener with an optional priority

on(eventName,listener,priority=0){
    if(!this.events[eventName]){
        this.events[eventName]=[];
    }
    this.events[eventName].push({listener,priority});

    // Sort the listeners by priority in descending order (higher priority first)

    this.events[eventName].sort((a,b) => b.priority-a.priority);
}

// Method to deregister an event listener


off(eventName,listener){
    if(!this.events[eventName]) return;
    this.events[eventName]=this.events[eventName].filter((event)=>event.listener!== listener);
}

// Method to deregister an event listener

emit(eventName,...args){
    if(!this.events[eventName]) return;
    this.events[eventName].forEach((event)=> { event.listener(...args);
    });
}
}

// Example Usage with Priorities

const emitter=new EventEmitter();

function greet(name){
    console.log(`Hello ,${name}`);
}

function highPriorityGreet(name){
    console.log(`Important greeting for ${name}`);
}

// Register the events with different priorities
emitter.on('greet',greet);
emitter.on('greet',highPriorityGreet,1);

emitter.emit('greet','Alice');

// Output:
// Important greeting for Alice!
// Hello, Alice!