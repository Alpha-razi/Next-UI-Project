import { useRef, useState, useEffect } from "react";

function useHover(length) {
  const [value, setValue] = useState(false);
  const refArray = [];
  for (let index = 0; index < length; index++) {
    let ref = useRef(null);
    refArray.push(ref);
  }
  // const ref = useRef(null);

  // const ref2 = useRef(null);
  // const ref3 = useRef(null);
  // const ref4 = useRef(null);
  // const ref5 = useRef(null);
  // const ref6 = useRef(null);
  // const refArray = [ref, ref2, ref3, ref4, ref5, ref6];

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    refArray.map((ref) => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);

        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    });
  }, []);
  return [refArray, value];
}

export default useHover;
