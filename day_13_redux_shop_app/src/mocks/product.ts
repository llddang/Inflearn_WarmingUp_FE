import { productDetailDto, tabDto } from '../types';

export const tabInfos: tabDto[] = [
  { id: 'All', name: '모두' },
  { id: 'Electronics', name: '전자기기' },
  { id: 'Jewelry', name: '쥬얼리' },
  { id: "men's clothing", name: '남성의류' },
  { id: "women's clothing", name: '여성의류' },
];

export const products: productDetailDto[] = [
  {
    id: 1,
    name: 'Swarovski Infinity necklace',
    img: 'https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_375/5518865_png/swarovski-infinity-necklace--infinity-and-heart--white--mixed-metal-finish-swarovski-5518865.png',
    price: 195000,
    description:
      'Eternal romance: The symbols of love and infinity are bound together in this elegant Swarovski necklace. A white crystal heart is intertwined with a rose-gold tone plated infinity symbol in this lovely piece, which is a visible representation of the promise of everlasting love. A perfect gift for your significant other.',
    type: 'Jewelry',
  },
  {
    id: 2,
    name: 'Dancing Swan necklace',
    img: 'https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_375/5533397_png/dancing-swan-necklace--swan--blue--rhodium-plated-swarovski-5533397.png',
    price: 245000,
    description:
      "As a symbol of graceful elegance and nobility, the swan is the ideal icon for Swarovski jewelry. This beautiful necklace condenses over 125 years of artisanal and designing experience into a beautiful swan set with numerous sparkling Swarovski stones. The deep blue central element with the 'dancing stone' mechanism reminds you of clear lakes shimmering in the sun. The perfect match for a sophisticated evening ensemble.",
    type: 'Jewelry',
  },
  {
    id: 3,
    name: 'Swarovski Sparkling Dance necklace',
    img: 'https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_375/5514488_png/swarovski-sparkling-dance-necklace--clover--pink--rose-gold-tone-plated-swarovski-5514488.png',
    price: 195000,
    description:
      'This Swarovski necklace sparkles with a charming floral design. From our much-loved Sparkling Dance collection, it features a pink dancing stone in the shape of a clover, which appears to float inside its setting and is complemented by the rose-gold tone plated chain. This piece of jewelry will pair well with casual outfits and is a great gift for a special someone.',
    type: 'Jewelry',
  },
  {
    id: 4,
    name: 'Dazzling Swan Y necklace',
    img: 'https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_375/5473024_png/dazzling-swan-y-necklace--swan--pink--rose-gold-tone-plated-swarovski-5473024.png',
    price: 195000,
    description:
      'This spectacular pendant will bring a touch of cool romance to your everyday look. The rose gold-plated design is dominated by our iconic swan motif, which shines with a full-cut crystal body in cool millennial pink and crisp clear pavé lines. The prong-set crystals that hang above brim with extra sparkle. A gorgeous piece with a bold aesthetic, it will combine with your existing jewelry seamlessly. The pendant comes on a chain. Pair with simpler designs for an on-trend look or wear with the matching pieces in the collection for a more curated vibe.',
    type: 'Jewelry',
  },
  {
    id: 5,
    name: 'Lilia necklace',
    img: 'https://asset.swarovski.com/images/$size_1450/t_swa103/b_rgb:ffffff,c_scale,dpr_2.0,f_auto,w_375/5662181_png/lilia-necklace--butterfly--blue--rhodium-plated-swarovski-5662181.png',
    price: 155000,
    description:
      'This elegant Lilia necklace features a central motif of floating butterflies adorned with shimmering blue pavé on a rhodium plated setting. This is an easy choice to enhance your outfit with a touch of nature-inspired wonder.',
    type: 'Jewelry',
  },
  {
    id: 6,
    name: 'iPad Pro 13',
    img: 'https://www.apple.com/v/ipad/home/cj/images/overview/select/product-tile/pt_ipad_pro__6bgrkek0jnm2_small_2x.png',
    price: 1499000,
    description:
      'The ultimate iPad experience with the most advanced technology.',
    type: 'Electronics',
  },
  {
    id: 7,
    name: 'iPad Air 13',
    img: 'https://www.apple.com/v/ipad-pro/ap/images/overview/contrast/product-tile/ipad_air__crdt2g2u9z0i_small_2x.jpg',
    price: 899000,
    description: 'Serious performance in a thin and light design.',
    type: 'Electronics',
  },
  {
    id: 8,
    name: 'iPhone 15',
    img: 'https://www.apple.com/v/iphone-15/c/images/overview/contrast/iphone_15__dozjxuchowcy_small_2x.jpg',
    price: 1550000,
    description:
      'The innovative new design features back glass that has color infused throughout the material. A custom dual ion-exchange process for the glass, and an aerospace-grade aluminum enclosure, help make iPhone 15 incredibly durable.',
    type: 'Electronics',
  },
  {
    id: 9,
    name: 'iPhone 15 Pro',
    img: 'https://www.apple.com/v/iphone-15/c/images/overview/contrast/iphone_15pro__ezc4eofw13yq_small_2x.jpg',
    price: 1250000,
    description:
      'Now the Main camera shoots in super-high resolution. So it’s easier than ever to take standout photos with amazing detail from snapshots to stunning landscapes.',
    type: 'Electronics',
  },
  {
    id: 10,
    name: 'Apple Watch SE',
    img: 'https://www.apple.com/v/watch/bl/images/overview/select/product_se__frx4hb13romm_small_2x.png',
    price: 329000,
    description: 'All the essentials. Light on price.',
    type: 'Electronics',
  },
  {
    id: 11,
    name: 'Oversized Essential Check Shirt Green',
    img: 'https://image.msscdn.net/images/goods_img/20240514/4131374/4131374_17159146099300_500.jpg',
    price: 52600,
    description: '[Summer Fabric] Oversized Essential Check Shirt Green',
    type: "men's clothing",
  },
  {
    id: 12,
    name: 'Oversized two-pocket Linen Denim Half Shirt Deep Indigo',
    img: 'https://image.msscdn.net/images/goods_img/20240514/4131371/4131371_17159172329918_500.jpg',
    price: 73200,
    description:
      '[GLW] Oversized two-pocket Linen Denim Half Shirt Deep Indigo',
    type: "men's clothing",
  },
  {
    id: 13,
    name: 'Oversized fit Soft linen Collar Knitwear Beige',
    img: 'https://image.msscdn.net/images/goods_img/20240417/4063733/4063733_17150534103444_500.jpg',
    price: 46000,
    description: '[GLW] Oversized fit Soft linen Collar Knitwear Beige',
    type: "men's clothing",
  },
  {
    id: 14,
    name: 'Heavy weight overfit graphic hood gray',
    img: 'https://image.msscdn.net/images/goods_img/20240124/3817307/3817307_17060606126012_500.jpg',
    price: 67000,
    description: '[GLW] Heavy weight overfit graphic hood gray',
    type: "men's clothing",
  },
  {
    id: 15,
    name: 'FLASHED CATS EYE CROP T-SHIRTS',
    img: 'https://image.msscdn.net/images/goods_img/20230308/3133849/3133849_16782669244320_500.jpg',
    price: 52000,
    description: '[AEAE] FLASHED CATS EYE CROP T-SHIRTS [White]',
    type: "women's clothing",
  },
  {
    id: 16,
    name: 'Terry Stripe Half T-Shirt_BLACK',
    img: 'https://image.msscdn.net/images/goods_img/20240329/4003711/4003711_17116784029905_500.jpg',
    price: 64000,
    description: '[NONBLANK] Terry Stripe Half T-Shirt_BLACK',
    type: "women's clothing",
  },
  {
    id: 17,
    name: 'HALFTONE DOT LAYER FUZZY RABBIT SHORT SLEEVE T-SHIRT BLACK',
    img: 'https://image.msscdn.net/images/goods_img/20240123/3814881/3814881_17065880915476_500.jpg',
    price: 73000,
    description:
      '[acmé de la vie] HALFTONE DOT LAYER FUZZY RABBIT SHORT SLEEVE T-SHIRT BLACK',
    type: "women's clothing",
  },
  {
    id: 18,
    name: 'WAVE Logo Symbol Coloring Short Sleeve Hoodie_White',
    img: 'https://image.msscdn.net/images/goods_img/20240319/3968304/3968304_17110841332619_500.jpg',
    price: 79000,
    description:
      '[Codegraphy] WAVE Logo Symbol Coloring Short Sleeve Hoodie_White',
    type: "women's clothing",
  },
  {
    id: 19,
    name: 'Henley neck layered sleeveless',
    img: 'https://image.msscdn.net/images/goods_img/20240411/4046879/4046879_17128451480093_500.jpg',
    price: 47000,
    description: '[MOAA] Henley neck layered sleeveless',
    type: "women's clothing",
  },
];
