# Avatar

<img src="http://mdrs.yuanjin.tech/img/20201130153821.png" alt="image-20201130153821293" style="zoom:50%;" />


## 属性

| 属性 | 含义               | 类型   | 必填 | 默认值 |
|------|--------------------|--------|------|--------|
| size | 头像尺寸，宽高相等 | Number | 否   | 150    |
| url  | 头像图片路径       | String | 是   | 无     |

# Icon

<img src="http://mdrs.yuanjin.tech/img/20201130153927.png" alt="image-20201130153927256" style="zoom:50%;" />

图标组件

使用的图标来源于「阿里巴巴矢量库」

## 属性

| 属性名 | 含义     | 类型   | 必填 | 默认值 |
|--------|----------|--------|------|--------|
| type   | 图标类型 | String | 是   | 无     |

有效的图标类型：

<img src="http://mdrs.yuanjin.tech/img/20201130155542.jpg" alt="iShot2020-11-30下午03.47.09" style="zoom:33%;" />


# Pager

<img src="http://mdrs.yuanjin.tech/img/20201113130301.png" style="zoom:50%;" />

## 属性

| 属性名        | 含义       | 类型   | 必填 | 默认值 |
|---------------|------------|--------|------|--------|
| current       | 当前页码   | Number | 否   | 1      |
| total         | 总数据量   | Number | 否   | 0      |
| limit         | 页容量     | Number | 否   | 10     |
| visibleNumber | 可见页码数 | Number | 否   | 10     |

## 事件

| 事件名     | 含义     | 事件参数 | 参数类型 |
|------------|----------|----------|----------|
| pageChange | 页码变化 | 新的页码 | Number   |

# Empty

![avatar](../image/empty.png)

## 属性

| 属性名 | 含义           | 类型   | 必填 | 默认值 |
|--------|----------------|--------|------|--------|
| text   | 显示的文字信息 | String | 否   | 无数据 |


# imageLoader


![avatar](../image/imageLoader.png)

## 属性
| 属性名      | 含义                       | 类型   | 必填 | 默认值 |
|-------------|----------------------------|--------|------|--------|
| src         | 原图路径                   | String | 是   | 无     |
| placeholder | 缩略图                     | String | 是   | 无     |
| duration    | 原图加载成功后多久显示原图 | Number | 否   | 500    |





