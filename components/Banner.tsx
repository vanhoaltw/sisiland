import { usePreventNavigation } from "hooks/usePreventNavigation";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Dots from "./Dots";

const banners = [
  "/images/banners/slide-1.jpg",
  "/images/banners/slide-2.png",
  "/images/banners/slide-3.jpg",
  "/images/banners/slide-4.png",
  "/images/banners/slide-5.jpg",
  "/images/banners/slide-6.jpg",
];

const Banner = () => {
  const [sliderContainerRef] = usePreventNavigation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: { origin: "center", perView: 1, spacing: 20 },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="relative" ref={sliderContainerRef}>
      <div ref={sliderRef} className="keen-slider">
        {banners?.map((banner) => (
          <div className="keen-slider__slide" key={banner}>
            <Image
              className="object-cover object-center h-60 md:h-[450px] lg:h-[940px]"
              src={banner}
              alt=""
              width={2400}
              height={1200}
              priority
            />
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <Dots
          className="absolute bottom-8 left-0 w-full"
          element={instanceRef.current}
          currentIndex={currentSlide}
        />
      )}
    </div>
  );
};

export default Banner;
