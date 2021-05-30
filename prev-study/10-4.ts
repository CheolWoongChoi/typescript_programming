class Bird {
	fly() {
		console.log(`I'm flying.`);
	}
}

class Fish {
	swim() {
		console.log(`I'm swimming.`);
	}
}

const flyOrSwim = (o: Bird | Fish): void => {
	if (o instanceof Bird) {
		o.fly();
	} else if (o instanceof Fish) {
		o.swim();
	}
}

const isFlyable = (o: Bird | Fish): o is Bird => {
	return o instanceof Bird;
}

const isSwimmable = (o: Bird | Fish): o is Fish => {
	return o instanceof Fish;
}

[new Bird, new Fish].forEach((flyOrSwim));

