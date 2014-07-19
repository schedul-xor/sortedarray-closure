require('nclosure').nclosure({additionalDeps:['deps.js']});
expect = require('expect.js');

goog.require('javascript.SortedArray');

describe('javascript.SortedArray',function(){
    var arr = new javascript.SortedArray();
    arr.insert(3);
    arr.insert(1);
    arr.insert(8);
    arr.insert(9);

    it('should search valid indices',function(){
        expect(arr.search(1)).to.be(0);
        expect(arr.search(3)).to.be(1);
        expect(arr.search(8)).to.be(2);
        expect(arr.search(9)).to.be(3);
    });

    it('should search valid indices after delete',function(){
        arr.remove(1);

        expect(arr.search(1)).to.be(-1);
        expect(arr.search(3)).to.be(0);
        expect(arr.search(8)).to.be(1);
        expect(arr.search(9)).to.be(2);
    });
});
