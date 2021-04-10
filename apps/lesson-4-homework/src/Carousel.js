// Reference: https://juejin.cn/post/6844904008646131725

import React, {
    useState,
    useEffect,
    useRef,
} from "react";
import {useDrag} from 'react-use-gesture'
import styles from "./Carousel.css";

function Carousel(props) {
    const total = props.children.length;
    const width = window.screen.width;

    const [index, setIndex] = useState(1);
    const [status, setStatus] = useState(1);
    const container = useRef(null);

    const setTransition = (offset = 0) => {
        function transitionEnd() {
            container.current.style.transitionProperty = "none";
            setStatus(1);
            if (index === 0) {
                setTimeout(() => {
                    setIndex(total)
                }, 0)
            }
            if (index === total + 1) {
                setTimeout(() => {
                    setIndex(1)
                }, 0)
            }
            container.current.removeEventListener('transitionend', transitionEnd, false);
        }
        container.current.addEventListener('transitionend', transitionEnd, false);

        const distance = (1 - index) * width;
        container.current.style.transform = `translate3d(${distance + offset}px, 0, 0)`;
    };

    useEffect(() => {
        setTransition();
    }, [index]);

    const handleChangeIndex = (id) => {
        if (status === 2) return;
        container.current.style.transitionProperty = "all";
        setStatus(2);
        setIndex(id);
    };

    const handlePrev = () => {
        handleChangeIndex(index === 0 ? total : index - 1);
    };

    const handleNext = () => {
        handleChangeIndex(index === total + 1 ? 1 : index + 1);
    };

    return ( 
        <div className="Carousel">
            <div className="container" ref={container} {...bind(1)}>
                {
                    React.Children.map(
                        props.children,
                        (child, id) => {
                            if (index <= 1 && id + 1 === total) {
                                return (
                                    <div style={{left: -1 * width}} className="item">
                                        {child}
                                    </div>
                                )
                            }
                            if (index >= total && id === 0) {
                                return (
                                    <div style={{left: total * width}} className="item">
                                        {child}
                                    </div>
                                )
                            }
                            return (
                                <div style={{left: id * width}} className="item">
                                    {child}
                                </div>
                            )
                        }
                    )
                }
            </div>
            <div className="btn">
                <button className="btn-prev" onClick={handlePrev}>
                    Prev
                </button>
                <button className="btn-next" onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    );
}


export default Carousel;
