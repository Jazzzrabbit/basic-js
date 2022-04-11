const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  value: [],
  output: [],
  getLength() {
    return this.value.length || 0;
  },
  addLink(value) {
    if (value === undefined) this.value.push('( )');
    else this.value.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || !this.value[position - 1]) {
      this.value = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.value.splice(position - 1, 1);
      return this;
    }    
  },
  reverseChain() {
    this.value = this.value.reverse();
    return this;
  },
  finishChain() {
    this.output = Array.from(this.value);
    this.value = [];
    return this.output.join('~~');
  }
};

module.exports = {
  chainMaker
};
