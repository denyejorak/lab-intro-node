class SortedList {
  constructor() {
    this.items=[];
    this.length=0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    return this.items.sort((a,b)=>a-b);
  }

  get(pos) {
    if(pos<=this.length){
      return this.items.at(pos);
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.length===0){
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if(this.length===0){
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if(this.length===0){
      return 0
    } else {
      
      const sum= this.items.reduce((acc,curr)=>acc + curr);
      return sum;
    }
  }

  avg() {
    if(this.length===0){
      throw new Error('EmptySortedList');
    } else {
      return this.sum()/this.length;
    }
  }
}

module.exports = SortedList;
