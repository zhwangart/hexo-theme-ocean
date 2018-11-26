# Ocean

Ocean is a mobile-enabled Hexo theme based on the features in Hexo's default theme landscape. Since I am a Designer and not a Coder, the Ocean code may not be perfect! I am very grateful to [youchen1992](https://github.com/youchen1992) for providing technical support during the Ocean production process.


[Preview](https://zhwangart.github.io)

![screenshot](screenshots/screenshot.jpg)

### Install

``` bash
$ git clone https://github.com/zhwangart/hexo-theme-ocean.git themes/ocean
```

### Enable

Modify `theme` setting in `_config.yml` to `ocean`

``` yml
theme: ocean
```

### Update

``` bash
cd themes/ocean
git pull
```

### Configuration

Menu 的图标是用 CSS 添加的，在 `source/css/_partial/navbar.styl` 中，我使用的是 [feathericon](https://feathericon.com) ,可以根据需要按顺序指定到 Menu ，如需要帮助，请留言！

``` yml
# Menu
menu:
  Home: /
  Archives: /archives
rss: /atom.xml

# Miscellaneous
favicon: /favicon.ico
brand: /images/shark.svg

# Ocean Video
ocean_video_poster: video poster path      # Optional,Used for display before video loading
ocean_video_src: video src path      # Video format MP4
ocean_video_brand: /images/hexo-inverted.svg      # Optional

# Content
excerpt_link: Read More...
nav_prev_text: Newer posts
nav_next_text: Olde posts
share_text: Share
fancybox: true

# Local search
search_text: Search
```

### Post poster

``` md
title: Post name

photos: [
        ["img_url"],
        ["img_url"]
        ] 
```

### Gallery
Need to write in the head of the markdown, this is not a good way to write, I hope to get a better way to write on github.

``` md
title: Gallery

albums: [
        ["img_url","img_caption"],
        ["img_url","img_caption"]
        ]
---
```

