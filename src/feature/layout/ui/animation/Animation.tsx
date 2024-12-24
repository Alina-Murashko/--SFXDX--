import classNames from "classnames";
import {ComponentPropsWithoutRef, useEffect, useRef} from "react";
import s from './animation.module.scss'
import anime from "animejs/lib/anime.es";
import {getRandomInRange} from "@/common/utils";

export const Animation = ({className, ...rest}: ComponentPropsWithoutRef<'div'>) => {
    const ellipseRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ellipses = ellipseRefs.current;
        const getCurrentRotate = (element: HTMLElement) => {
            const style = window.getComputedStyle(element);
            const matrix = style.transform;
            if (matrix === 'none') {
                return 0;
            }
            const values = matrix.match(/^matrix\((.+)\)$/);
            if (values) {
                const a = parseFloat(values[1].split(', ')[0]);
                const b = parseFloat(values[1].split(', ')[1]);
                return Math.round(Math.atan2(b, a) * (180 / Math.PI));
            }
            return 0;
        };
        const animateEllipses = () => {
            ellipses.forEach(ellipse => {
                if (ellipse) {
                    const randomX = getRandomInRange(-50, 50);
                    const randomY = getRandomInRange(-50, 50);
                    const randomRotate = getRandomInRange(-180, 180);
                    const currentRotate = getCurrentRotate(ellipse);

                    anime({
                        targets: ellipse,
                        translateX: `${randomX}vw`,
                        translateY: `${randomY}vh`,
                        rotate: [
                            {value: currentRotate, duration: 0},
                            {value: `${currentRotate + randomRotate}deg`, duration: 5000, easing: 'easeInOutSine'}
                        ],
                        duration: 5000,
                        easing: 'easeInOutSine',
                        loop: true,
                        direction: 'alternate',
                    });
                }
            });
        };
        animateEllipses();
        const interval = setInterval(animateEllipses, 5000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className={s.animationWrapper} {...rest}>
            <div className={classNames(s.animation, className)}>
                {[...Array(4)].map((_, index) => (
                    <div
                        key={index}
                        ref={el => ellipseRefs.current[index] = el as HTMLDivElement}
                        className={s.ellipse}
                    />
                ))}

            </div>
        </div>
    )
}
Animation.displayName = 'Animation'
