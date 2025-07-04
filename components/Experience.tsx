import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorder";

const Experience = () => {
  return (
    <div className="w-full py-20">
      {/* Tiêu đề */}
      <h1 className="heading">
        My
        <span className="text-purple"> work experience </span>
      </h1>
      {/* Grid hiển thị thẻ kinh nghiệm */}
      {/* - lg:grid-cols-4: trên màn hình lớn thì chia    thành 4 cột
          - grid-cols-1: mặc định 1 cột (mobile) 
      */}
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {/* Map dữ liệu từ workExperience */}
        {workExperience.map((card) => (
          // Button có hiệu ứng chuyển động
          <Button
            key={card.id}
            durarion={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4, 7, 29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            {/* Nội dung bên trong Button */}
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              {/* Hình ảnh và mô tả */}
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
