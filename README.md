# no-loss-accuracy
Add, subtract, multiply and divide without loss of accuracy

### Install

``` javascript
 $ npm i no-loss-accuracy -S
```

### Import

``` javascript
 import { add, sub, mult, div } from "no-loss-accuracy"
```

### Demo

``` javascript
 import { add, sub, mult, div } from "no-loss-accuracy"

 const result = add(0.1, 0.2) //0.3

// 多个参数情况
 const result1 = add(-0.1, -0.2, 0.6, .003) // 加法
 const result2 = sub(-0.1, -0.2, 0.6, .003) // 减法（第一个参数为被减数)
 const result3 = mult(-0.1, 0.3, 0.1) // 乘法
 const result4 = div(-0.3, 0.3, 0.1) // 除法（第一个参数为被除数)

 console.log(result1, result2, result3, result4)
```