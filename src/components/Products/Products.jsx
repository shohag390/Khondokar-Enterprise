import SectionHeader from "../../shared/SectionHeader";
import onlineApplication from "../../assets/image/online-application.png";
import printingService from "../../assets/image/printing-service.png";
import photocopyService from "../../assets/image/photocopy-service.png";
import scanningService from "../../assets/image/scanning-service.png";
import designService from "../../assets/image/design-service.png";
import laminationService from "../../assets/image/lamination-service.png";
import { Link } from "react-router";

const product = [
  {
    id: "688c7a9e4f1b2c3d5e6f7891",
    productName: "অনলাইন আবেদন",
    productCatagoris: "সব ধরনের সরকারি ও",
    price: 12,
    discountPrice: 10,
    productQuntity: 1,
    companyName: "Matador",
    storLoacation: "DC Cort, Kushtia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.",
    productURL: onlineApplication,
  },
  {
    id: "688c7a9e4f1b2c3d5e6f7892",
    productName: "অনলাইন আবেদন",
    productCatagoris: "সব ধরনের সরকারি ও",
    price: 12,
    discountPrice: 10,
    productQuntity: 1,
    companyName: "Matador",
    storLoacation: "DC Cort, Kushtia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.",
    productURL: printingService,
  },
  {
    id: "688c7a9e4f1b2c3d5e6f7893",
    productName: "অনলাইন আবেদন",
    productCatagoris: "সব ধরনের সরকারি ও",
    price: 12,
    discountPrice: 10,
    productQuntity: 1,
    companyName: "Matador",
    storLoacation: "DC Cort, Kushtia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.",
    productURL: photocopyService,
  },
  {
    id: "688c7a9e4f1b2c3d5e6f7894",
    productName: "অনলাইন আবেদন",
    productCatagoris: "সব ধরনের সরকারি ও",
    price: 12,
    discountPrice: 10,
    productQuntity: 1,
    companyName: "Matador",
    storLoacation: "DC Cort, Kushtia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.",
    productURL: scanningService,
  },
  {
    id: "688c7a9e4f1b2c3d5e6f7895",
    productName: "অনলাইন আবেদন",
    productCatagoris: "সব ধরনের সরকারি ও",
    price: 12,
    discountPrice: 10,
    productQuntity: 1,
    companyName: "Matador",
    storLoacation: "DC Cort, Kushtia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.",
    productURL: designService,
  },
  {
    id: "688c7a9e4f1b2c3d5e6f7896",
    productName: "অনলাইন আবেদন",
    productCatagoris: "সব ধরনের সরকারি ও",
    price: 12,
    discountPrice: 10,
    productQuntity: 1,
    companyName: "Matador",
    storLoacation: "DC Cort, Kushtia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.",
    productURL: laminationService,
  },
  {
    id: "688c7a9e4f1b2c3d5e6f7895",
    productName: "অনলাইন আবেদন",
    productCatagoris: "সব ধরনের সরকারি ও",
    price: 12,
    discountPrice: 10,
    productQuntity: 1,
    companyName: "Matador",
    storLoacation: "DC Cort, Kushtia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.",
    productURL: photocopyService,
  },
  {
    id: "688c7a9e4f1b2c3d5e6f7896",
    productName: "অনলাইন আবেদন",
    productCatagoris: "সব ধরনের সরকারি ও",
    price: 12,
    discountPrice: 10,
    productQuntity: 1,
    companyName: "Matador",
    storLoacation: "DC Cort, Kushtia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.",
    productURL: scanningService,
  },
  {
    id: "688c7a9e4f1b2c3d5e6f7897",
    productName: "অনলাইন আবেদন",
    productCatagoris: "সব ধরনের সরকারি ও",
    price: 12,
    discountPrice: 10,
    productQuntity: 1,
    companyName: "Matador",
    storLoacation: "DC Cort, Kushtia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.",
    productURL: designService,
  },
  {
    id: "688c7a9e4f1b2c3d5e6f7898",
    productName: "অনলাইন আবেদন",
    productCatagoris: "সব ধরনের সরকারি ও",
    price: 12,
    discountPrice: 10,
    productQuntity: 1,
    companyName: "Matador",
    storLoacation: "DC Cort, Kushtia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, enim.",
    productURL: laminationService,
  },
];
const Products = () => {
  return (
    <section className="py-8 md:py-10 lg:py-12 px-5 md:px-13 lg:px-25 2xl:px-40 bg-[#f5f7fd]">
      <SectionHeader
        title={"আমাদের পণ্য"}
        subTitle={"আমাদের পণ্য গুলো দেখে ক্রয় করুন"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 2xl:gap-6">
        {product?.map((service) => (
          <Link
            to={``}
            className="bg-[#ffff] p-4 md:p-5 lg:p-6 flex flex-col items-center justify-center rounded-2xl border border-gray-200 cursor-pointer hover:-translate-y-1 duration-500"
            key={service?.id}
          >
            <img
              className="h-30 w-30 rounded-full"
              src={service?.image}
              alt=""
            />
            <div className="pt-3 lg:pt-4 text-center">
              <h4 className="text-[16px] lg:text-[18px] font-semibold lg:font-bold text-[#0537ce] pb-2">
                {service?.title}
              </h4>
              <p className="text-[14px] md:text-[16px] text-gray-500">
                {service?.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
