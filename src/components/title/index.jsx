import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { GithubSVG, CosmicSVG, NateSVG, InfoSVG, SvgIcon } from '../Svg';
import useOutsideClick from '../../hooks/useOutsideClick';
import { tailwind } from '../tailwind';
import Anchor from '../Anchor';

const Header = () => {
  const [infobtn, infoPressed] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => {
    infobtn === true && infoPressed(false);
  });
  return (
    <View style={styles.header} ref={ref}>
      <BaseText style={styles.heading1}>
        Luckbringer
        <Pressable
          accessibilityHint="more info Pressable"
          style={styles.btn}
          onPress={() => infoPressed(!infobtn)}>
          <SvgIcon Svg={<InfoSVG />} />
        </Pressable>
      </BaseText>
      {infobtn && <Modal />}
    </View>
  );
};
export default Header;

const Modal = () => {
  return(
    <>
      <View style={styles.modal}>
        <BaseText style={tailwind(`text-center`)}>Created By</BaseText>
        <Anchor style={styles.flexCol} href="https://cosmicdivision.dev">
          <SvgIcon Svg={<CosmicSVG />} label1="Andre Clark" label2="Developer" />
        </Anchor>
        <Anchor style={styles.flexCol} href="https://nathangoullette.com">
          <SvgIcon Svg={<NateSVG />} label1="Nathan Goullette" label2="Designer" />
        </Anchor>
        <Anchor
          style={styles.flexCol}
          href="https://github.com/AndreBClark/companiondice">
          <SvgIcon Svg={<GithubSVG />} label1="Github Repo" />
        </Anchor>
      </View>
      <View style={styles.overlay} />
    </>
  )
}
const styles = StyleSheet.create({
  heading1: tailwind(`text-4xl font-bold`),
  header: tailwind(`w-full text-green-400 text-center`),
  modal: tailwind("justify-around font-bold mx-auto absolute p-4 z-20 h-96 rounded bg-purple-500 inset-x-0 flex-col flex text-center max-w-full max-w-lg w-96 -top-full"),
  overlay: tailwind(`h-full absolute opacity-75 z-10 w-full top-0 left-0`),
  btn: tailwind(`ml-2 w-6 h-6 text-green-400`),
  paragraphCenter: tailwind(`mx-auto`),
  flexCol: tailwind(`flex flex-col`)
})

export const BaseText = props => {
  return(
    <Text {...props} 
      style={[tailwind('text-green-400 font-semibold'), props.style]}>
      {props.children}
    </Text>
  )
}