import React from 'react';
import LSGradientScreen from '@/components/LoadingScreens/gradient-waves/LSGradientWaves';

export default function LoadingScreen({ children, type = 'gradient-waves' }) {
  return (
    <>{type === 'gradient-waves' && <LSGradientScreen image={children} />}</>
  );
}
