/*ASsignment
Question 2:Multi dimensional Arrays
var arr = [[1, 2, 3],
           [4, 5, 6],7,8,9,
           [[10, 11, 12, [13, 4, 112]], 136, 14],];
 *print out these numbers (10,8,13,136 and 4)from the array provided above*/
  /*         var arr = [
               [1 ,2, 3],
               [4, 5, 6], 7, 8, 9,
               [[10,11,12,[13,4,112]], 136,14,]
       ];
for (let i = 0; i < arr.length; i++){
     var arr = arr[i];
     for( let j = 0; j < arr.length; j++){
         console.log("arr[" + i + "] ["+ j + "] = " + arr[j]);
     }
}

var arr = [
    [1 ,2, 3],
    [4, 5, 6], 7, 8, 9,
    [[10,11,12,[13,4,112]], 136,14,]
];
 for (let i = 0; i < arr.length; i++){
var arr = arr[i];
for( let j = 0; j < arr.length; j++){
console.log("arr[" + i + "] ["+ j + "] = " + arr[j]);
}
}*/
 /*for(let i = 0; i < arr.length; i++){
     var arr = arr[i];
     console.log(i)
     /*for(j=0; j<arr[i].length; j++){
         console.log(j)
     }
     for(let j = 0; j<arr.length; j++){
         console.log(j)
     }
 }

 var arr = [
    [1 ,2, 3],
    [4, 5, 6], 7, 8, 9,
    [[10,11,12,[13,4,112]], 136,14,]
];
for (let i = 0; i < arr.length; i++){
    for(j=0; j<arr[i].length; j++){
        console.log(arr[i][j])
    }
}

var arr = [
    [1 ,2, 3],
    [4, 5, 6], 7, 8, 9,
    [[10,11,12,[13,4,112]], 136,14,]
];
for (let i = 0; i < arr.length; i++){
    for(j=0; j<arr[i].length; j++){
        console.log(arr[i][j])
        }
}

var arr = [
    [1 ,2, 3],
    [4, 5, 6], 7, 8, 9,
    [[10,11,12,[13,4,112]], 136,14,]
];
for (let i = 0; i < arr.length; i++){
    for(j=0; j<arr[i].length; j++){
        console.log(arr[i][j][0])
        }
}*/

var arr = [
    [1 ,2, 3],
    [4, 5, 6], 7, 8, 9,
    [[10,11,12,[13,4,112]], 136,14,]
];
for (let i = 0; i < arr.length; i++){
    let result = arr[i];
    if(result === arr[5]){
        console.log(result[0][0]);
        console.log(result[0][3][0]);
        console.log(result[1]);
    }else if(result === arr[3]){
        console.log(result);
    }else if(result === arr[1]){
        console.log(result[0]);
    }
}
