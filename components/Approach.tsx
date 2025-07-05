import React from "react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import Card from "./ui/Card";
import AceternityIcon from "./ui/AceternityIcon";

/**
 * Component Approach
 * Chức năng: Hiển thị 3 giai đoạn trong quy trình làm việc của developer
 * Gồm: Planning & Strategy → Development & Progress Update → Development & Launch
 * Mỗi giai đoạn được hiển thị trong một Card với hiệu ứng CanvasRevealEffect
 */
const Approach = () => {
  return (
    <section className="w-full py-4">
      {/* Tiêu đề chính của section */}
      <h1 className="heading">
        My
        <span className="text-purple"> Approach</span>
      </h1>
      
      {/* Container chứa 3 card giai đoạn làm việc */}
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-y-4">
        {/* Card 1: Giai đoạn Lập kế hoạch & Chiến lược */}
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          des="We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements."
        >
          {/* Hiệu ứng canvas với màu xanh lá (emerald) */}
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        
        {/* Card 2: Giai đoạn Phát triển & Cập nhật tiến độ */}
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="Phase 2" />}
          des="Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way."
        >
          {/* Hiệu ứng canvas với màu hồng và xanh nhạt */}
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158], // Màu hồng
              [221, 255, 247], // Màu xanh nhạt
            ]}
            dotSize={2}
          />
        </Card>
        
        {/* Card 3: Giai đoạn Phát triển & Triển khai */}
        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          des="This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up."
        >
          {/* Hiệu ứng canvas với màu xanh dương */}
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]} // Màu xanh dương
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           