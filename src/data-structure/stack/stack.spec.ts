import { Stack } from './stack';
import 'mocha';
import { expect } from 'chai';

describe('Stack Test', () => {

  describe('Test Push', () => {

    it('after pushing one, the stack should not be empty', () => {
      const stack = new Stack();
      stack.push(1);
      expect(
        stack.isEmpty()
      ).to.equal(false);
    });

    it('after pushing two, the stack should not be empty and check the last one', () => {
      const stack = new Stack();
      stack.push(1);
      expect(
        stack.isEmpty()
      ).to.equal(false);

      stack.push(2);
      expect(
        stack.peek()
      ).to.equal(2);
    });
  });

  describe('Test Pop', () => {
    it('after pushing twice and then pop, the size should be 1', () => {
      const stack = new Stack();
      stack.push(50);
      stack.push(1);
      stack.pop();
      expect(
        stack.isEmpty()
      ).to.equal(false);

      expect(
        stack.peek()
      ).to.equal(50);

    })
  })
})