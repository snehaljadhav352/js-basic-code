
const myNums = [1,2,3,2,3,4,5,6,6,7,6,5]

const duplicates = myNums.filter((num,i)=> myNums.indexOf(num)!== i)

console.log(duplicates)






// console.log([...new Set(duplicates)])

//****************************************************************************************************************************** */
const array = [1,[2,[3],4,5]] 
// console.log(array.flat(2))

function flattenArr(arr){
   return arr.reduce((acc,cur)=>{
    console.log("cur",cur);
     return Array.isArray(cur)?acc.concat(flattenArr(cur)):acc.concat(cur)
   },[]);

}
// console.log(flattenArr(array))

