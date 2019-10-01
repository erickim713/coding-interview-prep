export class Queue<T> {
  public queue: Array<T>
  constructor() {
    this.queue = new Array<T>();
  }

  public enqueue(value: T): void {
   this.queue.push(value);
  }

  public dequeue(): void {
    this.queue.shift();
  }

  public front() {
    return this.queue.length > 0 ? this.queue[0] : null;
  }

  public rear() {
    return this.queue.length > 0 ? this.queue[this.queue.length -  1] : null;
  }
}