"use client"; // 	Cho phép sử dụng logic client-side như animation, state...

import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data/index";

const Clients = () => {
  return (
    <section id="testimonials" className="py-4">
      {/* Tiêu đề */}
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>
      {/* Testimonials -> Các đánh giá */}
      <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        {/* Hiển thị các đánh giá trượt liên tục từ phải qua trái  */}
        <InfiniteMovingCards
          items={testimonials} // Các bài đánh giá
          direction="right" // trượt liên tục từ phải qua trái
          speed="slow"
        />
      </div>

      {/* Logo các công ty làm việc */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
        {companies.map((company) => (
          <React.Fragment key={company.id}>
            <div className="flex md:max-w-60 max-w-32 gap-2">
              <img
                src={company.img}
                alt={company.name}
                className="md:w-10 w-5"
              />
              <img src={company.nameImg} alt={company.name} width={company.id === 4 || company.id === 5 ? 100 : 150} className="md:w-24 w-20" />
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Clients;
