import { usePreventNavigation } from "hooks/usePreventNavigation";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";
import Dots from "../Dots";
import { SCREEN_WIDTH } from "constants/common";

const partners = [
  { title: "Becamex", url: "/images/partner/becamex.jpg" },
  { title: "BIDV", url: "/images/partner/bidv.jpg" },
  { title: "HAI PHAT LAND", url: "/images/partner/haiphat-land.jpg" },
  { title: "SHB", url: "/images/partner/shb.jpg" },
  { title: "TNR", url: "/images/partner/tnr.jpg" },
  { title: "Vincommerce", url: "/images/partner/vincommerce.jpg" },
  { title: "VpBank", url: "/images/partner/vpbank.jpg" },
];
export default function Partnership() {
  const [perView, setPerView] = useState(5);
  const [sliderContainerRef] = usePreventNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    updated: (options?: any) => {
      console.log({ perView: options.options.slides });
      if (options?.options?.slides?.perView as number) {
        setPerView(options?.options?.slides?.perView);
      }
    },
    slides: { perView: 1, spacing: 10 },
    breakpoints: {
      [`(min-width: ${SCREEN_WIDTH.MOBILE}px)`]: {
        slides: { perView: 2, spacing: 5 },
      },
      [`(min-width: ${SCREEN_WIDTH.TABLET}px)`]: {
        slides: { perView: 3, spacing: 10 },
      },
      [`(min-width: ${SCREEN_WIDTH.LAPTOP}px)`]: {
        slides: { perView: 5, spacing: 10 },
      },
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <section className="container mx-auto">
      <h3 className="title-section mb-12">LIÊN KẾT ĐỐI TÁC</h3>
      <div className="relative pb-6" ref={sliderContainerRef}>
        <div ref={sliderRef} className="keen-slider">
          {partners?.map((banner) => (
            <div className="keen-slider__slide" key={banner.title}>
              <Image
                className="object-contain object-center h-[113px] md:h-36"
                src={banner.url}
                alt={banner.title}
                width={400}
                height={400}
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {loaded && instanceRef.current && (
        <Dots
          element={instanceRef.current}
          currentIndex={currentSlide}
          perView={perView}
        />
      )}
    </section>
  );
}
