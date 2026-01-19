class FlowerName {
	constructor(name, color, season) {
		this.name = name;
		this.color = color;
		this.season = season;
	}
	getSeason() {
		return this.season;
	}
}

let flower = new FlowerName("Rose", "White", "Spring");
console.log(flower.name);      // Output: Rose
console.log(flower.color);     // Output: White
console.log(flower.getSeason()); // Output: Spring