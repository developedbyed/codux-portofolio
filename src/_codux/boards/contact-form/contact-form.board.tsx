import { createBoard } from '@wixc3/react-board';
import { ContactForm } from '../../../components/contact-form/contact-form';

export default createBoard({
    name: 'ContactForm',
    Board: () => <ContactForm />,
    environmentProps: {
        windowWidth: 942,
        canvasWidth: 525,
        windowHeight: 729,
    },
});
