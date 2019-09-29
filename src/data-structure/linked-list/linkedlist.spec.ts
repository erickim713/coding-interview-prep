import { LinkedList } from './linkedlist';
import 'mocha';
import { expect } from 'chai';

describe('LinkedList Test', () => {

  describe('Test append', () => {

    it('aftering adding one, the size should be 1', () => {
      const linkedList = new LinkedList();
      expect(
        linkedList.size
      ).to.equal(0);

      linkedList.append(1);

      expect(
        linkedList.size
      ).to.equal(1);

      expect(
        linkedList.tail.value
      ).to.equal(1);
    });

    it('aftering adding twice, the size should be 2', () => {
      const linkedList = new LinkedList();
      expect(
        linkedList.size
      ).to.equal(0);

      linkedList.append(1);
      linkedList.append(2);

      expect(
        linkedList.size
      ).to.equal(2);

      expect(
        linkedList.head.value
      ).to.equal(1);


      expect(
        linkedList.tail.value
      ).to.equal(2);
    });
  });

  describe('Test prepend', () => {
    it('after prepending twice, the size should be 2', () => {
      const linkedList = new LinkedList();
      expect(
        linkedList.size
      ).to.equal(0);

      linkedList.prepend(1);
      linkedList.prepend(2);

      expect(
        linkedList.size
      ).to.equal(2);

      expect(
        linkedList.head.value
      ).to.equal(2);


      expect(
        linkedList.tail.value
      ).to.equal(1);
    });
  });

  describe('Test Delete', () => {

    it('should return 0 when value has not been found and deleted nothing', () => {
      const linkedList = new LinkedList();
      expect(
        linkedList.size
      ).to.equal(0);

      expect(
        linkedList.delete(5)
      ).to.equal(0);
    });

    it('should return 1 when value has been found and deleted', () => {
      const linkedList = new LinkedList();
      expect(
        linkedList.size
      ).to.equal(0);

      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(2);

      expect(
        linkedList.size
      ).to.equal(3);

      linkedList.delete(2);

      expect(
        linkedList.size
      ).to.equal(2);

      expect(
        linkedList.head.value
      ).to.equal(1);

      expect(
        linkedList.tail.value
      ).to.equal(2);
    });
  });

  describe('Test LookUp', () => {
    it('should catch error when not found', ()=> {
      const linkedList = new LinkedList();
      expect(
        linkedList.size
      ).to.equal(0);

      expect(
        linkedList.lookUp(5)
      ).to.equal(false);

      linkedList.append(3);

      expect(
        linkedList.lookUp(100)
      ).to.equal(false);
    })
  })
})