//==============================================================================
//-------------Function returns number of pairs of socks per color--------------
//==============================================================================

function colors_of_socks(inpAr) {

  if (inpAr.length > 100) {
    console.error("No arrays larger than 100");
    return -1;
  }

  let max = Math.max(...inpAr) + 1;

  let shadow = new Array(max).fill(0);

//------------------------------Fill The Shadow---------------------------------
  for (let i = 0; i < inpAr.length; i++) {
    if (inpAr[i] > 100) {
      console.error("No nums higher than 100");
      return -1;
    }
    shadow[inpAr[i]]++;
  }
//------------------------------------------------------------------------------

  let pairs = [];
  let pairCount = 0;

  for (let k = 0; k < shadow.length; k++) {
    let position;
    let mod;
    if ( (shadow[k] != undefined) ) {
      position = k;
      mod = shadow[k] / 2;
      pairs.push({color: position, numPairs: mod});
      let temp = Math.floor(mod % 2);
      pairCount += temp;
    }
  }

  console.log("entire aray: ", pairs);
  return pairCount;

}

//==============================================================================
//----------------------------------_T_E_S_T_-----------------------------------
//==============================================================================
let n = 7;
let ar = [1,2,1,2,1,3,2];
let ar2 = [5,7,3,5,3,6,7,8,9,3];
let ar3 = [5,7,3,5,3,6,7,8,9,3];

console.log("=============");
console.log(colors_of_socks(ar));
console.log("=============");
console.log(colors_of_socks(ar2));
console.log("=============");
console.log(colors_of_socks(ar3));
console.log("=============");


//==============================================================================
