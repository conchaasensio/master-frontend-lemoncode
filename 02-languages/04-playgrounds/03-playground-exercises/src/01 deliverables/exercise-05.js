console.log('************** DELIVERABLE 05 *********************');

class SlotMachine {
  constructor() {
    this.slots = 3;
    this.coins = 0;
  }

  generateRandomBoolean() {
    return Math.random() >= 0.5;
  }

  generateRandomSlots() {
    const slots = [];
    for (let i = 0; i < this.slots; i++) {
      slots.push(this.generateRandomBoolean());
    }
    return slots;
  }

  reset() {
    this.coins = 0;
  }

  play() {
    this.coins++;
    const randomSlots = this.generateRandomSlots();

    const hasWon = randomSlots.every((slot) => slot);

    if (hasWon) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.reset();
    } else {
      console.log('Good luck next time!!');
    }
  }
}

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
