function greet(){
    console.log(' greetings ')
}
greet()

function greetargs(name){
    console.log(name, ' welcome to js')
}
greetargs('ravi')

function add(n1,n2){
    return n1+n2
}
result = add(100,200)
console.log("result of addition is ".res)
console.log('function without name')
subtract = function(n1,n2){
    return n1-n2
}
result = subtract(150,100)
console.log("result of subtraction is ",result)
console.log('arrow function')
multiplyarrow = (n1,n2)=>n1*n2
result = multiplyarrow(10,20)
console.log("result of muliplication ",result)