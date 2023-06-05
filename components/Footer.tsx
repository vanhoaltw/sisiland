import Image from "next/image";
import Logo from "./Logo";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-10 space-y-10">
      <div className="container mx-auto">
        <Logo />
        <div className="grid sm:grid-cols-3 gap-y-6 gap-x-10 mt-4">
          <div className="space-y-2">
            <strong className="text-black/60">
              CÔNG TY CỔ PHẦN CHỨNG KHOÁN SMART INVEST (AAS)
            </strong>
            <p>
              Số 220 + 222 + 224 phố Nguyễn Lương Bằng, phường Quang Trung, quận
              Đống Đa, Hà Nội.
            </p>
            <p>Hotline: (+84-24)3.5739779 -Ext:251</p>
            <p>Fax: (+84-24)3.5739779</p>
            <p>Email: trungtamcskh@sisi.vn</p>
            <p>Web: https://sisi.com.vn</p>
          </div>

          <div className="space-y-2">
            <strong className="text-main">TẢI ỨNG DỤNG SMARTINVEST</strong>

            <div className="flex gap-4 flex-wrap text-xs">
              <figure className="w-[105px] text-center">
                <Image
                  src="/images/dowload/qr_appstore.png"
                  height={105}
                  width={105}
                  alt="App store"
                />
                <label>Download on App Store</label>
              </figure>

              <figure className="w-[105px] text-center">
                <Image
                  src="/images/dowload/qr_chplay.png"
                  height={105}
                  width={105}
                  alt="App store"
                />
                <label>Get it on Google Play</label>
              </figure>
            </div>
          </div>

          <div className="space-y-8">
            <strong className="text-main">LIÊN KẾT MẠNG XÃ HỘI</strong>
            <Socials />
          </div>
        </div>
      </div>

      <div className="bg-main text-white text-center py-6 text-sm">
        © 2021 Smart Invest Securities - All Rights Reserved
      </div>
    </footer>
  );
}
