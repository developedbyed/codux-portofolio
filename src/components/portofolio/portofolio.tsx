import classNames from 'classnames';
import styles from './portofolio.module.scss';
import website_1 from '../../assets/website-1.jpg';
import website_2 from '../../assets/website-2.jpg';
import website_3 from '../../assets/website-3.jpg';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export interface PortofolioProps {
    className?: string;
}

export const Portofolio = ({ className }: PortofolioProps) => {
    const x1 = useMotionValue(0);
    const y1 = useMotionValue(0);
    const rotateX1 = useTransform(y1, [-100, 100], [30, -30]);
    const rotateY1 = useTransform(x1, [-100, 100], [-30, 30]);

    const x2 = useMotionValue(0);
    const y2 = useMotionValue(0);
    const rotateX2 = useTransform(y2, [-100, 100], [30, -30]);
    const rotateY2 = useTransform(x2, [-100, 100], [-30, 30]);

    const x3 = useMotionValue(0);
    const y3 = useMotionValue(0);
    const rotateX3 = useTransform(y3, [-100, 100], [30, -30]);
    const rotateY3 = useTransform(x3, [-100, 100], [-30, 30]);

    return (
        <div className={classNames(styles.root, className)}>
            <h3>My Portfolio</h3>
            <p className={styles.p}>
                I am a web developer with a passion for creating beautiful and functional websites.
                I have a strong understanding of HTML, CSS, JavaScript, and PHP, and I am proficient
                in a variety of back-end frameworks. I am also a creative thinker and I am always
                looking for new ways to solve problems.
            </p>
            <p className={styles.p}>
                In my portfolio, you will find a selection of my recent projects. These projects
                showcase my skills in a variety of areas, including:
            </p>
            <ul className={styles.list}>
                <li>
                    <span className={styles.span}>Web design</span> I have a keen eye for design and
                    I am able to create websites that are both visually appealing and user-friendly.
                </li>
                <li>
                    <span className={styles.span}>Web development</span> I am an experienced web
                    developer and I am able to build websites that are both efficient and scalable.
                </li>
                <li>
                    <span className={styles.span}>Problem-solving</span> I am a creative thinker and
                    I am able to find innovative solutions to problems.
                </li>
            </ul>
            <div className={styles.grid}>
                <motion.div
                    style={{ x: x1, y: y1, rotateX: rotateX1, rotateY: rotateY1 }}
                    drag
                    dragElastic={0.1}
                    dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
                    className={styles['grid-item']}
                >
                    <img src={website_1} className={styles['grid-img']} />
                    <div className={styles['visit-portofolio']}>
                        <h4 className={styles.h4}>Buzz - Full Stack Next 13</h4>
                        <a href="https://buzz-next-nine.vercel.app/">Visit </a>
                    </div>
                </motion.div>

                <motion.div
                    style={{ x: x2, y: y2, rotateX: rotateX2, rotateY: rotateY2 }}
                    drag
                    dragElastic={0.1}
                    dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
                    className={styles['grid-item']}
                >
                    <img src={website_2} className={styles['grid-img']} />
                    <div className={styles['visit-portofolio']}>
                        <h4 className={styles.h4}>E-commerce with Stripe</h4>
                        <a href="https://next-ecommerce-puce-five.vercel.app/">Visit </a>
                    </div>
                </motion.div>
                <motion.div
                    style={{ x: x3, y: y3, rotateX: rotateX3, rotateY: rotateY3 }}
                    drag
                    dragElastic={0.1}
                    dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
                    className={styles['grid-item']}
                >
                    <img src={website_3} className={styles['grid-img']} />
                    <div className={styles['visit-portofolio']}>
                        <h4 className={styles.h4}>3d Animations with Blender</h4>
                        <a href="https://3d-scroll-ball.vercel.app/">Visit </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
