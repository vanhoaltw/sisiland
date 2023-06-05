import Link from "next/link";
import { ANALYST_NEWS, SMART_INVESTS } from "./mock";

const HotNews = () => {
  return (
    <div className="text-left">
      <p className="border-b text-main border-main uppercase mb-4 text-xl font-medium  pb-1">
        TIN NỔI BẬT
      </p>
      <article className="bg-main p-4 pb-12 rounded-xl overflow-hidden">
        <figure className="my-16 object-contain object-center flex items-center w-full">
          <img
            src="https://www.sisi.com.vn/Content/icons/logo.png"
            height="auto"
            width="100%"
            loading="lazy"
            alt=""
          />
        </figure>
        <div className="min-h-[160px]">
          <p className="uppercase text-lg font-semibold">
            [THÁI NGUYÊN] LỄ TÂN HÀNH CHÍNH
          </p>
          <p className="uppercase text-[#999] text-sm">
            By{" "}
            <a href="/" className="text-white hover:text-black">
              HCNS01
            </a>{" "}
            in{" "}
            <a href="/" className="text-white hover:text-black">
              cơ hội nghề nghiệp
            </a>
          </p>
        </div>

        <button className="border border-current rounded-full py-2 px-8 float-right">
          Chi tiết...
        </button>
      </article>
    </div>
  );
};

const SummaryNews = ({
  title = "",
  showMoreHref = "",
  news = [],
}: {
  news: { title: string }[];
  title: string;
  showMoreHref?: string;
}) => {
  return (
    <div>
      <div className="border-b flex items-end justify-between gap-4 text-main border-main uppercase mb-4 text-xl font-medium  pb-1">
        {title}
        <a
          href={showMoreHref}
          className="text-sm normal-case font-normal hover:text-black"
        >
          Xem tiếp ...
        </a>
      </div>

      <ul
        className="border border-[#fcfcfc]"
        style={{ boxShadow: "1px 2px 3px #efefef" }}
      >
        {news.map((n, index) => (
          <li
            key={index}
            className="py-2 border-b last:border-none border-dotted uppercase text-lg text-main text-medium text-left hover:text-green-400"
          >
            <Link href="/">{n.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Market360() {
  return (
    <section
      className="text-center text-white bg-center bg-cover"
      style={{ backgroundImage: 'url("/images/bg2.png")' }}
    >
      <div className="container mx-auto">
        <h3 className="title-section mb-12">THỊ TRƯỜNG 360°</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <HotNews />
          <div className="space-y-8">
            <SummaryNews
              showMoreHref="/"
              title="TRUNG TÂM PHÂN TÍCH"
              news={ANALYST_NEWS}
            />

            <SummaryNews
              title="TIN TỨC SMART INVEST"
              showMoreHref="/"
              news={SMART_INVESTS}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
