import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { GithubSVG, CosmicSVG, NateSVG, InfoSVG } from '../dice';
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
      <BaseText style={styles.h1}>
        Luckbringer
      </BaseText>
      <Pressable
        accessibilityHint="more info Pressable"
        style={styles.btn}
        onPress={() => infoPressed(!infobtn)}>
        <InfoSVG />
      </Pressable>
      {infobtn && <Modal />}
    </View>
  );
};
export default Header;

const Modal = () => {
  return(
    <>
      <View style={styles.modal}
        className={styles.active}>
        <BaseText style={tailwind(`text-center`)}>Created By</BaseText>
        <Anchor style={styles.flexCol} href="https://cosmicdivision.dev">
          <View style={tailwind(`h-6`)}>
            <CosmicSVG />
          </View>
          <BaseText>Andre Clark</BaseText>
          <BaseText style={styles.paragraphCenter}>Developer</BaseText>
        </Anchor>
        <Anchor style={styles.flexCol} href="https://nathangoullette.com">
          <View style={tailwind(`h-6`)}>
            <NateSVG />
          </View>
          <BaseText>Nathan Goullette</BaseText>
          <BaseText styles={styles.paragraphCenter}>Designer</BaseText>
        </Anchor>
        <Anchor
          style={styles.flexCol}
          href="https://github.com/AndreBClark/companiondice">
          <View style={tailwind(`h-6`)}>
            <GithubSVG />
          </View>
          <BaseText>Github Repo</BaseText>
        </Anchor>
      </View>
      <View style={styles.overlay} />
    </>
  )
}
const styles = StyleSheet.create({
  header: tailwind(`w-full text-green-400 text-center`),
  modal: tailwind("justify-around font-bold mx-auto absolute p-4 z-20 h-96 rounded bg-purple-500 inset-x-0 flex-col flex text-center max-w-full max-w-lg w-96  -top-full"),
  overlay: tailwind(`h-full absolute opacity-75 z-10 w-full top-0 left-0`),
  btn: tailwind(`py-4 px-2 h-6 text-green-400`),
  h1: tailwind(`text-2xl font-light text-center`),
  paragraphCenter: tailwind(`mx-auto`),
  flexCol: tailwind(`flex flex-col`)
})

const BaseText = props => {
    return <Text style={tailwind(`text-green-400 font-semibold`)}>{props.children}</Text>
}