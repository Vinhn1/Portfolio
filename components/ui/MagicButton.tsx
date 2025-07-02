import React from 'react'

/**
 * File này định nghĩa component MagicButton
 * Chức năng: Hiển thị một nút bấm với hiệu ứng gradient động, có thể truyền icon, vị trí icon, callback khi click và class tuỳ chỉnh.
 * Props:
 *  - title: Chuỗi tiêu đề nút
 *  - icon: Icon hiển thị bên trái hoặc phải
 *  - position: "left" hoặc "right" để xác định vị trí icon
 *  - handlClick: Hàm callback khi click nút
 *  - ortherClasses: Class tuỳ chỉnh thêm cho nút
 */
const MagicButton = ({title, icon, position, handlClick, ortherClasses} : {
  title: String;
  icon: React.ReactNode,
  position: String;
  handlClick?: () => void;
  ortherClasses?: String;
}) => {
  return (
    // Khối bao ngoài cho nút
    <div>
      {/* Nút bấm chính với hiệu ứng gradient động */}
      <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10" onClick={handlClick}>
        {/* Lớp hiệu ứng gradient động */}
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        {/* Lớp nội dung nút: icon, tiêu đề, class tuỳ chỉnh */}
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${ortherClasses}`}>
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </button>
    </div>
  );
}

// Xuất component MagicButton để sử dụng ở nơi khác
export default MagicButton