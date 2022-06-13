// Stack:
const Stack = [];
const size = 3;

const push = (value) => {
    if (Stack.length < size) {
        Stack.push(value);
        return Stack;
    }
    return 'Stack is full ==> stackoverflow';
}

const pop = () => {
    if (Stack.length > 0) {
        return Stack.pop();
    }
    return 'Stack is empty ==> underflow';
}

const peek = () => {
    if (Stack.length > 0) {
        return Stack[Stack.length - 1];
    }
    return 'Stack is empty ==> underflow';
}

push(1);
console.log(Stack);
push(2);
console.log(Stack);
push(3);
console.log(Stack);
console.log(peek());
push(4);
console.log(Stack);
pop();
console.log(Stack);
pop();
console.log(Stack);
pop();
console.log(Stack);
pop();
console.log(Stack);
