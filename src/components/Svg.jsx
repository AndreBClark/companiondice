import React from 'react'
import Svg, { Path } from 'react-native-svg';
import { View } from 'react-native';
import { BaseText } from './title/index';
import { getColor, tailwind } from './tailwind'
export const brandColor = getColor(`green-400`)


export const SvgIcon = props => {
  return(
    <View style={tailwind(`h-6 w-full text-center`)}>
      {props.Svg}
      {props.label1 && <BaseText>{props.label1}</BaseText>}
      {props.label2 && <BaseText>{props.label2}</BaseText>}
    </View>
  )
}

export const D4 = props => {
  return (
    <Svg {...props} fill={brandColor}>
      <Path d="M12,0l12,24l-24,0l12,-24Z" />
    </Svg>
  );
};
export const D6 = props => {
  return (
    <Svg {...props} fill={brandColor}>
      <Path d="M3.8 3h16.4c.4 0 .8.4.8.8v16.4c0 .4-.4.8-.8.8H3.8a.8.8 0 0 1-.8-.8V3.8c0-.4.4-.8.8-.8z" fillRule="nonzero" />
    </Svg>
  );
};
export const D8 = props => {
  return (
    <Svg {...props} fill={brandColor}>
      <Path d="M12.41 2.17l8.42 9.42c.23.23.23.6 0 .82l-8.42 9.42a.6.6 0 0 1-.82 0l-8.42-9.42a.57.57 0 0 1 0-.82l8.42-9.42a.6.6 0 0 1 .82 0z" fillRule="nonzero" />
    </Svg>
  );
};
export const D10 = props => {
  return (
    <Svg {...props} fill={brandColor}>
      <Path d="M20.75 14.69l-8.35 6.19a.71.71 0 0 1-.8 0l-8.3-6.16c-.18-.1-.3-.6-.3-.77V9.98c0-.2.16-.72.4-.83l8.2-6.03a.71.71 0 0 1 .8 0l8.2 6.03c.24.11.4.62.4.83v3.97c0 .16-.1.63-.25.74z" fillRule="nonzero" />
    </Svg>
  );
};
export const D12 = props => {
  return (
    <Svg {...props} fill={brandColor}>
      <Path d="M11.61 3.71a.66.66 0 0 1 .78 0l7.78 5.66c.23.17.33.46.24.74l-2.97 9.14a.66.66 0 0 1-.63.46H7.19a.66.66 0 0 1-.63-.46L3.6 10.11a.66.66 0 0 1 .24-.74l7.78-5.66z" />
    </Svg>
  );
};
export const D20 = props => {
  return (
    <Svg {...props} fill={brandColor}>
      <Path fillRule="nonzero" d="M24 17.16c0 .5-.68.84-1.37 1.18l-9.65 5.4a2 2 0 0 1-1.96 0l-9.65-5.4C.97 18.17 0 17.66 0 17.16V7.1c0-.5.49-1.01 1.37-1.44l9.65-5.4a2 2 0 0 1 1.96 0l9.65 5.49C23.32 6 24 6.59 24 7.1v10.05z" />
    </Svg>
  );
};
export const D100 = props => {
  return (
    <Svg {...props} fill={brandColor}>
      <Path d="M20.75 14.69l-8.35 6.19a.71.71 0 0 1-.8 0l-8.3-6.16c-.18-.1-.3-.6-.3-.77V9.98c0-.2.16-.72.4-.83l8.2-6.03a.71.71 0 0 1 .8 0l8.2 6.03c.24.11.4.62.4.83v3.97c0 .16-.1.63-.25.74z" fillRule="nonzero" />
    </Svg>
  );
};
export const InfoSVG = props => {
  return(
    <Svg {...props} fill={brandColor}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </Svg>
  )
}

export const CosmicSVG = props => {
  return(
    <Svg {...props} fill={brandColor} alt="Cosmic Division Logo" viewBox="0 0 42 31">
      <Path fill="currentColor" d="M13 1l2 9-7 9 9 3 2 9-17-5-2-8L10 4zm12 29l-2-9 8-9-11-3-2-9 21 6 1 7z" />
    </Svg>
  )
}

export const NateSVG = props => {
  return(
    <Svg {...props} fill={brandColor} viewBox="0 0 138 138">
      <Path d="M69.1 130.8a61.6 61.6 0 1161.7-61.6A61.6 61.6 0 0169 130.8zm0-116.5a54.9 54.9 0 00-54.8 52.2h25.3V49.3L33 56h-7.4l14-14.8h5.6l10.5 25.3H64V41.2h5.6v22l19.4-22L106.8 56h-8.5l-9.4-7.4-14.9 18h43.3L89 97 69.5 75.4V97h-5.6l-11-25.3h-7.7v25.3h-5.6V71.8H14.3A54.9 54.9 0 1069 14.3zM45.2 54v12.4h5zm13.3 17.7l5.4 12.4V71.8zm15.7 0L89 88.6l14.5-16.8z"/>
      <Path fill="none" d="M69.1 0A69.1 69.1 0 110 69.1 69.1 69.1 0 0169.1 0z" />
    </Svg>
  )
}

export const GithubSVG = props => {
  return(
    <Svg {...props} fill={brandColor} viewBox=" 0 0 24 24">
      <Path d="M12 .3a12 12 0 00-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 011.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0012 .3" />
    </Svg>
  )
}