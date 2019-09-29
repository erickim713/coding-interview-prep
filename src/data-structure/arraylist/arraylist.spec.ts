import { ArrayList } from './arraylist';
import 'mocha';
import { expect } from 'chai';

describe('ArrayList Test', () => {

  describe('Test Append', () => {

    const arrayList = new ArrayList();

    it('after appending once, arraylist size should be 1', ()=>{
      arrayList.append(1);
      expect(
        arrayList.size()
      ).to.equal(1);
    });

    it('after appending twice, arraylist size should be 2', ()=> {
      arrayList.append(24);
      expect(
        arrayList.size()
      ).to.equal(2);
    });
  })

  describe('Test Insert',()=>{

    const arrayList = new ArrayList();

    it('after inserting once, arraylist size should be 1', () => {
      const currentSize = arrayList.size();
      arrayList.insert(currentSize, 1);
      expect(
        arrayList.size()
      ).to.equal(1);
    });

    it('after inserting twice, arraylist size should be 2', () => {
      const currentSize = arrayList.size();
      arrayList.insert(currentSize, 2);
      expect(
        arrayList.size()
      ).to.equal(2);
    });

    it('should catch error when trying to insert to index beyond arraylist size', () => {
      const currentSize = arrayList.size();
      expect(
        () => arrayList.insert(currentSize + 1, 2)
      ).to.throw();
    });
  });

  describe('Test Delete', ()=> {
    const arrayList = new ArrayList();

    it('should catch error when trying to delete when size is 0', () => {
      expect(
        arrayList.size()
      ).to.equal(0);

      expect(
        ()=> { arrayList.delete(1) }
      ).to.throw();
    });

    it('should return size 0 after deleting when one element is present', () => {
      expect(
        arrayList.size()
      ).to.equal(0);

      arrayList.append(2);

      expect(
        arrayList.size()
      ).to.equal(1);

      arrayList.delete(0);

      expect(
        arrayList.size()
      ).to.equal(0);
    });

    it('should catch error when trying to delete what is not there', () => {
      expect(
        arrayList.size()
      ).to.equal(0);

      expect(
        () => { arrayList.delete(2) }
      ).to.throw();
    });
  });

  describe('Test Look Up', ()=> {
    const arrayList = new ArrayList();
    it('should catch error when trying to look up undefined index', () => {
      expect(
        arrayList.size()
      ).to.equal(0);

      expect(
        () => { arrayList.lookUp(3) }
      ).to.throw();
    });

    it('should return 3 when looking up index 1 after appending 3 at size 0', () => {
      expect(
        arrayList.size()
      ).to.equal(0);

      arrayList.append(3);

      expect(
        arrayList.lookUp(0)
      ).to.equal(3);
    });
  })
})