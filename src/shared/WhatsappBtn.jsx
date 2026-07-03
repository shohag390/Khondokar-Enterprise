import { RiWhatsappFill } from "react-icons/ri";

const WhatsappBtn = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "আসসালামু আলাইকুম, আমি আপনার সার্ভিস সম্পর্কে জানতে চাই।",
    );

    window.open(`https://wa.me/8801580380498?text=${message}`, "_blank");
  };
  return (
    <button
      onClick={handleWhatsApp}
      className="flex items-center gap-2 px-5 md:px-6 lg:px-7 2xl:px-8 py-2 md:py-2.5 lg:py-3 2xl:py-3.5 bg-transparent hover:bg-[#0537ce] border border-[#1953fb] duration-500 text-[#1953fb] hover:text-[#ffff] rounded-full"
    >
      <RiWhatsappFill className="text-[20px] text-[#01ca01]" />
      <span className="text-[14px] md:text-[16px]">WhatsApp</span>
    </button>
  );
};

export default WhatsappBtn;
