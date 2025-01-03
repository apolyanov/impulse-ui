import { BorderSizes, Radii, RadiiBlob, RadiiConditional, RadiiDrawn } from '../types';

export const borderSizes: BorderSizes = {
  sm: '1px',
  md: '2px',
  lg: '5px',
  xl: '10px',
  xxl: '25px',
};

export const radii: Radii = {
  sm: '2px',
  md: '5px',
  lg: '1rem',
  xl: '2rem',
  xxl: '4rem',
  xxxl: '8rem',
  round: '1e5px',
};

export const radiiDrawn: RadiiDrawn = {
  drawn1: '255px 15px 225px 15px / 15px 225px 15px 255px',
  drawn2: '125px 10px 20px 185px / 25px 205px 205px 25px',
  drawn3: '15px 255px 15px 225px / 225px 15px 255px 15px',
  drawn4: '15px 25px 155px 25px / 225px 150px 25px 115px',
  drawn5: '250px 25px 15px 20px / 15px 80px 105px 115px',
  drawn6: '28px 100px 20px 15px / 150px 30px 205px 225px',
};

export const radiiBlob: RadiiBlob = {
  blob1: '30% 70% 70% 30% / 53% 30% 70% 47%',
  blob2: '53% 47% 34% 66% / 63% 46% 54% 37%',
  blob3: '37% 63% 56% 44% / 49% 56% 44% 51%',
  blob4: '63% 37% 37% 63% / 43% 37% 63% 57%',
  blob5: '49% 51% 48% 52% / 57% 44% 56% 43%',
};

export const radiiConditional: RadiiConditional = {
  conditional1: 'clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-1))',
  conditional2: 'clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-2))',
  conditional3: 'clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-3))',
  conditional4: 'clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-4))',
  conditional5: 'clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-5))',
  conditional6: 'clamp(0px, calc(100vw - 100%) * 1e5, var(--radius-6))',
};
