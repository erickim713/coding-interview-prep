// There are two ways to implement a stack.
export class Stack<T> {
  private stack: Array<T>;
  constructor(){
    this.stack = new Array<T>();
  }

  public push(value: T): void {
    this.stack.push(value);
  }

  public pop(): void {
    this.stack.pop();
  }

  public peek(){
    return this.stack.length === 0 ? null : this.stack[this.stack.length -1];
  }

  public isEmpty(){
    return this.stack.length === 0
  }
}