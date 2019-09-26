class ArrayList {
  arrayList: Array<any>;
    

  constructor(length: number) {
    this.arrayList = length === undefined ? new Array() : new Array(length);
  }

  private checkExistence(index: number): void {
    const content = this.arrayList[index];
    if(content === undefined) throw new Error('undefined');
  }
  
  // access (index)
  public access(index: number): any {
    this.checkExistence(index);
    return this.arrayList[index];
  }

  // change (index, content)
  public change(index: number, content: any): void {
    this.checkExistence(index);
    this.arrayList[index] = content;
  }

  // remove (index)
  public remove(index: number): void {
    this.checkExistence(index);
    this.arrayList.splice(index, 1);
  }

  // add (content)
  public add(content: any): void {
    this.arrayList.push(content);

  }

  // insert (index)
  public insert(index: number, content: any) {
    if (this.arrayList.length < index) throw new Error('undefined'); // inserting element in the beginning and at the end is fine but not at nowhere
    this.arrayList.splice(index, 0, content);    
  }
}
