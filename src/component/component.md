<!--
 * @Author: Lvhz
 * @Date: 2020-04-21 22:07:46
 * @Descripttion: 通用组件
 -->
## 弹窗组件  
&emsp;&emsp;弹窗组件的特点是他们在当前vue实例之外独立存在，通常挂载于body；他们是通过JS动态创建的，不需要在任何组件中声明。常见的用法：  

```javascript
this.$create(Notice, {
    title: '',
    message: '',
    duration: 1000
}).show()
```  

## Tree组件  
&emsp;&emsp;Tree组件是典型的递归组件，其他的诸如菜单组件都属于这一类。  
### 组件设计  
&emsp;&emsp;Tree组件最合适的结构是无序列表ul，创建一个递归组件Item表示Tree选项，如果当前Item存在children，则递归渲染子树，以此类推；同时添加一个标识管理当前层级Item的展开状态。

