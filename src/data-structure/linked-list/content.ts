export default class Content<T> {

	public value: T;
	public previousContent: Content<T>;
	public nextContent: Content<T>;

	constructor(val: T) {
		this.value = val;
		this.previousContent = undefined;
		this.nextContent = undefined;
	}
}