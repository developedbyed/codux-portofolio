import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 760,
        canvasWidth: 1734,
        windowHeight: 1116,
        canvasHeight: 1199,
    },
});
