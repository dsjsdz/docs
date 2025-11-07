---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "一站式服务"
  text: "售货机、工作台源头厂家"
  tagline: 「鼎商」专注于为全球客户提供高品质自动售货机及机电设备产品，以及各行业落地方案。
  actions:
    - theme: brand
      text: 官网选购
      link: https://www.dsjsdz.com
    - theme: alt
      text: 开发者文档
      link: /zh-CN/guide
    - theme: alt
      text: 购买咨询
      link: tel:18122205556
  image:
    src: /images/evm.png
    alt: 鼎商售卖机
    style: {
      width: '100%',
    }

features:
  - icon:
      src: /images/space.png
    title: 大容量
    details: 无论是零食、饮料，还是各类商品，您可以轻松打造独一无二的自助商店。
  - icon:
      src: /images/diy.png
    title: 可定制
    details: 不仅能满足大量商品需求，还能根据您的商业特点进行个性化定制。
  - icon:
      src: /images/money.png
    title: 性价比高
    details: 相比传统售货机，我们提供的不仅是商品，更是一种经济实惠之选。

---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}

.VPContent.is-home p.text{
   font-size: 2.25rem !important;
}

.tagline {
  font-size: 1.25rem !important;
}
</style>