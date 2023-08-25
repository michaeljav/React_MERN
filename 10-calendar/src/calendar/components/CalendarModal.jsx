import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onCloseModal = () => {
    console.log('Closing modal');
    setIsOpen(false);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel='Example Modal'
      className='modal'
      overlayClassName='modal-fondo'
      closeTimeoutMS={200}
    >
      <h1>Homa</h1>
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,</p>
    </Modal>
  );
};
