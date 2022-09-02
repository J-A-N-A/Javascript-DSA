class Stack{
    constructor()
    {
        this.arr=[]
    }
    Push(val){
        this.arr.push(val)
    }
    Pop(){
        this.arr.pop()
    }
}

var st=new Stack()

st.Push(2)
st.Push(4)//Stack { arr: [ 2, 4 ] }
st.Pop()  //Stack { arr: [ 2] }
console.log(st)
