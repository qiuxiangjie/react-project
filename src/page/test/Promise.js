/**
 * Created by Zhoujianxiang on 2018/3/29.
 */
console.log(0);
let p1 = new Promise( resolve => {
  setTimeout( () => {
    resolve ('hello-1');
    console.log('p1');
  }, 2000)
});
let p2 = new Promise( resolve => {
  setTimeout( () => {
    resolve ('hello-2')
  }, 2000)
});
/*  p.then( value => {
    // 接收resolve的参数
    console.log (value);
    //(function () {
      return new Promise( resolve => {
        setTimeout( () => {
          resolve('22');
        }, 2000)
      });
   // })();
    //return 1;
  })*/
let s1 = function () {
  return p1
};
let s2 = function () {
  return p2
};

/*#1*/
/*
s1().then(function () {
  return s2()
}).then( value => {
    console.log(value)
  });
*/

/*#2*/
/*
s1().then(function () {
  s2(); // 没有返回值，相对于返回为空，会立即执行后台的then
}).then( value => {
  console.log(value)
});*/

/*#3*/
// then(s2())中，s2() 返回的是一个promise实例，并不是一个函数，所以这个then被忽略掉不会被加入到事件队列当中，而最后一个then则监听了s1()
/*s1().then(s2()).then( value => {
  console.log(value)
});*/

/*#4*/
// 结果是跟第一个一样的
/*s1().then(s2).then( value => {
 console.log(value)
 });*/
