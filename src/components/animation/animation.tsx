import classNames from 'classnames';
import styles from './animation.module.scss';
import Lottie from 'lottie-react';
import hand from '../../assets/animation.json';
import { motion } from 'framer-motion';

export interface AnimationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Animation = ({ className }: AnimationProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className={classNames(styles.root, className)}
        >
            <Lottie animationData={hand} className={styles.hand} />
        </motion.div>
    );
};
