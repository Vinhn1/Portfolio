import Clients from "@/components/Clients";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* Floating Navigation Bar - Hiển thị menu điều hướng nổi */}
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "/",
              icon: <FaHome />,
            },
          ]}
        />
        {/* Hero (Giao diện chính) */}
        <Hero />
        {/* Grid - Hiển thị lưới các dự án hoặc nội dung chính */}
        <Grid />
        {/* RecentProjects - Hiển thị danh sách các dự án gần đây */}
        <RecentProjects />
        {/* Clients -   hiển thị phần đánh giá từ khách hàng (testimonials) và logo các công ty đã từng làm việc (companies) */}
        <Clients />
        {/* Experience */}
        {/* Approach */}
        {/* Footer */}
      </div>
    </main>
  );
}
