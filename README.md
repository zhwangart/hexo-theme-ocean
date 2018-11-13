# Ocean

Ocean 是基于 Landscape 中的功能设计的一个 Hexo 主题

- [Preview](https://zhwangart.github.io)

### 安装

``` bash
$ git clone https://github.com/zhwangart/hexo-theme-ocean.git
```

**所以跟 Landscape 一样 Ocean 需要 Hexo 2.4 及以上版本。** 如果您想启用RSS，还需要[hexo-generate-feed]插件。

### 启用

在 `_config.yml` 中设置 `theme` 为 `Ocean`.

``` yml
theme: ocean
```

### 更新

``` bash
cd themes/ocean
git pull
```

### 配置结构

并没有删除 Landscape 中 Sidebar 跟 Widgets 的配置信息，只是注掉了代码。另外 Ocean 新增了本地搜索

``` yml
menu:
  首页: /
  归档: /archives
  相册: /gallery
  关于: /about
rss: /atom.xml

# Content
excerpt_link: Read More
fancybox: true

# Miscellaneous
google_analytics:
favicon: /favicon.png
twitter:
google_plus:

# Local search
# Dependencies: https://github.com/flashlab/hexo-generator-search
local_search:
  enable: true
  # if auto, trigger search by changing input
  # if manual, trigger search by pressing enter key or search button
  trigger: auto
  # show top n results per article, show all results by setting to -1
  top_n_per_article: 1
  unescape: true
```

### Fancybox

Ocean 使用[Fancybox]展示照片。你可以使用标记语法或 fancybox 标签插件来添加你的照片。

```
![img caption](img url)

{% fancybox img_url [img_thumbnail] [img_caption] %}
```

### 感谢

- [Preview]
- [Hexo](https://hexo.io/)
- [Landscape](https://hexojs.github.io/hexo-theme-landscape/)
- [Fancybox](http://fancyapps.com/fancybox/)
- [Grunt](http://gruntjs.com/)
- [hexo-generate-feed](https://github.com/hexojs/hexo-generator-feed)

# hexo-theme-ocean
