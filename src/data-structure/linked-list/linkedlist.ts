import { Unit } from "./unit";

export class LinkedList<T> {
  public size: number
  public head: Unit<T>;
  public tail: Unit<T>;
  constructor() {
    this.size = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  public prepend(value: T): void {
    const unit = new Unit(value);
    if(this.head === undefined && this.tail === undefined) {
      this.head = this.tail = unit;
    } else {
      this.head.previousUnit = unit;
      unit.nextUnit = this.head;
      this.head = unit;
    }
    this.size++;
  }

  public append(value: T): void {
     const unit = new Unit(value);
     if(this.head === undefined && this.tail === undefined) {
       this.head = this.tail = unit;
     } else {
       this.tail.nextUnit = unit;
       unit.previousUnit = this.tail;
       this.tail = unit;
     }
     this.size++;
  }

  public lookUp(value: T): boolean {
    let unit = this.head;
    for(let i = 0; i < this.size; i++){
      if(unit.value === value) {
        return true;
      } else {
        unit = unit.nextUnit;
      }
    }
    return false;
  }

  public delete(value: T): number {
    let unit = this.head;
    for(let i = 0; i < this.size; i++) {
      if(unit.value === value) {
        unit.nextUnit.previousUnit = unit.previousUnit;
        unit.previousUnit.nextUnit = unit.nextUnit;
        this.size--;
        return 1;
      } else {
        unit = unit.nextUnit;
      }
    }
    return 0;

  }
}