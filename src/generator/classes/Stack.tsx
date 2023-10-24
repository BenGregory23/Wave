// Stack object

export default class Stack<T>{
    private items : T[] = []


    constructor(){
        this.items = []
    }

    public isEmpty(){
        if(this.items.length == 0){
            return true
        }
        else return false
    }

    public getSize(){
        return this.items.length;
    }

    // @ts-ignore
    public push(item){
        this.items.push(item)
    }

    public pop(){
        return this.items.pop()
    }
}