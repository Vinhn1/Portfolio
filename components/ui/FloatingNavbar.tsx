"use client";

// Import các thư viện React và motion để tạo hiệu ứng động
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";

/**
 * File này định nghĩa component FloatingNav (thanh điều hướng nổi)
 * Chức năng: Hiển thị một thanh điều hướng nổi trên đầu trang, tự động ẩn/hiện dựa vào hành vi cuộn trang của người dùng.
 * Thanh này giúp người dùng truy cập nhanh các mục chính và có nút đăng nhập.
 */

// Component FloatingNav nhận vào danh sách navItems và className tuỳ chỉnh
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactElement;
  }[];
  className?: string;
}) => {
  // Lấy giá trị cuộn trang (scrollYProgress) từ motion
  const { scrollYProgress } = useScroll();

  // State kiểm soát việc hiển thị thanh nav
  const [visible, setVisible] = useState(false);

  // Theo dõi sự thay đổi của scrollYProgress để xác định khi nào hiện/ẩn nav
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Nếu ở gần đầu trang thì ẩn nav
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        // Nếu cuộn lên thì hiện nav, cuộn xuống thì ẩn nav
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    // AnimatePresence giúp chuyển động mượt mà khi nav xuất hiện/biến mất
    <AnimatePresence mode="wait">
      {/* motion.div tạo hiệu ứng chuyển động cho nav */}
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          // Các class tailwind cho giao diện nav
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {/* Lặp qua từng navItem để tạo các link điều hướng */}
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            {/* Hiển thị icon trên mobile, tên trên desktop */}
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </a>
        ))}
        {/* Nút đăng nhập ở cuối nav */}
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
