function App() { // function declaration

}
const App2 = function(){ // function expression
  this.name = "Ivan"

  this.getName = () => {
    return this.name
  }
}

const App3 = (a, b) => { // arrow function expression

  return a + b
}

console.log(App3(2,5))

const sum = (a,b) => a + b

console.log(sum(3,5))
const sumClojure = (a) => (b) => a + b

const sumClojure2 = (a) => {
  return (b) => {
    return a + b
  }
}

const app = new App2()

app.getName()


const object = {name: "Ivan", setName: (text) => this.name = text}
//object = {age: 22}
object.name = "Vasya"

const {name, setName} = object // const name = object.name

{

  var printName = () => {
    console.log('...')
  }



}

printName()
