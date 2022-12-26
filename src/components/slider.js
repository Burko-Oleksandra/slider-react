import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 12000,
    label: '12000p.',
  },
  //   {
  //     value: 61400,
  //     label: '',
  //   },
  //   {
  //     value: 110800,
  //     label: '',
  //   },
  //   {
  //     value: 160200,
  //     label: '',
  //   },
  //   {
  //     value: 209600,
  //     label: '',
  //   },
  {
    value: 259000,
    label: '259000p.',
  },
  //   {
  //     value: 308400,
  //     label: '',
  //   },
  //   {
  //     value: 357800,
  //     label: '',
  //   },
  //   {
  //     value: 407200,
  //     label: '',
  //   },
  //   {
  //     value: 456600,
  //     label: '',
  //   },
  {
    value: 506000,
    label: '506000p.',
  },
  //   {
  //     value: 555400,
  //     label: '',
  //   },
  //   {
  //     value: 604800,
  //     label: '',
  //   },
  //   {
  //     value: 654200,
  //     label: '',
  //   },
  //   {
  //     value: 703600,
  //     label: '',
  //   },
  {
    value: 753000,
    label: '753000p.',
  },
  //   {
  //     value: 802400,
  //     label: '',
  //   },
  //   {
  //     value: 851800,
  //     label: '',
  //   },
  //   {
  //     value: 901200,
  //     label: '',
  //   },
  //   {
  //     value: 950600,
  //     label: '',
  //   },
  {
    value: 1000000,
    label: '1000000p.',
  },
];

function valuetext(value) {
  return `${value}p`;
}

export default function DiscreteSlider() {
  return (
    <>
      <Box sx={{ width: 400 }}>
        <Slider
          aria-label="Custom marks"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
          step={1}
          marks={marks}
          min={12000}
          max={1000000}
          sx={{
            color: 'blue',
            '& .MuiSlider-thumb': {
              borderRadius: '50%',
              border: '3px solid blue',
              backgroundColor: 'white',
              '&.Mui-active': {
                boxShadow: 'none',
              },
              '&.Mui-focusVisible': {
                boxShadow: 'none',
              },
            },
            '& .MuiSlider-mark': {
              color: 'lightgray',
              height: '12px',
            },
            '& .MuiSlider-markActive': {
              backgroundColor: 'lightgray',
              height: '10px',
            },
            '& .MuiSlider-markLabel': {
              color: 'lightgray',
              fontSize: '8px',
            },
            '& .MuiSlider-markLabelActive': {
              color: 'black',
              fontSize: '10px',
            },
            '& .MuiSlider-valueLabel': {
              backgroundColor: 'blue',
              fontSize: '8px',
            },
          }}
        />
        <p style={{ fontSize: '14px', fontWeight: '600' }}>
          Ваша прибыль:
          <span></span>
        </p>
      </Box>
    </>
  );
}
