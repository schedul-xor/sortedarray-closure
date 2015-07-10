goog.provide('javascript.SortedArray');

goog.require('goog.asserts');



/**
 * The six line tutorial on sorted arrays:
 * <code>
 * var SortedArray = require("sorted-array");
 * var sorted = new SortedArray(3, 1, 5, 2, 4);
 * console.dir(sorted.array);                   // [1, 2, 3, 4, 5]
 * sorted.search(3);                            // 2
 * sorted.remove(3);                            // [1, 2, 4, 5]
 * sorted.insert(3);                            // [1, 2, 3, 4, 5]
 * </code>
 * An implementation of John von Neumann's sorted arrays in JavaScript. Implements insertion sort and binary search for fast insertion and deletion.
 * @constructor
 * @template T
 * @author Aadit M Shah<aaditmshah@fastmail.fm>
 * @see https://github.com/javascript/sorted-array
 * @license
Copyright (c) 2013 Aadit M Shah

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use, copy,
modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT.  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
 */
javascript.SortedArray = function() {
  this.array_ = [];

  var index = 0;
  var length = arguments.length;
  while (index < length) {
    this.insert(arguments[index++]);
  }
};


/**
 * @param {!T} element
 * @return {!javascript.SortedArray}
 */
javascript.SortedArray.prototype.insert = function(element) {
  goog.asserts.assert(goog.isDefAndNotNull(element));

  var array = this.array_;
  var index = array.length;
  array.push(element);

  while (index) {
    var i = index, j = --index;

    if (array[i] < array[j]) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  return this;
};


/**
 * @param {!T} element
 * @return {!number}
 */
javascript.SortedArray.prototype.search = function(element) {
  goog.asserts.assert(goog.isDefAndNotNull(element));

  var low = 0;
  var array = this.array_;
  var high = array.length;

  while (high > low) {
    var index = (high + low) / 2 >>> 0;
    var cursor = array[index];

    if (cursor < element) low = index + 1;
    else if (cursor > element) high = index;
    else return index;
  }

  return -1;
};


/**
 * @param {!T} element
 * @return {!javascript.SortedArray}
 */
javascript.SortedArray.prototype.remove = function(element) {
  goog.asserts.assert(goog.isDefAndNotNull(element));

  var index = this.search(element);
  if (index >= 0) this.array_.splice(index, 1);
  return this;
};


/**
 * @param {!number} firstIndex
 * @param {!number} length
 */
javascript.SortedArray.prototype.removeRange = function(firstIndex, length) {
  goog.asserts.assertNumber(firstIndex);
  goog.asserts.assertNumber(length);

  this.array_.splice(firstIndex, length);
};


/**
 * @return {!Array.<!T>}
 */
javascript.SortedArray.prototype.innerArray = function() {
  return this.array_;
};


/**
 * @return {!number}
 */
javascript.SortedArray.prototype.size = function() {
  return this.array_.length;
};


/**
 *
 */
javascript.SortedArray.prototype.clear = function() {
this.array_.length = 0;
};
