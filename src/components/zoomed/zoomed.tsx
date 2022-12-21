// https://github.com/hey-nicolasklein/nico-so/blob/main/components/Zoomed/index.tsx
import { animated, useSpring } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { ReactNode } from "react";

const Zoomed = (props: {
  children: ReactNode;
  factor?: number;
  scale?: number;
  rotate?: number;
}): JSX.Element => {
  const modifier = props.factor ?? 1;
  const modifierScale = props.scale ?? 1.08;
  const rotateVal = props.rotate ?? 2;

  // Use Spring Hook to make Card "wiggly"
  const [styles, api] = useSpring(() => ({
    x: 0,
    y: 0,
    transform: "rotate(0deg) scale(1)",
    config: { mass: 1, tension: 300, friction: 10 * modifier },
  }));

  // Use Gesture Hook to keep track of mouse movement velocity
  const bind: any = useGesture({
    onHover: () => {
      api.start({
        transform: `rotate(${rotateVal}deg) scale(${modifierScale})`,
      });
    },
    onMouseLeave: () => {
      api.start({ transform: "rotate(0deg) scale(1)" });
    },
  });

  return (
    <animated.div {...bind()} style={styles}>
      {props.children}
    </animated.div>
  );
};

export default Zoomed;
