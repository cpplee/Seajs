// define('./dist/main',[],function(require,exports,module){
//
//   function show(){
//   alert(1);
//   }
//
//
//
//    exports.show = show;
// });


define('./dist/main',['m3'],function(require,exports,module){

  var a = require('m3');

  function show(){
  alert(a.test);
alert(a.a);
  }
show();
  exports.show = show;
});





  define('m3',[],function(require,exports,module){
    var test = '引入test';
    var a = 111;
    exports.test=test;
    exports.a = a;
  });
