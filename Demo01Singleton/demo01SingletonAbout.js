/**
 *  js 单例模式
 *   定义  
 *        保证一个类仅有一个实例，并提供一个访问它的全局访问点
 *        也就是说这个对象只需要一个即可，不需要创建多个
 */

 var Singleton = function(name) {
     this.name = name;
 }

Singleton.instance = null; // 记录是否被创建

Singleton.prototype.getName = function () {
    return this.name;
}

Singleton.getInstance = function(name) {
    
    // 如果Singleton.instance为false 创建一个新的实例
    if (!Singleton.instance) {
        Singleton.instance = new Singleton(name);
    }
    return this.instance;
}

// 调用
var xiaoming = Singleton.getInstance("xiaoming");
var xiaofang = Singleton.getInstance('xiaofang');

console.log(xiaoming === xiaofang); // true
console.log(xiaoming.getName()); // xiaoming
console.log(xiaofang.getName()) // xiaoming