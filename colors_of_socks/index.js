//==============================================================================

function colors_of_socks(inpAr) {

  if (inpAr.length > 100) {
    console.error("No arrays larger than 100");
    return -1;
  }

  let shadow = new Array(inpAr.length).fill(0);

//------------------------------Fill The Shadow---------------------------------
  for (let i = 0; i < inpAr.length; i++) {
    if (inpAr[i] > 100) {
      console.error("No nums higher than 100");
      return -1;
    }
    shadow[inpAr[i]]++;
  }
  console.log("shadow", shadow)
//------------------------------------------------------------------------------

  let pairs = [];

  for (let k = 0; k < shadow.length; k++) {
    let position;
    let mod;
    if ( (shadow[k] != undefined) ) {
      position = k; 
      mod = shadow[k] / 2;
      pairs.push({color: position, numPairs: mod})
    }
  }

  return pairs;

}

//==============================================================================
//----------------------------------_T_E_S_T_-----------------------------------
//==============================================================================
let n = 7;
let ar = [1,2,1,2,1,3,2];

let testArr = [9,10,20,20,10,10,30,50,10, 20];

console.log(colors_of_socks(ar));

//==============================================================================
