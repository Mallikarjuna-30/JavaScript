// Arrays

const myArr=[2334,1,2,3,4,5,true,"mallu"]
// console.log(myArr[0]);

// const myHeros=["Ironman", "SpiderMan"]


// Array Methods
// myArr.push(6)
// myArr.pop()
//  myArr.unshift(1)
//  myArr.shift()
//  console.log(myArr.pop());
 
// console.log(myArr.indexOf(5));
const newArr=myArr.join()
// console.log(newArr);

// console.log("A",myArr);
const myN1=myArr.slice(1,3)
// console.log(myN1);

const marvelHeros = ["Thor","ironman","spidey"]
const dc_Heros = ["superman","flash","batman"]
// marvelHeros.push(dc_Heros)
// console.log(marvelHeros);
// console.log(marvelHeros[3]);
const all= marvelHeros.concat(dc_Heros)
// console.log(all);
const all_heroes  = [...marvelHeros,...dc_Heros]
// console.log(all_heroes);
const array2=[1,2,3,[4,5,6],7,[8,9,[0,1]]]
const another_array=array2.flat(Infinity)
// console.log(another_array)

// console.log(Array.isArray('MAllu'))
// console.log(Array.from("AMllu"));
// console.log(Array.from({name:"MAllu"}))

console.log(Array.of(marvelHeros,dc_Heros))