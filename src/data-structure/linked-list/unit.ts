export class Unit<T> {

	public value: T;
	public previousUnit: Unit<T>;
	public nextUnit: Unit<T>;

	constructor(val: T) {
		this.value = val;
		this.previousUnit = undefined;
		this.nextUnit = undefined;
	}
}