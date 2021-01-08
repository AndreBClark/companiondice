import React, { useState, useRef } from 'react'
import { Text, View, Button } from 'react-native';
import { GithubSVG, CosmicSVG, NateSVG, InfoSVG } from '../dice';
import useOutsideClick from '../../hooks/useOutsideClick';
import style from './style.scss';
import tailwind from 'tailwind-rn';


const Header = () => {
  const [infobtn, infoClicked] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => {
    if (infobtn === true) {
      infoClicked(false);
    }
  });
  return (
    <View style={infobtn ? style.overlay : '' && style.header}>
      <Text className={style.Text}>
        Luckbringer
        <Button
          aria-label="more info Button"
          className="py-4 px-2"
          onClick={() => infoClicked(!infobtn)}>
          <InfoSVG />
        </Button>
      </Text>
      <View style={tailwind("justify-around font-bold mx-auto transition duration-700 ease-out transition-all absolute p-4 z-20 h-96 rounded bg-deeppurple-500 inset-x-0 flex-col flex text-center max-w-full")}
      className={infobtn ? style.active : ''} ref={ref}>
        <Text className="text-center">Created By</Text>
        <a href="https://cosmicdivision.dev">
          <CosmicSVG />
          Andre Clark
          <p>Developer</p>
        </a>
        <a href="https://nathangoullette.com">
          <NateSVG />
          Nathan Goullette
          <p>Designer</p>
        </a>
        <a href="https://github.com/AndreBClark/companiondice">
          <GithubSVG />
          Github Repo
        </a>
      </View>
    </View>
  );
};
export default Header;
