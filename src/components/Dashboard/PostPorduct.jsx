const PostPorduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <div>
      <h4 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium lg:font-bold text-[#0537ce] pb-3 md:pb-4 lg:pb-5">
        Add Products
      </h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="flex flex-col gap-6 p-6 bg-[#f5f7fd] w-full rounded-xl">
            <div className="flex flex-col gap-2">
              <label className="text-[#000000] font-medium md:font-semibold lg:font-bold">
                Product Name
              </label>
              <input
                className="px-3 lg:px-4 py-2.5 md:py-3 lg:py-3.5 bg-[#ffff] rounded-md focus:outline-0 text-[14px] md:text-[16px]"
                type="text"
                name="productName"
                placeholder="Product Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#000000] font-medium md:font-semibold lg:font-bold">
                Product Catagoris
              </label>
              <input
                className="px-3 lg:px-4 py-2.5 md:py-3 lg:py-3.5 bg-[#ffff] rounded-md focus:outline-0 text-[14px] md:text-[16px]"
                type="text"
                name="productCatagoris"
                placeholder="Product Catagoris"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 p-6 bg-[#f5f7fd] w-full rounded-xl">
            <div className="flex flex-col gap-2">
              <label className="text-[#000000] font-medium md:font-semibold lg:font-bold">
                Price
              </label>
              <input
                className="px-3 lg:px-4 py-2.5 md:py-3 lg:py-3.5 bg-[#ffff] rounded-md focus:outline-0 text-[14px] md:text-[16px]"
                type="number"
                name="price"
                placeholder="Price"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#000000] font-medium md:font-semibold lg:font-bold">
                Discount Price
              </label>
              <input
                className="px-3 lg:px-4 py-2.5 md:py-3 lg:py-3.5 bg-[#ffff] rounded-md focus:outline-0 text-[14px] md:text-[16px]"
                type="number"
                name="discountPrice"
                placeholder="Discount Price"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="flex flex-col gap-6 p-6 bg-[#f5f7fd] w-full rounded-xl">
            <div className="flex flex-col gap-2">
              <label className="text-[#000000] font-medium md:font-semibold lg:font-bold">
                Product URL
              </label>
              <input
                className="px-3 lg:px-4 py-2.5 md:py-3 lg:py-3.5 bg-[#ffff] rounded-md focus:outline-0 text-[14px] md:text-[16px]"
                type="url"
                name="productURL"
                placeholder="Product Image URL"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#000000] font-medium md:font-semibold lg:font-bold">
                Product Quntity
              </label>
              <input
                className="px-3 lg:px-4 py-2.5 md:py-3 lg:py-3.5 bg-[#ffff] rounded-md focus:outline-0 text-[14px] md:text-[16px]"
                type="number"
                name="productQuntity"
                placeholder="Product Quntity"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 p-6 bg-[#f5f7fd] w-full rounded-xl">
            <div className="flex flex-col gap-2">
              <label className="text-[#000000] font-medium md:font-semibold lg:font-bold">
                Company Name
              </label>
              <input
                className="px-3 lg:px-4 py-2.5 md:py-3 lg:py-3.5 bg-[#ffff] rounded-md focus:outline-0 text-[14px] md:text-[16px]"
                type="text"
                name="companyName"
                placeholder="Company Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#000000] font-medium md:font-semibold lg:font-bold">
                Stor Loacation
              </label>
              <input
                className="px-3 lg:px-4 py-2.5 md:py-3 lg:py-3.5 bg-[#ffff] rounded-md focus:outline-0 text-[14px] md:text-[16px]"
                type="text"
                name="storLoacation"
                defaultValue={"DC Cort, Kushtia"}
                placeholder="Stor Loacation"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-6 bg-[#f5f7fd] w-full rounded-xl">
          <div className="flex flex-col gap-2">
            <label className="text-[#000000] font-medium md:font-semibold lg:font-bold">
              Product Description
            </label>
            <textarea
              rows={5}
              className="px-3 lg:px-4 py-2.5 md:py-3 lg:py-3.5 bg-[#ffff] rounded-md focus:outline-0 text-[14px] md:text-[16px]"
              name="description"
              placeholder=" Product Description"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex items-center gap-2 px-5 md:px-6 lg:px-7 2xl:px-8 py-2 md:py-2.5 lg:py-3 2xl:py-3.5 bg-[#1953fb] hover:bg-[#0537ce] duration-500 text-[#ffff] text-[14px] md:text-[16px] rounded-full group"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostPorduct;
