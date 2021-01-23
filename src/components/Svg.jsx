import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Polygon, Rect } from 'react-native-svg';
import { tailwind } from './tailwind';
import TailwindText from './TailwindText';
import { theme } from './Constants';

export const SvgIcon = props => {
  return (
    <View style={tailwind(`w-full items-center justify-center text-center`)}>
      {props.children}
      {props.label1 && (
        <TailwindText weight="bold">{props.label1}</TailwindText>
      )}
      {props.label2 && <TailwindText>{props.label2}</TailwindText>}
    </View>
  );
};
export const D4 = props => {
  return (
    <Svg {...props} stroke={theme.colors.primary} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' width={props.size} height={props.size} viewBox="0 1 24 24">
      <Polygon fill={theme.colors.primary} points="12,2.4 22.8,21.6 1.2,21.6" rx="2" />
    </Svg>
  );
};
export const D6 = props => {
  return (
    <Svg {...props}
      viewBox="0 0 24 24"
      width={props.size} height={props.size}
      fill={theme.colors.primary}>
      <Rect x="2" y="2" width="20" height="20" rx="4" ry="4" />
    </Svg>
  );
};
export const D8 = props => {
  return (
    <Svg width={props.size} height={props.size} fill={theme.colors.primary} viewBox="0 0 24 24" {...props}>
      <Rect x="3" y="3" rotation="45" origin="12,12" width="18" height="18" rx="2" />
    </Svg>
  );
};
export const D10 = props => {
  return (
    <Svg width={props.size} height={props.size} fill={theme.colors.primary} viewBox="0 0 24 24" {...props}>
      <Rect x="3" y="3" rotation="45" origin="12,12" width="18" height="18" rx="2" />
    </Svg>
  );
};
export const D12 = props => {
  return (
    <Svg
      {...props}
      viewBox="0 0 24 24"
      stroke={theme.colors.primary}
      fill={theme.colors.primary}
      strokeLinejoin="round"
      strokeWidth="4"
      width={props.size}
      height={props.size}
      strokeLinecap="round">
      <Polygon points="12,2.4 21.6,9.6 18,20 6,20 2.4,9.6" />
    </Svg>
  );
};
export const D20 = props => {
  return (
    <Svg
      {...props}
      viewBox="0 0 24 24"
      fill={theme.colors.primary}
      stroke={theme.colors.primary}
      width={props.size}
      height={props.size}
      strokeWidth="4.5"
      strokeLinejoin="round"
      strokeLinecap="round">
      <Polygon points="7.2,3.6 16.8,3.6 21.6,12 16.8,20.4 7.2,20.4 2.4,12"
        rotation="90"
        origin="12,12"
      />
    </Svg>
  );
};
export const D100 = props => {
  return (
    <Svg
      {...props}
      fill={theme.colors.primary}
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24">
      <Path
        d="M20.75 14.69l-8.35 6.19a.71.71 0 0 1-.8 0l-8.3-6.16c-.18-.1-.3-.6-.3-.77V9.98c0-.2.16-.72.4-.83l8.2-6.03a.71.71 0 0 1 .8 0l8.2 6.03c.24.11.4.62.4.83v3.97c0 .16-.1.63-.25.74z"
        fillRule="nonzero"
      />
    </Svg>
  );
};

export const CosmicSVG = props => {
  return (
    <Svg
      width={props.size}
      height={props.size}
      fill={theme.colors.primary}
      alt="Cosmic Division Logo"
      viewBox="0 0 42 31">
      <Path d="M13 1l2 9-7 9 9 3 2 9-17-5-2-8L10 4zm12 29l-2-9 8-9-11-3-2-9 21 6 1 7z" />
    </Svg>
  );
};

export const NateSVG = props => {
  return (
    <Svg
      width={props.size}
      height={props.size}
      fill={theme.colors.primary}
      viewBox="0 0 138 138">
      <Path d="M69.1 130.8a61.6 61.6 0 1161.7-61.6A61.6 61.6 0 0169 130.8zm0-116.5a54.9 54.9 0 00-54.8 52.2h25.3V49.3L33 56h-7.4l14-14.8h5.6l10.5 25.3H64V41.2h5.6v22l19.4-22L106.8 56h-8.5l-9.4-7.4-14.9 18h43.3L89 97 69.5 75.4V97h-5.6l-11-25.3h-7.7v25.3h-5.6V71.8H14.3A54.9 54.9 0 1069 14.3zM45.2 54v12.4h5zm13.3 17.7l5.4 12.4V71.8zm15.7 0L89 88.6l14.5-16.8z" />
      <Path
        fill="none"
        d="M69.1 0A69.1 69.1 0 110 69.1 69.1 69.1 0 0169.1 0z"
      />
    </Svg>
  );
};
