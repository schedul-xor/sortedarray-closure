goog.require('goog.dom');
goog.require('goog.ui.Button');
goog.require('goog.ui.LabelInput');
goog.require('goog.ui.Textarea');
goog.require('javascript.SortedArray');


var sa = new javascript.SortedArray();
sa.insert(1);
sa.insert(2);
sa.insert(3);

var textarea = new goog.ui.Textarea('');
textarea.render(goog.dom.getElement('array'));
var string = '';
var array = sa.innerArray();
goog.array.forEach(array,function(el,index){
  string = string+','+el;
});
textarea.setValue(string);
