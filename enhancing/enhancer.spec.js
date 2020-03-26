const enhancer = require('./enhancer.js');


const item = {
  name: 'raj',
  durability: 100,
  enhancement: 20
}

describe('enhancer.js', () => {
  describe('the succeed() function', () => {
   
    it('should return an obj with a name property', function () {
      expect(enhancer.repair(item)).toHaveProperty('name');
    });

    it('should return an obj with a durability property', function () {
      expect(enhancer.repair(item)).toHaveProperty('durability');
    });

    it('should return an obj with an enhancement property', function () {
      expect(enhancer.repair(item)).toHaveProperty('enhancement');
    });

    it('should return obj with the items enhancement increased by 1', function () {
      const enhancedItem = enhancer.succeed(item);
      const originalEnhancement = item.enhancement;
      if(item.enhancement === 20){
        expect(enhancedItem.enhancement).toEqual(originalEnhancement);
      }else{
        expect(enhancedItem.enhancement).toEqual(originalEnhancement + 1);
      }
    });

    it('.does not increase the enhancement beyond 20', function () {
      expect(enhancer.succeed(item).enhancement).toBeLessThanOrEqual(20);
    });

    it('.does not change item durability', function () {
      let origDurability= item.durability;
      expect(enhancer.succeed(item).durability).toBeLessThanOrEqual(origDurability);
    });

    it('should return a **NEW** item', function () {
      const repairedItem= enhancer.succeed(item);
      expect(repairedItem).not.toBe(item);
    });

  })
  
  describe('the fail() function', () => {
    
    it('should return an obj with a name property', function () {
      expect(enhancer.repair(item)).toHaveProperty('name');
    });

    it('should return an obj with a durability property', function () {
      expect(enhancer.repair(item)).toHaveProperty('durability');
    });

    it('should return an obj with an enhancement property', function () {
      expect(enhancer.repair(item)).toHaveProperty('enhancement');
    });

    it('should return a **NEW** item', function () {
      const repairedItem= enhancer.fail(item);
      expect(repairedItem).not.toBe(item);
    });
    
    it('should return an item with its durability decreased by 5, 10 or 1 based on the enhancement level', () => {
      if( item.enhancement < 15 ){
        expect( enhancer.fail(item).durability ).toEqual(item.durability - 5);

      }else if( item.enhancement >= 15 && item.enhancement < 17 ){
        
        expect( enhancer.fail(item).durability ).toEqual(item.durability - 10);
      }else{
        expect( enhancer.fail(item).durability ).toEqual(item.durability - 1);
      }
    })

  })

  describe('the repair() function', () => {
   
    it('should return an obj with a name property', function () {
      expect(enhancer.repair(item)).toHaveProperty('name');
    });

    it('should return an obj with a durability property', function () {
      expect(enhancer.repair(item)).toHaveProperty('durability');
    });

    it('should return an obj with an enhancement property', function () {
      expect(enhancer.repair(item)).toHaveProperty('enhancement');
    });

    it('should return an item with durability restored to 100', function () {
      expect(enhancer.repair(item).durability).toEqual(100);
    });

    it('should return a **NEW** item', function () {
      const repairedItem= enhancer.repair(item);
      expect(repairedItem).not.toBe(item);
    });

  })

  describe('get() function', () => {
    it('works', () => {

    });
  })

})