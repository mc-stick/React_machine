import React from 'react';
import { Button } from 'react-bootstrap';

const SumButton = ({ onSum, value }) => {
  return (
    <Button className='col-lg-12 mb-3' variant="primary" onClick={() => onSum(value)}>
      RD$: {value}
    </Button>
  );
};

export default SumButton;