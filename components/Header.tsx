import { IoSearch } from "react-icons/io5";
import Logo from "./Logo";
import { FC, useState } from "react";
import Link from "next/link";
import { AiFillCaretDown } from "react-icons/ai";
import NavMobile from "./NavMobile";
import { GiHamburgerMenu } from "react-icons/gi";

type TypeMenuItem = {
  title: string;
  href?: string;
  options?: any[];
};

const MenuItem: FC<{
  title: string;
  options?: TypeMenuItem[];
  href?: string;
}> = ({ title, options, href }) => {
  return (
    <div className="dropdown relative">
      <div className="uppercase cursor-pointer font-semibold whitespace-nowrap flex items-center gap-2 p-4 hover:bg-gray-100">
        {href ? <Link href={href}>{title}</Link> : title}
        {!!options?.length && <AiFillCaretDown className="shrink-0" />}
      </div>
      {options && (
        <ul className="dropdown-content bg-white border rounded-sm absolute top-0 left-full origin-top-left">
          {options.map((c) => (
            <li
              key={c?.title}
              className="p-4 hover:bg-gray-100 whitespace-nowrap"
            >
              <Link href={c?.href || ""}>{c?.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-sm sticky top-0 z-50 bg-white">
      <nav className="border-b py-4 block">
        <div className="flex items-center justify-between gap-4 container mx-auto">
          <Logo />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gradient-to-t from-[#59BA47] to-[#258345] p-2.5 rounded-md text-lg text-white block md:hidden"
          >
            <GiHamburgerMenu />
          </button>
          <ul className="hidden md:flex items-center gap-2">
            {navs.map((nav) => (
              <li key={nav.title} className="dropdown text-main">
                <div className="uppercase font-semibold flex py-2 p-4 rounded-full border border-transparent hover:border-current transition-colors items-center gap-2">
                  {nav.title} <AiFillCaretDown />
                </div>

                <div className="dropdown-content bg-white absolute top-full left-0 origin-top">
                  {nav.options.map((c) => (
                    <MenuItem
                      key={c.title}
                      title={c.title}
                      options={c.options}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <NavMobile isOpen={isOpen} />
      </nav>
    </header>
  );
};

export const navs = [
  {
    title: "VỀ SMART INVEST",
    options: [
      { title: "GIỚI THIỆU CHUNG", href: "/" },
      {
        title: "QUAN HỆ CỔ ĐÔNG",
        options: [
          { title: "THÔNG TIN CÔNG BỐ", href: "/" },
          { title: "BẢN CÁO BẠCH", href: "/" },
          { title: "BÁO CÁO THƯỜNG NIÊN", href: "/" },
          { title: "BÁO CÁO TÀI CHÍNH", href: "/" },
        ],
      },
      { title: "TIN TỨC SMART INVEST", href: "/" },
      { title: "CƠ HỘI NGHỀ NGHIỆP", href: "/" },
      { title: "LIÊN HỆ", href: "/" },
      { title: "HỎI ĐÁP", href: "/" },
      { title: "HOẠT ĐỘNG SỰ KIỆN", href: "/" },
    ],
  },
  {
    title: "DỊCH VỤ",
    options: [
      {
        title: "MÔI GIỚI CHỨNG KHOÁN",
        options: [
          { title: "CỔ PHIẾU", href: "/" },
          { title: "TRÁI PHIẾU", href: "/" },
        ],
      },
      {
        title: "DỊCH VỤ NGÂN HÀNG ĐÀU TƯ",
        options: [
          { title: "DỊCH VỤ THỊ TRƯỜNG VỐN", href: "/" },
          { title: "DỊCH VỤ THỊ TRƯỜNG NỢ", href: "/" },
          { title: "TƯ VẤN M&A", href: "/" },
          { title: "TƯ VẤN TÀI CHÍNH DN", href: "/" },
        ],
      },
      {
        title: "QUẢN LÝ TÀI SẢN",
        options: [
          { title: "UỶ THÁC GIAO DỊCH", href: "/" },
          { title: "TÀI CHÍNH CÁ NHÂN", href: "/" },
          { title: "QUẢN LÝ GIA SẢN", href: "/" },
        ],
      },
      {
        title: "GIAO DỊCH PHÁI SINH",
        options: [
          { title: "HĐ TƯƠNG LAI CHỈ SỐ", href: "/" },
          { title: "HĐ TƯƠNG LAI TRÁI PHIẾU", href: "/" },
        ],
      },
    ],
  },
  {
    title: "TIN TỨC",
    options: [
      { title: "TIN ĐẤU GIÁ", href: "/" },
      { title: "TIN THỊ TRƯỜNG", href: "/" },
      { title: "TIN DOANH NGHIỆP", href: "/" },
      { title: "LỊCH SỰ KIỆN", href: "/" },
    ],
  },
  {
    title: "TRUNG TÂM PHÂN TÍCH",
    options: [
      { title: "PHÂN TÍCH KỸ THUẬT", href: "/" },
      { title: "Nhận định thị trường", href: "/" },
      { title: "Báo cáo tài chính - doanh nghiệp", href: "/" },
      { title: "báo cáo trái phiếu tiền tệ", href: "/" },
      { title: "Báo cáo chiến lược đầu tư vĩ mô", href: "/" },
      { title: "Nhận định chuyên gia", href: "/" },
      { title: "Podcast", href: "/" },
    ],
  },
  {
    title: "GÓC NHÌN",
    options: [
      { title: "Thế giới", href: "/" },
      { title: "Kinh tế vĩ mô", href: "/" },
      { title: "Ngân hàng - tài chính", href: "/" },
      { title: "Thị trường chứng khoán", href: "/" },
      { title: "Thị trường hàng hoá", href: "/" },
    ],
  },
];

export default Header;
