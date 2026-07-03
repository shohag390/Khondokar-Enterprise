import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { FaQuoteLeft, FaStar } from "react-icons/fa";
import SectionHeader from "../shared/SectionHeader";
import Rating from "react-rating";

const customerReviews = [
  {
    id: 1,
    name: "রাহাত ইসলাম",
    profession: "গ্রাহক",
    rating: 3,
    image: "https://i.pravatar.cc/150?img=11",
    review:
      "খুবই ভালো সেবা পেয়েছি। সময়মতো কাজ সম্পন্ন হয়েছে এবং আচরণও ছিল অত্যন্ত আন্তরিক। ধন্যবাদ কুষ্টিয়া ডিজি কর্নার।",
  },
  {
    id: 2,
    name: "মোস্তাফিজুর রহমান",
    profession: "শিক্ষার্থী",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "বিশ্ববিদ্যালয় ভর্তি আবেদন খুব দ্রুত করে দিয়েছেন। কোনো ঝামেলা ছাড়াই কাজ শেষ হয়েছে।",
  },
  {
    id: 3,
    name: "নাজমুল হোসেন",
    profession: "ব্যবসায়ী",
    rating: 2,
    image: "https://i.pravatar.cc/150?img=13",
    review:
      "ট্রেড লাইসেন্স আবেদন এবং প্রিন্টিং সার্ভিস দুটোই নিয়েছি। কাজের মান ও ব্যবহার সত্যিই প্রশংসনীয়।",
  },
  {
    id: 4,
    name: "তানিয়া আক্তার",
    profession: "চাকরিজীবী",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "পাসপোর্ট আবেদন থেকে শুরু করে প্রয়োজনীয় ডকুমেন্ট প্রিন্ট—সব এক জায়গায় পেয়ে খুবই সন্তুষ্ট।",
  },
  {
    id: 5,
    name: "সাকিব হোসেন",
    profession: "ফ্রিল্যান্সার",
    rating: 3,
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "ডিজাইন সার্ভিস অসাধারণ। আমার বিজনেস কার্ড ও লোগো খুব সুন্দরভাবে ডিজাইন করে দিয়েছেন।",
  },
  {
    id: 4,
    name: "জান্নাতুল ফেরদৌস",
    profession: "গ্রাহক",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "স্ক্যানিং ও লেমিনেশন সার্ভিস খুব দ্রুত পেয়েছি। কাজের মানও অনেক ভালো ছিল।",
  },
  {
    id: 7,
    name: "ইমরান হোসেন",
    profession: "শিক্ষার্থী",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=18",
    review:
      "চাকরির আবেদন করার সময় অনেক সাহায্য পেয়েছি। প্রতিটি ধাপে সুন্দরভাবে গাইড করেছেন।",
  },
  {
    id: 8,
    name: "মারুফ হাসান",
    profession: "আইনজীবী",
    rating: 3,
    image: "https://i.pravatar.cc/150?img=19",
    review:
      "বার কাউন্সিল আবেদন খুব নিখুঁতভাবে সম্পন্ন করে দিয়েছেন। সার্ভিস ও ব্যবহার দুটোই চমৎকার।",
  },
  {
    id: 9,
    name: "সাবিনা ইয়াসমিন",
    profession: "শিক্ষিকা",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=45",
    review:
      "সার্টিফিকেট স্ক্যান, প্রিন্ট ও লেমিনেশন সবগুলো সেবা একসাথে নিয়েছি। খুবই সন্তুষ্ট।",
  },
  {
    id: 10,
    name: "আল আমিন",
    profession: "উদ্যোক্তা",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=22",
    review:
      "অনলাইন আবেদন থেকে শুরু করে ডিজাইন পর্যন্ত সব ধরনের ডিজিটাল সেবা এক জায়গায় পেয়েছি। ভবিষ্যতেও এখান থেকেই সেবা নেব।",
  },
];

const Testimonial = () => {
  return (
    <section className="py-8 md:py-10 lg:py-12 px-5 md:px-13 lg:px-25 2xl:px-40">
      <SectionHeader
        title={"গ্রাহকদের মূল্যবান মতামত"}
        subTitle={
          "আমাদের সেবার মান সম্পর্কে গ্রাহকদের বাস্তব অভিজ্ঞতা ও মূল্যবান মতামত।"
        }
      />

      <Swiper
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        spaceBetween={25}
        autoplay
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {customerReviews.map((review) => (
          <SwiperSlide className="w-full" key={review.id}>
            <div className="bg-[#ffff] p-4 md:p-5 lg:p-6 rounded-2xl border border-gray-200 cursor-pointer hover:-translate-y-1 duration-500 mb-15">
              <FaQuoteLeft className="text-[#1953fb] text-[30px] md:text-[35px] lg:text-[40px]" />

              <p className="text-[14px] md:text-[16px] text-gray-500 pt-4 lg:pt-5 line-clamp-2 text-justify">
                "{review.review}"
              </p>

              <div className="flex justify-between pt-6 md:pt-7 lg:pt-8">
                <div className="flex items-center gap-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full border-2 border-[#1953fb]"
                  />

                  <div>
                    <h4 className="text-[17px] lg:text-[18px] font-medium lg:font-bold">
                      {review.name}
                    </h4>
                    <p className="text-[14px] md:text-[16px] text-gray-500">
                      {review.profession}
                    </p>
                  </div>
                </div>
                <div className="">
                  <Rating
                    readonly
                    fullSymbol={
                      <FaStar className="text-[#ffbd07] text-[18px]" />
                    }
                    emptySymbol={
                      <FaStar className="text-[#6e6e6e7a] text-[18px]" />
                    }
                    initialRating={review?.rating}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
