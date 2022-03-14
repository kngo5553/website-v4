import React, { useRef, useState, useEffect } from 'react'
import { useSpring, a } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { Title, Frame, Content, toggle } from './Styled'
import * as Icons from './icons'

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => void (ref.current = value), [value]);
    return ref.current;
};

const Tree = React.memo(({ children, name, style, defaultOpen = false }) => {
    const [isOpen, setOpen] = useState(defaultOpen);
    const previous = usePrevious(isOpen);
    const [ref, { height: viewHeight }] = useMeasure();
    const { height, opacity, y } = useSpring({
        from: { height: 0, opacity: 0, y: 0 },
        to: {
            height: isOpen ? viewHeight : 0,
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 20,
        },
    });
    // @ts-ignore
    const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`];

    return (
        <Frame>
            <Icon style={{ ...toggle, opacity: children ? 1 : 0.4 }} onClick={() => setOpen(!isOpen)} />
            <Title style={style} onClick={() => setOpen(!isOpen)}>{name}</Title>
            <Content
                style={{
                    opacity,
                    height: isOpen && previous === isOpen ? 'auto' : height,
                }}>
                <a.div ref={ref} style={{ y }} children={children} />
            </Content>
        </Frame>
    );
});

export default Tree;