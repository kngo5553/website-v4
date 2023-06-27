import React, { useState } from 'react';
import { useTransition, animated, config } from '@react-spring/web';

const TransitionArray = ({ transitionArray, aniRef }) => {
  // eslint-disable-next-line no-unused-vars
  const [items, setItems] = useState(transitionArray);

  const transitions = useTransition(items, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
    config: {
      ...config.molasses,
      friction: 200,
    },
    ref: aniRef || null
    // onRest: () => setItems([]),
  });

  // useEffect(() => {
  //   if (items.length === 0) {
  //     setTimeout(() => {
  //       setItems(transitionArray)
  //     }, 2000)
  //   }
  // }, [items]);

  // const fragment = transitions(({ opacity }, item) => (
  //   <animated.div
  //     style={{
  //       opacity: opacity.to(item.op),
  //       transform: opacity
  //         .to(item.trans)
  //         .to(y => `translate3d(0,${y}px,0)`),
  //     }}>
  //     {item.fig}
  //   </animated.div>
  // ));

  return (
    transitions(({ opacity }, item) => (
      <animated.div
        style={{
          opacity: opacity.to(item.op),
          transform: opacity
            .to(item.trans)
            .to(y => `translate3d(0,${y}px,0)`),
        }}>
        {item.fig}
      </animated.div>
    ))
  );
};

export default React.memo(TransitionArray);