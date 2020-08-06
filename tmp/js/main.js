// const deleteDuplicateLetter = str => str.toLowerCase().split('').reduce((acc, curr, i, arr) => {
//   const isLetterDuplicated = arr.slice(0, i).includes(curr) && arr.slice(i).includes(curr);
  
//   return isLetterDuplicated ?
//     acc
//       .split('')
//       .filter(item => item !== curr)
//       .join('') :
//     acc + curr;
// }, '');
// console.log(deleteDuplicateLetter("аабвг абва"));

const getModa = (arr) => {
  const duplicatesMap = arr.reduce((acc, current) => {
    if(acc[current] !== undefined) return acc;

    const duplicatesCount = arr.filter(el => el === current).length;
  
    return {
      ...acc,
      [current]: duplicatesCount
    }
  }, {});
  
  let moda, max = 0;
  Object.keys(duplicatesMap).forEach(key => {
    const count = duplicatesMap[key];
    
    if(count > max) {
      moda = Number(key);
      max = count
    }
  })
  
  return moda;
}


const arr = [6, 2, 11, 11, 78, 2, 55, 11, 57, 11, 23, 2, 56, 3, 2];
console.log(getModa(arr))