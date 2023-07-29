import React, { useState, useEffect } from 'react';
import Firststep from './stepscomp/Firststep';
import SecondStep from './stepscomp/SecondStep';
import Thirdstep from './stepscomp/Thirdstep';
import Fourthstep from './stepscomp/Fourthstep';
import FifthStep from './stepscomp/FifthStep';

const SkipperAppSteps = () => {
  const [colorStages, setColorStages] = useState({
    strokeColor: '#FF6F0F',
    defaultStrokeColor: '#3A3A3A',
  });

  const [selectedStep, setSelectedStep] = useState(1); // State to track the currently selected step

  const firstStep = () => {
    setSelectedStep(1); // Set the selected step to 1 when the button is clicked
  };

  const secondStep = () => {
    setSelectedStep(2); // Set the selected step to 2 when the button is clicked
  };

  const thirdStep = () => {
    setSelectedStep(3); // Set the selected step to 3 when the button is clicked
  };

  const fourthStep = () => {
    setSelectedStep(4); // Set the selected step to 4 when the button is clicked
  };
  const fifthStep = () => {
    setSelectedStep(5); // Set the selected step to 4 when the button is clicked
  };

  useEffect(() => {
    // Function to move to the next step
    const moveToNextStep = () => {
      setSelectedStep((prevStep) => (prevStep === 5 ? 1 : prevStep + 1));
    };

    // Start the timer to move through steps every 6 seconds
    const timer = setInterval(moveToNextStep, 6000);

    // Clean up the timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <div className='flex mt-8 gap-2'>
      <button
        className='flex justify-center align-middle gap-4 w-[200px] items-center'
        onClick={firstStep}
        style={{
          borderColor: selectedStep === 1 ? colorStages.strokeColor : colorStages.defaultStrokeColor,
        }}
      >
        <h1
          className='font-SpaceGrotesk text-[15px] flex gap-1'
          style={{ color: selectedStep === 1 ? colorStages.strokeColor : colorStages.defaultStrokeColor }}
        >
          Step <span>1</span>
        </h1>
        <div
          className='w-10 h-10 rounded-full text-center flex items-center justify-center text-white'
          style={{ background: selectedStep === 1 ? colorStages.strokeColor : colorStages.defaultStrokeColor }}
        >
          1
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='103'
          height='2'
          viewBox='0 0 103 2'
          fill='none'
          className='m-auto'
        >
          <path
            d='M0 1H102.5'
            stroke={selectedStep === 1 ? colorStages.strokeColor : colorStages.defaultStrokeColor}
            strokeWidth='2'
            strokeDasharray='4 4'
          />
        </svg>
      </button>

      {/* Second Step */}
      <button
        className='flex justify-center align-middle gap-4 w-[200px] items-center'
        onClick={secondStep}
        style={{
          borderColor: selectedStep === 2 ? colorStages.strokeColor : colorStages.defaultStrokeColor,
        }}
      >
        <h1
          className='font-SpaceGrotesk  text-[15px] flex gap-1'
          style={{ color: selectedStep === 2 ? colorStages.strokeColor : colorStages.defaultStrokeColor }}
        >
          Step <span>2</span>
        </h1>
        <div
          className='w-10 h-10 rounded-full text-center flex items-center justify-center text-white'
          style={{ background: selectedStep === 2 ? colorStages.strokeColor : colorStages.defaultStrokeColor }}
        >
          2
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='103'
          height='2'
          viewBox='0 0 103 2'
          fill='none'
          className='m-auto'
        >
          <path
            d='M0 1H102.5'
            stroke={selectedStep === 2 ? colorStages.strokeColor : colorStages.defaultStrokeColor}
            strokeWidth='2'
            strokeDasharray='4 4'
          />
        </svg>
      </button>

      {/* Third Step */}
      <button
        className='flex justify-center align-middle gap-4 w-[200px] items-center'
        onClick={thirdStep}
        style={{
          borderColor: selectedStep === 3 ? colorStages.strokeColor : colorStages.defaultStrokeColor,
        }}
      >
        <h1
          className='font-SpaceGrotesk  text-[15px] flex gap-1'
          style={{ color: selectedStep === 3 ? colorStages.strokeColor : colorStages.defaultStrokeColor }}
        >
          Step <span>3</span>
        </h1>
        <div
          className='w-10 h-10 rounded-full text-center flex items-center justify-center text-white'
          style={{ background: selectedStep === 3 ? colorStages.strokeColor : colorStages.defaultStrokeColor }}
        >
          3
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='103'
          height='2'
          viewBox='0 0 103 2'
          fill='none'
          className='m-auto'
        >
          <path
            d='M0 1H102.5'
            stroke={selectedStep === 3 ? colorStages.strokeColor : colorStages.defaultStrokeColor}
            strokeWidth='2'
            strokeDasharray='4 4'
          />
        </svg>
      </button>

      {/* Fourth Step */}
      <button
        className='flex justify-center align-middle gap-4 w-[200px] items-center'
        onClick={fourthStep}
        style={{
          borderColor: selectedStep === 4 ? colorStages.strokeColor : colorStages.defaultStrokeColor,
        }}
      >
        <h1
          className='font-SpaceGrotesk text-[15px] flex gap-1'
          style={{ color: selectedStep === 4 ? colorStages.strokeColor : colorStages.defaultStrokeColor }}
        >
          Step <span>4</span>
        </h1>
        <div
          className='w-10 h-10 rounded-full text-center flex items-center justify-center text-white'
          style={{ background: selectedStep === 4 ? colorStages.strokeColor : colorStages.defaultStrokeColor }}
        >
          4
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='103'
          height='2'
          viewBox='0 0 103 2'
          fill='none'
          className='m-auto'
        >
          <path
            d='M0 1H102.5'
            stroke={selectedStep === 4 ? colorStages.strokeColor : colorStages.defaultStrokeColor}
            strokeWidth='2'
            strokeDasharray='4 4'
          />
        </svg>
      </button>
      {/**fifth page */}
      <button
        className='flex justify-center align-middle gap-4 w-[200px] items-center'
        onClick={fifthStep}
        style={{
          borderColor: selectedStep === 5 ? colorStages.strokeColor : colorStages.defaultStrokeColor,
        }}
      >
        <h1
          className='font-SpaceGrotesk text-[15px] flex gap-1'
          style={{ color: selectedStep === 5 ? colorStages.strokeColor : colorStages.defaultStrokeColor }}
        >
          Step <span>5</span>
        </h1>
        <div
          className='w-10 h-10 rounded-full text-center flex items-center justify-center text-white'
          style={{ background: selectedStep === 5 ? colorStages.strokeColor : colorStages.defaultStrokeColor }}
        >
          5
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='103'
          height='2'
          viewBox='0 0 103 2'
          fill='none'
          className='m-auto'
        >
          <path
            d='M0 1H102.5'
            stroke={selectedStep === 5 ? colorStages.strokeColor : colorStages.defaultStrokeColor}
            strokeWidth='2'
            strokeDasharray='4 4'
          />
        </svg>
      </button>
    </div>
    <div className='h-[300px] mt-[50px]'>
        {selectedStep === 1 && <Firststep />} {/* Show Firststep component if selectedStep is 1 */}
        {selectedStep === 2 && <SecondStep />} {/* Show SecondStep component if selectedStep is 2 */}
        {selectedStep === 3 && <Thirdstep />} {/* Show Thirdstep component if selectedStep is 3 */}
        {selectedStep === 4 && <Fourthstep />} {/* Show Fourthstep component if selectedStep is 4 */}
        {selectedStep === 5 && <FifthStep />} {/* Show Fourthstep component if selectedStep is 4 */}
      </div>
    </>
  );
};

export default SkipperAppSteps;
