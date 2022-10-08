// var Foo = (function () {

//     var ctor = function (name) {
//         // the constructor
//         this.name = name
//     };

//     ctor.staticMethod = function () {
//         // something static
//         console.log("hello rasel")
//     };

//     return ctor;
// })();

// const obj = new Foo("Rasel")
// console.log(obj)


// const Foo = (function () {
//     var constructor = (name) => {
//         this.name = name
//     }

//     constructor.staticMember = () => {
//         console.log(this.name)
//     }
//     return constructor
// })()
// const obj = new Foo()
// console.log(obj)

// const Foo = (() => {
//     const constructor = function (name) {
//         this.name = name
//     }
//     constructor.staticMethod = () => {
//         console.log("hello i am static method")
//     }

//     return constructor;
// })()

// const obj = new Foo("Rasel")
// console.log(obj)

// Foo.staticMethod()

const CustomClass = (() => {
    function constructor(name) {
        this.name = name
    }

    constructor.staticMember = () => {
        console.log("Hi, i am static method")
    }

    return constructor;
})()

const testObj = new CustomClass("Rasel")
console.log(testObj)
CustomClass.staticMember()
