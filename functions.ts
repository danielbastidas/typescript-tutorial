// showing how to work with rest parameters in functions
function getNumbers(...numbers: number[]) {
	numbers.forEach(num => console.log(num))
}

getNumbers(1, 2, 3, 4)

function defaultParameter(param: String = "default value") {
	console.log(param)
}

defaultParameter()
defaultParameter('with value')

// Arrow functions allows type definition in the parameters too

let myArrowFunc = (param1: String, param2: Number) => console.log(`param1:${param1} param2:${param2}`)

myArrowFunc('a', 1)

