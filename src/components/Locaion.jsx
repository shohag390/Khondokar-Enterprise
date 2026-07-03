import React from "react";

const Locaion = () => {
  return (
    <div className="py-8 md:py-10 lg:py-12 px-5 md:px-13 lg:px-25 2xl:px-40 bg-[#f5f7fd]">
      <div className="w-full h-75 md:h-112 lg:h-130 rounded-2xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.6902642708537!2d89.11788947593087!3d23.900599582992527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe97d2db8d35a1%3A0x4efc594f282a3393!2z4KaV4KeB4Ka34KeN4Kaf4Ka_4Kav4Ka84Ka-IOCmoeCmv-CmuOCmvyDgppXgp4vgprDgp43gpp8g4Kac4Ka-4Kau4KeHIOCmruCmuOCmnOCmv-Cmpg!5e0!3m2!1sen!2sbd!4v1783060724330!5m2!1sen!2sbd"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Locaion;
