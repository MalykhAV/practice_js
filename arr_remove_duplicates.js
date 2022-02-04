function removeDuplicates(num) {
  let result = 1; //length should be at least one
  let goodLength = num.length;
  for(let i= 0; i < goodLength-1; i++){
    if(num[i]!= num[i+1]){
      result += 1;
    }
    else {
      let repeatedItem = num.splice([i+1],1);
      num.push(repeatedItem);
      i--;
      goodLength -= 1; 
      console.log(num);
    }
  }
  return result;
}
let num = [-1,0,0,0,0,3,3];
console.log(removeDuplicates(num));