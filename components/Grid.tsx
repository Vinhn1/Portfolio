// File này định nghĩa component Grid
// Chức năng: Hiển thị phần giới thiệu (about) với layout dạng lưới, sử dụng các item từ dữ liệu và component BentoGrid

// Import dữ liệu các item cho grid từ thư mục data
import { gridItems } from "@/data";
// Import các component liên quan đến layout grid
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

/**
 * Component Grid
 * Chức năng: Hiển thị danh sách các BentoGridItem trong một layout lưới đẹp mắt.
 */
const Grid = () => {
  return (
    // Section với id="about" để định vị trên trang
    <section id="about">
      {/* Sử dụng BentoGrid để tạo layout lưới, truyền className để tùy chỉnh giao diện */}
      <BentoGrid className="w-full py-20">
        {/* Lặp qua từng item trong gridItems để render BentoGridItem */}
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id} // id của item
            key={i} // key cho React
            title={item.title} // tiêu đề
            description={item.description} // mô tả
            className={item.className} // className tuỳ chỉnh cho từng item
            img={item.img} // hình ảnh chính
            imgClassName={item.imgClassName} // class cho hình ảnh
            titleClassName={item.titleClassName} // class cho tiêu đề
            spareImg={item.spareImg} // hình ảnh phụ (nếu có)
          />
        ))}
      </BentoGrid>
    </section>
  );
};

// Xuất component Grid để sử dụng ở nơi khác
export default Grid;
