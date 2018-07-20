张鹤麟 第一周答辩 
---

### 本周最大收获 React的 `Virtual DOM` 机制

> 第一次接触React框架，觉得它在页面渲染上特别快，于是就很留意背后的实现原理。直接操作DOM是很低效的，而Facebook团队对React实现的VirtualDOM机制使得页面渲染变得很精简，也就是不会做不必要的重新渲染，而是只渲染数据改变的地方。以下是我的总结。


### 真实DOM操作的缺点

* 真实dom操作是同步的，只有等所有的dom操作都执行完，浏览器才会做出下一步的操作。 
* 开销大
* 刷新页面会全部重新渲染DOM


React的解决办法
----


### 高效中间层
React会在内存中创建一棵虚拟的DOM树，作为应用和真实Dom之间的一个层，把传统的 "App->DOM" 变成了 "App -> Virtual DOM -> DOM"
这个中间层会在渲染真实DOM之前做一些优化的操作，比如Patching算法会把所有的Dom操作收集起来，Diff算法高效的渲染DOM中发生变化的部分。

### 合并渲染
假设操作
传统Dom操作假设是这样的

```
    let x = document.getElementById('x');
    x.style.color = "yellow";
    x.style.color = "red";
    x.style.color = "black";
```

浏览器会执行3次Dom操作，而React在得到这种状态连续改变的操作事件时，只会做一遍。
因为React 在得到一个Dom事件操作的时候，会把所有的操作用Patching算法进行一个收集合并，找到最终需要的状态，然后对比真实Dom的初始状态，在把需要改变的地方一次性执行完毕。大大减少对真实Dom的操作次数。

### 对比渲染 
React中的Diff算法对内存中的虚拟dom树进行维护，当**数据**发生变化时，会更新虚拟dom，然后和之前的虚拟Dom进行对比，只会把变化的部分渲染到真实的前端Dom，而不是全部渲染。Diff算法只会在发生改变的地方进行重新渲染，使得React性能强劲。并且不会直接操作真实DOM。

### 数据驱动页面渲染
只关心数据的变化和组件的执行结果，数据发生改变才进行渲染


### 组件化
Virtual DOM 是可组件化的，对于虚拟Dom树来说，你可以在这棵树种嵌入你自定义的各种组件，而不用把所有的HTML代码都写进一个文件。这对于程序员来说可读性高，写起来也清晰。



