function maxMinAvg(arr){
	var max = arr[0];
	var min = arr[0];
	var sum = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > max) {max = arr[i]}
		if (arr[i] < min) {min = arr[i]}
		sum += arr[i];
	}
	return [max, min, sum / arr.length];
}

console.log(maxMinAvg([1, 2, 3, 4, 5]));
