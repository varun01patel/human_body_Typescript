import React, { useState } from 'react';
import { BodyComponent } from '@darshanpatel2608/human-body-react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

// Modal styling
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 -3px 2px 0px  rgb(0 0 0 /0.1)',
  },
};

const App: React.FC = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [clickedPart, setClickedPart] = useState<string>('');

  const handleCancel = () => {
    navigate('/');
  };

  const handlePartClick = (partId: string) => {
    setModalIsOpen(true);
    setClickedPart(partId);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setClickedPart('');
  };

  const modalContent = (
    <div className='flex flex-col items-center'>
      <h2>You clicked on {clickedPart}</h2>
      <hr className='border border-gray-300 w-[130%] text-gray-600 mt-3 -mr-10 -ml-10'/>
      <button onClick={closeModal} className='text-blue-600'>Ok</button>
    </div>
  );

  // Set all body parts to be initially selected
  const partsInput = {
    head: { selected: true },
    chest: { selected: true },
    stomach: { selected: true },
    left_shoulder: { selected: true },
    left_arm: { selected: true },
    left_hand: { selected: true },
    right_shoulder: { selected: true },
    right_arm: { selected: true },
    right_hand: { selected: true },
    left_leg_lower: { selected: true },
    left_leg_upper: { selected: true },
    left_foot: { selected: true },
    right_leg_lower: { selected: true },
    right_leg_upper: { selected: true },
    right_foot: { selected: true },
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col gap-4'>
        <div className="mt-2 flex justify-between items-center">
          <h1 className='pl-16 font-semibold text-lg'>Symptom Checker</h1>
          <i onClick={handleCancel} className="fa-solid fa-xmark ml-20 bg-gray-400 text-white rounded-full h-5 w-5 text-center pt-[2px]"></i>
        </div>
        <div className='flex gap-4'>
          <button className='text-blue-400 text-lg'>Search</button>
          <h1 className='font-semibold text-lg'>Point on the body</h1>
        </div>
      </div>
      <hr className='border border-gray-300 w-full text-gray-600'/>
      <div className='flex justify-start items-center w-full gap-3 my-8 px-4'>
        <i className="fa-solid fa-street-view text-blue-400 text-xl"></i>
        <h1 className='font-semibold text-blue-400 text-xl'>Rotate model</h1>
      </div>
      <BodyComponent
        partsInput={partsInput}
        onClick={handlePartClick}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {modalContent}
      </Modal>
    </div>
  );
};

export default App;
