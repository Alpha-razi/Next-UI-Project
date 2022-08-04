import React, { useRef, forwardRef, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import useMousePosition from "../../utills/useMousePosition";
import { distance } from "../../utills/utill";

const Text = styled(motion.span)`
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 140%;
    left: 42%;
    color: ${({ theme }) => theme.buttonHero.default.color};
    white-space: nowrap;
    transform: translate3d(-50%, -50%, 0);
    transition: all 0.65s ${({ theme }) => theme.transitions.easeOutCirc};
  }

  &::after {
    color: ${({ theme }) => theme.buttonHero.hover.color};
    top: 123%;
    transform: translate3d(-50%, 140%, 0);
  }
`;

const Style = styled.a`
position: relative;
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  color: ${({theme}) => theme.buttonHero.default.color};
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.75s ${({ theme }) => theme.transitions.easeOutCirc};

  /* Text wrapper */
  > span {
    z-index: 100;
    position: relative;
    color: transparent;
  }

  &:hover {
    position: absolute;
    ${Text} {
      &::before {
        transform: translate3d(-50%, -300%, 0);
      }
      &::after {
        color: ${({ theme }) => theme.buttonHero.hover.color};
        transform: translate3d(-50%, -50%, 0);
      }
    }
  }
`;

const Fill = styled(motion.div)`
  z-index: 10;
  position: absolute;
  top: -50%;
  left: -25%;
  width: 150%;
  height: 250%;
  display: block;
  pointer-events: none;
  transform: translate3d(0, 80%, 0);
`;

const ButtonHero = forwardRef((props, ref) => {
  const { mouseX, mouseY } = useMousePosition();
  const textRef = useRef();
  const fillControls = useAnimation();

  useEffect(() => {
    let x = 0;
    let y = 0;

    if (ref) {
      // console.log(ref, "ref current");
      const node = ref.current;
      // New values for the translations
      const rect = node.getBoundingClientRect();
      const distanceToTrigger = rect.width * 0.7;

      const distanceMouseButton = distance(
        mouseX,
        mouseY,
        rect.left + rect.width / 2,
        rect.top + rect.height / 2
      );

      // Handle magnetic effect
      if (distanceMouseButton < distanceToTrigger) {
        // Translate button position on hover
        x = (mouseX - (rect.left + rect.width / 2)) * 0.2;
        y = (mouseY - (rect.top + rect.height / 2)) * 0.2;
        node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        textRef.current.style.transform = `translate3d(${x / 4}px, ${
          y / 4
        }px, 0)`;
      } else {
        // Restore initial position
        node.style.transform = `translate3d(0, 0, 0)`;
        textRef.current.style.transform = `translate3d(0, 0, 0)`;
      }

      const handleMouseEnter = () => {
        // Handle background color animation
        fillControls.start({
          y: ["80%", "-10%"],
          transition: { ease: [0.19, 1, 0.22, 1], duration: 0.55 },
        });
      };

      const handleMouseLeave = () => {
        fillControls.start({
          y: "-80%",
          transition: { ease: [0.19, 1, 0.22, 1], duration: 0.55 },
        });
      };

      if (node) {
        node.addEventListener("mouseenter", handleMouseEnter);
        node.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          node.removeEventListener("mouseenter", handleMouseEnter);
          node.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }
  }, [mouseX, mouseY, ref, textRef, fillControls]);

  return (
    <Style className="flex flex-col h-16 px-6" ref={ref} href={props.href}>
      <span
        className="group flex "
        ref={textRef}
      >
        <svg
        className="w-full  ml-8  fill-[#FAFAFA] group-hover:fill-[#E964FF]"
          width={41.32}
          height={41.32}
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.67926 3.23678L9.85 3.06588V3.30746V7.49996C9.85 7.85789 10.1359 8.14996 10.5 8.14996C10.8573 8.14996 11.15 7.85723 11.15 7.49996V1.49996C11.15 1.14269 10.8573 0.849961 10.5 0.849961H4.5C4.14273 0.849961 3.85 1.14269 3.85 1.49996C3.85 1.85723 4.14273 2.14996 4.5 2.14996H8.6925H8.93377L8.76324 2.32064L0.603244 10.4881L0.603211 10.4882C0.349764 10.7416 0.349764 11.1508 0.603211 11.4043C0.856648 11.6577 1.26581 11.6577 1.51926 11.4043C1.51927 11.4043 1.51928 11.4043 1.51929 11.4043L9.67926 3.23678Z"
            stroke="#0B0D13"
            strokeWidth="0.2"
          />
        </svg>
        <Text data-text={props.children}>{props.children}</Text>
      </span>
      <Fill animate={fillControls} />
    </Style>
  );
});

export default ButtonHero;
