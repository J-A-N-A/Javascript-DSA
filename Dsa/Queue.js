class Queue{
    constructor(){
        this.arr=[]
    }
    enqueue(val){
        this.arr.push(val)
    }
    dequeue(){
        this.arr.shift()
    }
}

var Q=new Queue()
Q.enqueue(1)  //here Queue { arr: [ 1 ] }
Q.dequeue()  //here Queue { arr: [] }
console.log(Q) 
