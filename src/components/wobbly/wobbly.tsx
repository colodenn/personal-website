// https://github.com/hey-nicolasklein/nico-so/blob/main/components/Wobbly/index.tsx
import { animated, useSpring } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { type ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  factor?: number;
}

const Wobbly: React.FC<Props> = (props: Props): JSX.Element => {
  const modifier = props.factor ?? 1;

  // Use Spring Hook to make Card "wiggly"
  const [styles, api] = useSpring(() => ({
    x: 0,
    y: 0,
    transform: "rotate(0deg)",
    config: { mass: 2, tension: 300, friction: 5 * modifier },
  }));

  const [isHovered, setHovered] = useState(false);

  useEffect(() => {
    console.log(modifier);
    if (!isHovered) return;

    const timeout = setTimeout(() => {
      setHovered(false);
      api.start({ transform: "rotate(0deg)" });
    }, 150);

    api.start({ transform: "rotate(-1deg" });

    return () => clearTimeout(timeout);
  }, [isHovered, api, modifier]);

  // Use Gesture Hook to keep track of mouse movement velocity
  const bind: any = useGesture({
    onHover: () => {
      setHovered(true);
    },
    onMouseLeave: () => {
      setHovered(false);
    },
    onMove: ({ velocity, direction }) =>
      api.start({
        x: velocity[0] * direction[0],
        y: velocity[1] * direction[1],
      }),
  });

  return (
    <animated.div
      {...bind()}
      style={styles}
      onMouseLeave={() => api.start({ x: 0, y: 0 })}
    >
      {props.children}
    </animated.div>
  );
};

export default Wobbly;
