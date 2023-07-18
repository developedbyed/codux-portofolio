import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
    name: 'App',
    Board: () => (
        <MemoryRouter>
            <App />
        </MemoryRouter>
    ),
    environmentProps: {
        windowWidth: 2062,
        canvasWidth: 822,
        windowHeight: 1116,
        canvasHeight: 1199,
    },
});
