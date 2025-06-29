import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Hiệu ứng Spotlight (Đèn chiếu)
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        {/* Spotlight đầu tiên: màu trắng, vị trí ở góc trên bên trái, chiều cao toàn màn hình */}
        <Spotlight
          className="-top-40 -left-10 md:-top-20 h-screen"
          fill="white"
        />
        {/* Spotlight thứ hai: màu mặc định (trắng), vị trí ở bên phải màn hình */}
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" />
        {/* Spotlight thứ ba: màu xanh, vị trí ở giữa phải màn hình */}
        <Spotlight className="left-80 top-20 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: Lưới nền (Grid Background)
       *  Thay đổi màu nền thành bg-black-100 và giảm độ trong suốt của lưới từ
       *  0.2 xuống 0.03 để tạo hiệu ứng tinh tế hơn
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Gradient xuyên tâm cho container để tạo hiệu ứng mờ dần */}
        <div
          // Thay đổi bg thành bg-black-100 để khớp với màu nền và hòa trộn tự nhiên
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Khu vực dành cho nội dung chính của Hero section */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* Dòng text phụ (subtitle) */}
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *  Tạo hiệu ứng đánh chữ từng ký tự một, giống như đang gõ
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          {/* Personal introduction text - giới thiệu cá nhân */}
          <p className="text-center md:tracking-wide mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Adrian, a Next.js Developer based in Croatia
          </p>

            {/* Button */}
          <a href="#about">
            <MagicButton 
              title="Show my work" 
              icon={<FaLocationArrow/>} 
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
