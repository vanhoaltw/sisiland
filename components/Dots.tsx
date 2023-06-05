import classNames from "classnames";
import cn from "classnames";
import { KeenSliderInstance } from "keen-slider/react";
import { RefObject } from "react";

const Dots = ({
  element,
  currentIndex,
  perView = 1,
  className,
}: {
  element?: KeenSliderInstance;
  currentIndex: number;
  perView?: number;
  className?: string;
}) => {
  const dotsLength =
    Number(element?.track.details.slides.length || 0) - (perView - 1);

  return (
    <div
      className={classNames(
        "mt-4 flex items-center justify-center space-x-3",
        className
      )}
    >
      {/* @ts-ignore */}
      {[...Array(dotsLength).keys()].map((index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => {
              element?.moveToIdx(index);
            }}
            className={cn(
              "rounded-full transition-[width]",
              currentIndex !== index
                ? "h-2.5 w-2.5 bg-[#aaa]"
                : "h-2.5 w-6 bg-main"
            )}
          />
        );
      })}
    </div>
  );
};

export default Dots;
