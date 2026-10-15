export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  desc: string;
  icon: string;
  gradient: [string, string];
  tag?: string;
};

export type Category = { key: string; label: string; icon: string };

export const CATEGORIES: Category[] = [
  { key: "数码", label: "数码", icon: "phone" },
  { key: "服饰", label: "服饰", icon: "shirt" },
  { key: "家居", label: "家居", icon: "sofa" },
  { key: "美食", label: "美食", icon: "coffee" },
  { key: "美妆", label: "美妆", icon: "sparkles" },
  { key: "运动", label: "运动", icon: "sneaker" },
  { key: "母婴", label: "母婴", icon: "doll" },
  { key: "图书", label: "图书", icon: "book" },
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "无线降噪耳机 · 月光白",
    price: 599,
    originalPrice: 699,
    category: "数码",
    icon: "headphone",
    gradient: ["#1B3A5C", "#2E5A86"],
    desc: "40mm 动圈单元，自适应主动降噪，续航 32 小时。通勤与办公的安静伴侣。",
    tag: "热卖",
  },
  {
    id: "p2",
    name: "智能手表 S 系列",
    price: 1299,
    category: "数码",
    icon: "watch",
    gradient: ["#FF4D2D", "#FF7A5C"],
    desc: "全天候心率与血氧监测，50 米防水，支持离线支付。",
    tag: "新品",
  },
  {
    id: "p3",
    name: "纯棉基础圆领 T 恤",
    price: 89,
    category: "服饰",
    icon: "shirt",
    gradient: ["#2D6A4F", "#4C8B6C"],
    desc: "260g 重磅纯棉，垂坠挺括不透视，基础款百搭。",
  },
  {
    id: "p4",
    name: "极简帆布托特包",
    price: 129,
    originalPrice: 159,
    category: "服饰",
    icon: "bag",
    gradient: ["#D98E4A", "#E7B36A"],
    desc: "16 安帆布，内置磁吸收纳袋，可放 14 英寸笔记本。",
  },
  {
    id: "p5",
    name: "模块化布艺沙发",
    price: 3299,
    category: "家居",
    icon: "sofa",
    gradient: ["#1B3A5C", "#24486E"],
    desc: "可自由组合的模块设计，高回弹海绵，拆洗方便。",
    tag: "热卖",
  },
  {
    id: "p6",
    name: "北欧风落地灯",
    price: 399,
    originalPrice: 469,
    category: "家居",
    icon: "lamp",
    gradient: ["#FF4D2D", "#E83A1A"],
    desc: "2700K 暖光，三档调光，原木灯脚与极简灯罩。",
  },
  {
    id: "p7",
    name: "手冲咖啡礼盒",
    price: 159,
    category: "美食",
    icon: "coffee",
    gradient: ["#2D6A4F", "#2E7A5B"],
    desc: "三种产区单品豆 + 便携滤杯，附冲煮指南卡片。",
  },
  {
    id: "p8",
    name: "黑巧坚果能量棒",
    price: 39,
    category: "美食",
    icon: "cake",
    gradient: ["#C97B3D", "#E09B5A"],
    desc: "70% 黑巧与烤坚果，一根 180 千卡，健身随手补给。",
  },
  {
    id: "p9",
    name: "丝绒哑光口红",
    price: 199,
    originalPrice: 239,
    category: "美妆",
    icon: "lipstick",
    gradient: ["#FF4D2D", "#FF6B4A"],
    desc: "丝绒哑光质地，显色持久不拔干，通勤百搭色。",
    tag: "新品",
  },
  {
    id: "p10",
    name: "轻盈慢跑鞋",
    price: 499,
    category: "运动",
    icon: "sneaker",
    gradient: ["#1B3A5C", "#2E5A86"],
    desc: "缓震中底，鞋面透气网布，日常慢跑与通勤皆宜。",
  },
  {
    id: "p11",
    name: "云朵安抚玩偶",
    price: 69,
    category: "母婴",
    icon: "doll",
    gradient: ["#E7A9A0", "#F3C6BE"],
    desc: "云朵造型，亲肤短绒，可机洗，陪伴宝宝安稳入睡。",
  },
  {
    id: "p12",
    name: "精装设计画册",
    price: 149,
    category: "图书",
    icon: "book",
    gradient: ["#2D6A4F", "#3F7A5E"],
    desc: "精选全球视觉案例，布面精装，附独立海报页。",
  },
];

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
