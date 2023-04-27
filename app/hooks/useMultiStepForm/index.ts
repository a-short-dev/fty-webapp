import React, { ReactElement, useState } from 'react';
import PropTypes from 'prop-types';

/**
 *@param {ReactElement[]} steps .
 **/

const useMultiStepForm = (steps: ReactElement[]) => {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);

	function next() {
		setCurrentStepIndex((i) => {
			if (i >= steps.length - 1) return i;
			return i + 1;
		});
	}

	function back() {
		setCurrentStepIndex((i) => {
			if (i <= 0) return i;
			return i - 1;
		});
	}

	function goTo(index: number) {
		setCurrentStepIndex(index);
	}

	return {
		currentStepIndex,
		step: steps[currentStepIndex],
		isFirstStep: currentStepIndex === 0,
		isLastStep: currentStepIndex === steps.length - 1,
		goTo,
		back,
		next,
		steps,
	};
};

export default useMultiStepForm;
