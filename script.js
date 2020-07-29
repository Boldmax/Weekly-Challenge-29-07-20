function minCost(allCosts){
var maxHouses = 100;
var arr = [];
for(var i = 0; i < allCosts.length; i++){
for(var j = 0; j < allCosts[i].length; j++){
if(allCosts[i][j] < maxHouses && arr[i-1] !== allCosts[i][j]){
arr[i] = allCosts[i][j];
maxHouses = allCosts[i][j];
}
}
maxHouses = 100;
}
const reduced = arr.reduce((total,number) => total + number);
return `The minimum cost to build all the houses in the
neighborhood based on the array passed is equal to $${reduced}.`
}

minCost([[1, 2, 3], [1, 2, 3], [3, 3, 1]]);
    