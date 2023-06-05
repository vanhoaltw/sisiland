import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Môi giới chứng khoán",
    href: "/",
    borderColor: "#005f55",
    background: "/images/solution-servicing.jpg",
  },
  {
    title: "Dịch vụ ngân hàng đầu tư",
    href: "/",
    borderColor: "#0aa890",
    background: "/images/solution-gathering.jpg",
  },
  {
    title: "Quản lý tài sản",
    href: "/",
    borderColor: "#b1ba15",
    background: "/images/solution-corporate.jpg",
  },
  {
    title: "Giao dịch phái sinh",
    href: "/",
    borderColor: "#769b39",
    background: "/images/solution-optimisation.jpg",
  },
];

const invests = [
  {
    title: "LIVE PRICE",
    description: "Bảng giá thông minh",
    href: "/",
    icon: "/images/invest/liveprice-white.png",
    iconFill: "/images/invest/liveprice-filled.png",
  },
  {
    title: "SMART INVEST Chart",
    description: "Biểu đồ kỹ thuật",
    href: "/",
    icon: "/images/invest/smartinvest-white.png",
    iconFill: "/images/invest/smartinvest-filled.png",
  },
  {
    title: "E-Trading Pro",
    description: "Giao dịch chứng khoán",
    href: "/",
    icon: "/images/invest/trading-white.png",
    iconFill: "/images/invest/trading-filled.png",
  },
];

export default function ProductService() {
  return (
    <section
      className="bg-top bg-no-repeat bg-cover py-20"
      style={{ backgroundImage: 'url("/images/product-background.png")' }}
    >
      <div className="container mx-auto">
        <h3 className="title-section mb-8">Sản phẩm & dịch vụ</h3>
        <div className="grid sm:grid-cols-4">
          {services.map((s) => (
            <Link
              href={s.href}
              key={s.title}
              className="bg-cover border-4 hover:opacity-70 transition-opacity border-solid inline-block bg-center h-20 sm:h-[10.5rem] sm:first:rounded-l-full sm:last:rounded-r-full flex items-center justify-center px-10 text-white text-lg font-semibold"
              style={{
                backgroundImage: `url("${s.background}")`,
                borderColor: s.borderColor,
              }}
            >
              {s.title}
            </Link>
          ))}
        </div>

        <h3 className="title-section mt-10 mb-14">Smart invest trading</h3>

        <div className="sm:flex space-y-4 justify-between">
          {invests.map((i) => (
            <Link
              key={i.title}
              href={i.href}
              className="hover:bg-gradient-to-t from-[#59BA47] hover:text-white to-[#258345] group items-center flex gap-4 bg-white rounded-full px-6 py-2.5 border sm:w-80"
            >
              <div className="shrink-0 aspect-square h-10">
                <Image
                  height={45}
                  width={45}
                  src={i.iconFill}
                  className="group-hover:hidden"
                  alt=""
                />
                <Image
                  height={45}
                  width={45}
                  src={i.icon}
                  className="group-hover:block"
                  alt=""
                />
              </div>
              <div>
                <p className="font-semibold text-lg text-main group-hover:text-white">
                  {i.title}
                </p>
                <p className="text-sm">{i.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
