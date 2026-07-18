import { Link } from "react-router";

const Product = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-[#ffff] p-4 md:p-5 lg:p-6 flex flex-col items-center justify-center rounded-2xl border border-gray-200 cursor-pointer hover:-translate-y-1 duration-500"
    >
      {/* Image */}
      <div className="relative p-6 flex justify-center w-full">
        <img
          src={product.productURL}
          alt={product.productName}
          className="h-50 w-full"
        />

        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
          ৳{product.price - product.discountPrice} OFF
        </span>

        <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          {product.productCatagoris}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-[16px] lg:text-[18px] font-semibold lg:font-bold text-[#0537ce] pb-2">
          {product.productName}
        </h3>

        <p className="text-[14px] md:text-[16px] text-gray-500 line-clamp-1">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-[16px] lg:text-[18px] font-semibold lg:font-bold text-[#0537ce]">
            ৳{product.discountPrice}
          </span>

          <span className="text-[16px] lg:text-[18px] font-semibold lg:font-bold text-gray-400 line-through">
            ৳{product.price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Product;
