---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "One-stop service."
  text: "The original manufacturers of vending machines and workbenches."
  tagline: 「DingShang」Focused on providing high-quality vending machines and electromechanical equipment products to global customers, as well as landing solutions for various industries.
  actions:
    - theme: brand
      text: Official Website
      link: https://www.dsjsdz.com
    - theme: alt
      text: Documents
      link: /guide
    - theme: alt
      text: Inquiry
      link: mailto:1986818@qq.com
  image:
    src: /images/evm.png
    alt: Dingshang vending machine
    style: {
      width: '100%',
    }

features:
  - icon:
      src: /images/space.png
    title: Large capacity
    details: Whether it's snacks, beverages, or various other goods, you can easily create a unique self-service store.
  - icon:
      src: /images/diy.png
    title: Customizable
    details: Not only can it meet a large demand for goods, but it can also be personalized and customized according to your business characteristics.
  - icon:
      src: /images/money.png
    title: High cost-performance ratio
    details: Compared to traditional vending machines, what we offer is not just products, but also an economical and affordable choice.

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