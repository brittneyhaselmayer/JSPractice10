const reverse = (sentence) => {
	let arr = sentence.split(' ');
	let rev = [];
	for (let i = 0; i < arr.length; i++) {
		let word = arr[i].split('');
		let x = word.reverse();
		rev.push(x.join(''));
	}
	console.log(rev.join(' '));
};

// reverse('whats up people');

const rotateArray = (arr, num) => {
	for (let i = 0; i < num; i++) {
		let rem = arr.pop();
		arr.unshift(rem);
	}
	console.log(arr);
};

// rotateArray([0, 1, 2, 3, 4], 1);

const combo = (arr) => {
	let b = [];
	for (let i = 0; i < arr.length; i++) {
		// console.log('---------first loop--------' + arr[i]);
		for (let j = i + 1; j < arr.length; j++) {
			b.push([arr[i], arr[j]]);
			// console.log('---------second loop--------' + arr[j]);
		}
	}
	console.log(b);
};

// combo(['a', 'b', 'c']);

const oppCount = (nums) => {
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === 0) {
				count += 1;
			}
		}
	}
	console.log(count);
};

// oppCount([2, 5, 11, 7]);

const twoDimentionSum = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			sum = sum + arr[i][j];
		}
	}
	console.log(sum);
};

// array_1 = [[4, 5], [1, 3, 7, 1], [10]];

// twoDimentionSum(array_1);

// const twoDimentionTrans = (arr) => {
// 	let translate = [];
// 	for (i = 0; i < arr.length; i++) {
// 		for (j = arr[i][1]; j > 0; j--) {
// 			translate.push([arr[i][0]]);
// 		}
// 	}
// 	console.log(translate);
// };

// twoDimentionTrans([
// 	['wow', 3],
// 	['that', 1],
// 	['really', 2],
// 	['doesnt', 0],
// 	['works', 1],
// ]);

const arraytranslate = (arr) => {
	let translate = '';
	console.log();
	for (let i = 0; i < arr.length; i += 2) {
		for (let j = arr[i + 1]; j > 0; j--) {
			translate = translate + arr[i];
		}
	}
	console.log(translate);
};

// arraytranslate(['Mom', 2, 'dad', 1, 'Kid', 9]);

const pigLatin = (word) => {
	let arr = word.split('');
	let vowels = 'aeiou';

	if (vowels.includes(arr[0])) {
		arr.push('yay');
	} else {
		let vowel = arr.find((ele) => vowels.includes(ele));
		let index = arr.indexOf(vowel);
		let chunk = arr.splice(0, index);
		arr.push(chunk.join('') + 'ay');
	}

	console.log(arr.join(''));
};

pigLatin('adam');
