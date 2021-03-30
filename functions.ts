// showing how to work with rest parameters in functions
function getNumbers(...numbers: number[]) {
	numbers.forEach(num => console.log(num) )
}

getNumbers(1,2,3,4)

