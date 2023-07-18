import classNames from 'classnames';
import styles from './intro.module.scss';
import { Animation } from '../animation/animation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface IntroProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Intro = ({ className }: IntroProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['intro-title']}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={styles.title}
                >
                    Dimitri Marco
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={styles.h3}
                >
                    Software Engineer and Designer{' '}
                </motion.h3>
                <motion.svg
                    height="4"
                    viewBox="0 0 204 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.line}
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
                Freelancer providing services for programming and design content needs.{' '}
            </p>
            <Link to={'/contact'}>
                <button className={styles.cta}>Let's collaborate 🎉</button>
            </Link>

            <Animation />
        </div>
    );
};
