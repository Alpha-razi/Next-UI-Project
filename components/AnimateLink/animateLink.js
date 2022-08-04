import React, { useRef, forwardRef, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import useMousePosition from "../../utills/useMousePosition";
import { distance } from "../../utills/utill";

const Text = styled(motion.span)`
  display: block;
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 50%;
    left: 50%;
    color: ${({ theme }) => theme.animatelink.default.color};
    white-space: nowrap;
    transform: translate3d(-50%, -50%, 0);
    transition: all 0.65s ${({ theme }) => theme.transitions.easeOutCirc};
  }

  &::after {
    color: ${({ theme }) => theme.button.hover.color};
    transform: translate3d(-50%, 140%, 0);
  }
`;

const Style = styled.a`
  width: 100%;
  position: relative;
  display: inline-flex;
  font-size: 54px;
  font-weight: 500;
  line-height: 54px;
  color: ${({ theme }) => theme.button.default.color};
 
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
    border-color: ${({ theme }) => theme.button.hover.borderColor};

    ${Text} {
      &::before {
        transform: translate3d(-50%, -300%, 0);
      }

      &::after {
        color: ${({ theme }) => theme.button.hover.color};
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

const AnimateLink = forwardRef((props, ref) => {
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
      // const rect = node.getBoundingClientRect();
      // const distanceToTrigger = rect.width * 0.7;

      // const distanceMouseButton = distance(
      //   mouseX,
      //   mouseY,
      //   rect.left + rect.width / 2,
      //   rect.top + rect.height / 2
      // );

    
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
    <Style ref={ref} href={props.href}>
      <span className="" ref={textRef}>
        <Text data-text={props.children}>{props.children}</Text>
        
      </span>
      <Fill animate={fillControls} />
    </Style>
  );
});

export default AnimateLink;
