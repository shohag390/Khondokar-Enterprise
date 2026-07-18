import { Link } from "react-router";
import SectionHeader from "../../shared/SectionHeader";
import Product from "./Product";

const products = [
  {
    id: "688c7a9e4f1b2c3d5e6f8001",
    productName: "মাটাডোর HB পেন্সিল",
    productCatagoris: "স্টেশনারি",
    price: 15,
    discountPrice: 12,
    productQuntity: 120,
    companyName: "Matador",
    storLoacation: "খন্দকার এন্টারপ্রাইজ, ডিসি কোর্ট, কুষ্টিয়া",
    description:
      "উচ্চ মানের HB পেন্সিল। স্কুল, কলেজ ও অফিসের দৈনন্দিন লেখালেখির জন্য উপযুক্ত।",
    productURL:
      "https://i.ibb.co.com/xtWvHx1s/b5e126fdb130e4961e19ba8d144bf2aa.jpg",
  },
  {
    id: "688c7a9e4f1b2c3d5e6f8002",
    productName: "A4 কপি পেপার (80 GSM)",
    productCatagoris: "পেপার",
    price: 550,
    discountPrice: 520,
    productQuntity: 80,
    companyName: "Double A",
    storLoacation: "খন্দকার এন্টারপ্রাইজ, ডিসি কোর্ট, কুষ্টিয়া",
    description:
      "উচ্চ মানের 80 GSM A4 সাদা কাগজ। প্রিন্টার ও ফটোকপির জন্য উপযুক্ত।",
    productURL:
      "https://i.ibb.co.com/N6DQgqWz/A4-Paper-80-GSM-70g-Card-Board-A4-Copy-Paper.avif",
  },
  {
    id: "688c7a9e4f1b2c3d5e6f8003",
    productName: "ক্লাসমেট নোটবুক",
    productCatagoris: "নোটবুক",
    price: 95,
    discountPrice: 85,
    productQuntity: 60,
    companyName: "Classmate",
    storLoacation: "খন্দকার এন্টারপ্রাইজ, ডিসি কোর্ট, কুষ্টিয়া",
    description:
      "উচ্চ মানের কাগজের নোটবুক। ছাত্র-ছাত্রী ও অফিস ব্যবহারের জন্য উপযুক্ত।",
    productURL: "https://i.ibb.co.com/KxxPHnjd/51uo-K-Ek-Ek-L-grande.jpg",
  },
  {
    id: "688c7a9e4f1b2c3d5e6f8004",
    productName: "প্লাস্টিক ফাইল ফোল্ডার",
    productCatagoris: "অফিস ফাইল",
    price: 40,
    discountPrice: 35,
    productQuntity: 100,
    companyName: "Deli",
    storLoacation: "খন্দকার এন্টারপ্রাইজ, ডিসি কোর্ট, কুষ্টিয়া",
    description: "গুরুত্বপূর্ণ কাগজপত্র সংরক্ষণের জন্য টেকসই প্লাস্টিক ফাইল।",
    productURL: "https://i.ibb.co.com/XrxKWfF0/images.jpg",
  },
  {
    id: "688c7a9e4f1b2c3d5e6f8005",
    productName: "বল পেন",
    productCatagoris: "স্টেশনারি",
    price: 10,
    discountPrice: 8,
    productQuntity: 300,
    companyName: "Matador",
    storLoacation: "খন্দকার এন্টারপ্রাইজ, ডিসি কোর্ট, কুষ্টিয়া",
    description: "মসৃণ কালি ও আরামদায়ক গ্রিপসহ উন্নত মানের বল পেন।",
    productURL: "https://i.ibb.co.com/p6x3Nw12/q-Xp1o.png",
  },
  {
    id: "688c7a9e4f1b2c3d5e6f8006",
    productName: "জ্যামিতি বক্স",
    productCatagoris: "শিক্ষা সামগ্রী",
    price: 220,
    discountPrice: 200,
    productQuntity: 40,
    companyName: "Nataraj",
    storLoacation: "খন্দকার এন্টারপ্রাইজ, ডিসি কোর্ট, কুষ্টিয়া",
    description: "কম্পাস, স্কেল, প্রোট্র্যাক্টরসহ সম্পূর্ণ জ্যামিতি বক্স।",
    productURL: "https://i.ibb.co.com/5hnmzRZs/images-1.jpg",
  },
  {
    id: "688c7a9e4f1b2c3d5e6f8007",
    productName: "রঙ পেন্সিল (১২ রঙ)",
    productCatagoris: "ড্রয়িং",
    price: 180,
    discountPrice: 160,
    productQuntity: 50,
    companyName: "Faber-Castell",
    storLoacation: "খন্দকার এন্টারপ্রাইজ, ডিসি কোর্ট, কুষ্টিয়া",
    description: "উজ্জ্বল ও আকর্ষণীয় ১২ রঙের কালার পেন্সিল সেট।",
    productURL:
      "https://i.ibb.co.com/Y7wRWYPy/5063afd16b15eeafdbd33fbb6bb243a8-jpg-720x720q80.jpg",
  },
  {
    id: "688c7a9e4f1b2c3d5e6f8008",
    productName: "খেলনা গাড়ি",
    productCatagoris: "খেলনা",
    price: 280,
    discountPrice: 250,
    productQuntity: 35,
    companyName: "Toy House",
    storLoacation: "খন্দকার এন্টারপ্রাইজ, ডিসি কোর্ট, কুষ্টিয়া",
    description: "শিশুদের জন্য নিরাপদ ও টেকসই প্লাস্টিকের খেলনা গাড়ি।",
    productURL: "https://i.ibb.co.com/YFQKRgBb/images-2.jpg",
  },
];

const Products = () => {
  return (
    <section className="py-8 md:py-10 lg:py-12 px-5 md:px-13 lg:px-25 2xl:px-40 bg-[#f5f7fd]">
      <SectionHeader
        title="আমাদের পণ্য"
        subTitle="আমাদের পণ্য গুলো দেখে ক্রয় করুন"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 2xl:gap-6">
        {products.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
      <div className="flex items-center justify-center pt-10">
        <button>
          <Link
            to="/all-products"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            সকল পণ্য দেখুন
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Products;
