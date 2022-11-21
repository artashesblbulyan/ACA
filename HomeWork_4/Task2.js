// Task 2
// Given a word, create an object that stores the indexes of each letter in an array.
// ● Make sure the letters are the keys.
// ● Make sure the letters are symbols.
// ● Make sure the indexes are stored in an array and those arrays are values.
// Examples:
// mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }
// mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
// mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s:
// [5]}


function mapLetters(string){
    const result = {}
    let  index = []
    for(let i in string){
      if ( result[string[i]] !== undefined){
        result[string[i]].push(i)
      } else{
      result[string[i]]= [i]
    }
      
    }
    return result
}

console.log(mapLetters('asdasdk'))