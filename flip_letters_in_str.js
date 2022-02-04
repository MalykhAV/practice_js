// Flips each set of two letters, then flips the first and last letters
function scramble(text) {
    let arr = [];
   
    let newArr = [];
    for(i = 0; i < text.length; i+=2) {
      arr[i] = text[i];
      if(i+2 < text.length || i !== text.length-1){
        console.log(arr);
        let item = arr[i];
        arr[i] = text[i+1];
        arr[i+1] = item;
        console.log(arr);
      }
      else{
        break;
      }
    }
    console.log(arr);
    let lastItem = arr[arr.length -1];
    console.log(lastItem);
    arr[arr.length -1] = arr[0];
    arr[0] = lastItem;
    console.log(arr);
  }
  
  console.log(scramble("abcd")); // badc -> cadb
  
  
  console.log(scramble("Llama")); // -> lLmaa -> aLmal