class Stack{

    constructor(){
        this.count = 0;
        this.stackData = {};
    };

    push(element){
        console.log(`Added "${element}" on top of the stack.`);
        this.stackData[this.count] = element;
        this.count++;
    };
    
    pop(){
        if(this.count === 0){
            console.log("There's nothing in the stack.")
            return undefined;
        };
        this.count--;
        const result = this.stackData[this.count];
        delete this.stackData[this.count];
        console.log(`Deleted ${result}.`);
        return result;
    };

    size(){
        console.log(`The size of the stack is ${this.count}.`);
        return this.count;     
    };

    peek(){
        const topElement = this.stackData[this.count-1];
        console.log(`On top of the stack is ${topElement}.`);
        return topElement;
    };

    contains(element){
        for (let index in this.stackData) {
            if (this.stackData[index] === element){
                console.log("The element is present in the stack.")
                return true;
            }
        }
        console.log("The element is not in the stack.")
        return false;
    }

};
