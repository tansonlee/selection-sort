let list = [];
let index = 0;
const rate = 10;

function setup() {
	createCanvas(400, 400);
	background(200);
	frameRate(rate);
	noStroke();

	randomizeList(list, width, height);
}

function draw() {
	background(200);
	drawList();

	fill(0, 255, 0);
	rect(index, height - list[index], 1, list[index]);

	selectionSort(list, index);
	index++;

	if (index >= list.length - 1) {
		noLoop();
	}
}

function randomizeList(list, elements, max) {
	for (let i = 0; i < elements; i++) {
		list.push(random(max));
	}
}

function selectionSort(list, start) {
	let minIndex = start;
	for (let i = start; i < list.length; i++) {
		if (list[i] < list[minIndex]) {
			prevMinIndex = minIndex;
			minIndex = i;
		}
	}
	swap(list, start, minIndex);
}

function swap(list, i1, i2) {
	const temp = list[i1];
	list[i1] = list[i2];
	list[i2] = temp;
}

function drawList() {
	fill(51);
	for (let i = 0; i < list.length; i++) {
		rect(i, height - list[i], 1, list[i]);
	}
}
