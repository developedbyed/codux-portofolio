import { createBoard } from '@wixc3/react-board';
import { Portofolio } from '../../../components/portofolio/portofolio';

export default createBoard({
    name: 'Portofolio',
    Board: () => <Portofolio />,
    environmentProps: {
        windowWidth: 1520,
        windowHeight: 1053,
        canvasWidth: 1660,
    },
});
