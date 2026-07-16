import { FaCheck, FaEye, FaTimes } from "react-icons/fa";

const MyPostedProducts = () => {
  return (
    <div>
      <h4 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium lg:font-bold text-[#0537ce] pb-3 md:pb-4 lg:pb-5">
        All Products
      </h4>
      {/* Table */}
      <div className="bg-[#ffff] companie-card border border-[#cccccc5d] rounded-2xl overflow-auto">
        <table className="w-full text-left">
          {/* Head */}
          <thead className="bg-gray-100 text-[15px] lg:text-[16px]">
            <tr>
              <th className="py-6 px-4">#</th>
              <th className="py-6 px-4">image</th>
              <th className="py-6 px-4">Name</th>
              <th className="py-6 px-4">Price</th>
              <th className="py-6 px-4 text-center">Actions</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            <tr className="border-b border-[#cccccc5d] hover:bg-gray-50">
              {/* No */}
              <td className="py-5 px-4 font-medium">1</td>

              {/* image */}
              <td className="py-5 px-4 font-medium">
                <img src="" alt="" />
              </td>

              {/* Name */}
              <td className="py-5 px-4 font-medium">Metador Pen</td>

              {/* price */}
              <td className="py-5 px-4 text-[#64748b]">12</td>

              {/* Actions */}
              <td className="p-3">
                <div className="flex justify-center gap-3 text-gray-600">
                  <button className="hover:text-blue-500">
                    <FaEye />
                  </button>

                  <button className="hover:text-green-500">
                    <FaCheck />
                  </button>

                  <button className="hover:text-red-500">
                    <FaTimes />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedProducts;
