function mincost(arr)
{ 
//write your code here
// return the min cost
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  } let totalcost=0
	while(arr.length>1) {
		let first=arr.shift()
		let second=arr.shift()
		let cost=first+second
		totalcost+=cost
		arr.push(cost)
		arr.sort((a,b)=>(a-b))
	}
	return totalcost
}

module.exports=mincost;
