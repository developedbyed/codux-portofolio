import classNames from 'classnames';
import styles from './portofolio.module.scss';
import website_1 from '../../assets/website-1.jpg';
import website_2 from '../../assets/website-2.jpg';
import website_3 from '../../assets/website-3.jpg';
import website_4 from '../../assets/website-4.png';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export interface PortofolioProps {
    className?: string;
}

export const Portofolio = ({ className }: PortofolioProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['portofolio-wrapper']}>
                <h3 className={styles.h3}>My Portfolio</h3>
                <motion.svg
                    height="4"
                    viewBox="0 0 204 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={classNames(styles.line, styles.path)}
                >
                    <motion.path
                        d="M2 2L202 1.99998"
                        stroke="url(#paint0_linear_6_519)"
                        stroke-width="3"
                        stroke-linecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        className={styles['path-line']}
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_6_519"
                            x1="202.5"
                            y1="2"
                            x2="0.999995"
                            y2="2"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#DC3284" />
                            <stop offset="1" stop-color="#DC3232" />
                        </linearGradient>
                    </defs>
                </motion.svg>
            </div>
            <p className={styles.p}>
                I am a web developer with a passion for creating beautiful and functional websites.
                I have a strong understanding of{' '}
                <span className={styles.span}>HTML, CSS, JavaScript</span>, and PHP, and I am
                proficient in a variety of back-end frameworks. I am also a{' '}
                <span className={styles.span}>creative thinker</span> and I am always looking for
                new ways to solve problems.
            </p>
            <p className={styles.p}></p>
            <div className={styles.grid}>
                <motion.div className={styles['grid-item']}>
                    <img src={website_1} className={styles['grid-img']} />
                    <div className={styles['visit-portofolio']}>
                        <h4 className={styles.h4}>Buzz - Full Stack Next 13</h4>
                        <a href="https://buzz-next-nine.vercel.app/">Visit </a>
                    </div>
                </motion.div>

                <motion.div className={styles['grid-item']}>
                    <img src={website_2} className={styles['grid-img']} />
                    <div className={styles['visit-portofolio']}>
                        <h4 className={styles.h4}>E-commerce with Stripe</h4>
                        <a href="https://next-ecommerce-puce-five.vercel.app/">Visit </a>
                    </div>
                </motion.div>
                <motion.div className={styles['grid-item']}>
                    <img src={website_3} className={styles['grid-img']} />
                    <div className={styles['visit-portofolio']}>
                        <h4 className={styles.h4}>3d Animations with Blender</h4>
                        <a href="https://3d-scroll-ball.vercel.app/">Visit </a>
                    </div>
                </motion.div>
                <motion.div className={styles['grid-item']}>
                    <img src={website_4} className={styles['grid-img']} />
                    <div className={styles['visit-portofolio']}>
                        <h4 className={styles.h4}>Hua Portofolio</h4>
                        <a href="https://wretched-wind-gold.vercel.app/">Visit </a>
                    </div>
                </motion.div>
            </div>
            <div className={styles.socials}>
                <a href="https://www.linkedin.com/in/dev-ed-6a045420b/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={styles['social-svg']}
                    >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                </a>
                <a href="https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={styles['social-svg']}
                    >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
                    </svg>
                </a>
                <a href="https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={styles['social-svg']}
                    >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                    </svg>
                </a>
            </div>
        </div>
    );
};
