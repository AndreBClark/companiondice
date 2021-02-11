import React, { useState } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { CosmicSVG, NateSVG, SvgIcon as SvgWrapper } from '../Svg';
import { tailwind } from '../tailwind';
import TailwindText from '../TailwindText';
import Anchor from '../Anchor';
import Modal from '../Modal';
import { theme } from '../Constants';

const tw = StyleSheet.create({
  heading1: tailwind('my-4'),
  header: {
    backgroundColor: theme.colors.card,
    ...tailwind('w-full text-center pt-4'),
  },
  modal: {
    backgroundColor: theme.colors.card,
    ...tailwind('justify-around font-bold mx-auto h-96 rounded flex-col flex text-center w-72'),
  },
  infoWrapper: {
    color: theme.colors.primary,
    ...tailwind('px-2'),
  },
  paragraphCenter: tailwind('mx-auto text-center'),
  flexCol: tailwind('flex flex-col justify-center text-center'),
});

const Header = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={tw.header}>
        <TailwindText style={tw.heading1} size="4xl" weight="bold">
          Luckbringer
          <Pressable
            style={tw.infoWrapper}
            onPress={() => setModalVisible(true)}
            hitSlop={48}
          >
            <MaterialCommunityIcons
              name="information"
              size={24}
              color={theme.colors.primary}
            />
          </Pressable>
        </TailwindText>
      </View>
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
      >
        <Credits />
      </Modal>
    </>
  );
};

const Credits = () => (
  <View style={tw.modal}>
    <TailwindText size="2xl" weight="bold">
      Created By
    </TailwindText>
    <Anchor style={tw.flexCol} href="https://cosmicdivision.dev">
      <SvgWrapper label1="Andre Clark" label2="Developer">
        <CosmicSVG />
      </SvgWrapper>
    </Anchor>
    <Anchor style={tw.flexCol} href="https://nathangoullette.com">
      <SvgWrapper label1="Nathan Goullette" label2="Designer">
        <NateSVG />
      </SvgWrapper>
    </Anchor>
    <Anchor
      style={tw.flexCol}
      href="https://github.com/AndreBClark/companiondice"
    >
      <SvgWrapper label1="Github Repo">
        <Ionicons name="logo-github" size={48} color={theme.colors.primary} />
      </SvgWrapper>
    </Anchor>
  </View>
);

export default Header;
