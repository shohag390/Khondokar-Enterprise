const Review = () => {
  return (
    <div>
      <h4 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium lg:font-bold text-[#0537ce] pb-3 md:pb-4 lg:pb-5">
        Review This Stor
      </h4>

      <form className="flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="flex flex-col gap-6 p-6 bg-[#f5f7fd] w-full rounded-xl">
            <div className="flex flex-col gap-2">
              <label className="text-[#000000] font-medium md:font-semibold lg:font-bold">
                Full Name
              </label>
              <input
                className="px-3 lg:px-4 py-2.5 md:py-3 lg:py-3.5 bg-[#ffff] rounded-md focus:outline-0 text-[14px] md:text-[16px]"
                type="text"
                name="name"
                placeholder="Full Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#000000] font-medium md:font-semibold lg:font-bold">
                Ocupation
              </label>
              <input
                className="px-3 lg:px-4 py-2.5 md:py-3 lg:py-3.5 bg-[#ffff] rounded-md focus:outline-0 text-[14px] md:text-[16px]"
                type="text"
                name="ocupation"
                placeholder="Ocupation"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 p-6 bg-[#f5f7fd] w-full rounded-xl">
            <div className="flex flex-col gap-2">
              <label className="text-[#000000] font-medium md:font-semibold lg:font-bold">
                Rating
              </label>
              <input
                className="px-3 lg:px-4 py-2.5 md:py-3 lg:py-3.5 bg-[#ffff] rounded-md focus:outline-0 text-[14px] md:text-[16px]"
                type="number"
                name="rating"
                placeholder="Rating (1-5)"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#000000] font-medium md:font-semibold lg:font-bold">
                Image URL
              </label>
              <input
                className="px-3 lg:px-4 py-2.5 md:py-3 lg:py-3.5 bg-[#ffff] rounded-md focus:outline-0 text-[14px] md:text-[16px]"
                type="url"
                name="image"
                placeholder="Image URL"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 p-6 bg-[#f5f7fd] w-full rounded-xl">
          <div className="flex flex-col gap-2">
            <label className="text-[#000000] font-medium md:font-semibold lg:font-bold">
              Description
            </label>
            <textarea
              rows={5}
              className="px-3 lg:px-4 py-2.5 md:py-3 lg:py-3.5 bg-[#ffff] rounded-md focus:outline-0 text-[14px] md:text-[16px]"
              name="description"
              placeholder="Description"
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

export default Review;
