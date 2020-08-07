const object1 = {};
var obj1 = {
  name:'zhangsan'
}
Object.defineProperty(obj1,"name",{
  set:function(val){
    console.log("赋值时候调用我,我的新值是"+ val)
  },
  get:function(val){
    console.log("取值的时候调用我")
    return val
  }
})

var obj = new Proxy({}, {
  get: function (target, propKey, receiver) {
    console.log(`getting ${JSON.stringify(target)}!`);
    return target[propKey].replace(/san/, '先生');
  },
  set: function (target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
});

object1.property1 = 77;
// throws an error in strict mode

console.log(obj1.name);
// console.log(obj.aaa);
// expected output: 42
