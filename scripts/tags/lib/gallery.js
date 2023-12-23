/**
 * gallery.js v2.0 | https://github.com/xaoxuu/hexo-theme-stellar/
 * 格式与官方标签插件一致使用空格分隔，中括号内的是可选参数（中括号不需要写出来）
 *
 * {% gallery [layout:grid/flow] [size:mix/s/m/l/xl] [square:true/false] %}
 * ![title](/xxx.png)
 * ![title](/xxx.png)
 * ![title](/xxx.png)
 * ![title](/xxx.png)
 * {% endgallery %}
 * 
 * layout:grid 网格布局，支持通过 size/square 设置尺寸和长宽比
 * layout:flow 瀑布流布局，竖排，适合图片量大的时候使用（体验不佳请慎用）
 */

'use strict'

function img(src, alt) {
  let img = ''
  img += `<img src="${src}"`
  if (alt?.length > 0) {
    img += ` alt="${alt}"`
  }
  img += `/>`
  // cap
  img += `<div class="image-meta">`
  if (alt?.length > 0) {
    img += `<span class="image-caption">${alt}</span>`
  }
  img += `</div>`
  return img
}

module.exports = ctx => function(args, content) {
  args = ctx.args.map(args, ['layout', 'size', 'square'])
  if (args.layout == null) {
    args.layout = ctx.theme.config.tag_plugins.gallery.layout
  }
  if (args.size == null) {
    args.size = ctx.theme.config.tag_plugins.gallery.size
  }
  if (args.square == null) {
    args.square = ctx.theme.config.tag_plugins.gallery.square
  }
  var el = ''
  el += `<div class="tag-plugin gallery" ${ctx.args.joinTags(args, ['layout', 'size', 'square']).join(' ')}>`
  const img_mds = content.split('\n').filter(item => item.trim().length > 0)
  for (let md of img_mds) {
    const matches = md.match(/\!\[(.*?)\]\((.*?)\)/i)
    if (matches?.length > 2) {
      let alt = matches[1]
      let src = matches[2]
      el += `<div class="cell">${img(src, alt)}</div>`
    }
  }
  el += `</div>`
  return el
}
