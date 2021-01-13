import React, { useState } from 'react'
import { StyleSheet, View, Platform, Pressable } from 'react-native';
import { CosmicSVG, NateSVG, SvgIcon as SvgWrapper } from '../Svg';
import { tailwind } from '../tailwind';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import BaseText from '../BaseText';
import Anchor from '../Anchor';
import Modal from 'react-native-modal';
import ModalWeb from 'modal-enhanced-react-native-web'
import brandColor from '../brandColor';

const isWeb = Platform.OS == "web";

const Header = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.header}>
        <BaseText style={styles.heading1}>
          Luckbringer
            <Pressable
              style={styles.greenText}
              onPress={() => setModalVisible(true)}
              hitSlop={48}>
                <MaterialCommunityIcons
                  name="information" size={24} color={brandColor} />
            </Pressable>
        </BaseText>
      </View>
      {isWeb ? <ModalWeb
      onBackdropPress={() => setModalVisible(false)}
      isVisible={isModalVisible}>
        <Credits />
      </ModalWeb>
      : <Modal
      onBackdropPress={() => setModalVisible(false)}
      isVisible={isModalVisible}>
        <Credits />
      </Modal>
      }
    </>
  );
};

const Credits = () => {
  return(
    <View style={styles.modal}>
      <BaseText style={tailwind(`text-center font-bold text-2xl`)}>Created By</BaseText>
      <Anchor 
        style={styles.flexCol} 
        href="https://cosmicdivision.dev">
        <SvgWrapper label1="Andre Clark" label2="Developer">
          <CosmicSVG size="48px" />
        </SvgWrapper>
      </Anchor>
      <Anchor 
        style={styles.flexCol} 
        href="https://nathangoullette.com">
        <SvgWrapper label1="Nathan Goullette" label2="Designer">
          <NateSVG size="48px"/>
        </SvgWrapper>
      </Anchor>
      <Anchor
        style={styles.flexCol}
        href="https://github.com/AndreBClark/companiondice">
          <SvgWrapper label1="Github Repo">
            <Ionicons name="logo-github" size={48} color={brandColor} />
          </SvgWrapper>
      </Anchor>
    </View>
  )
}

const styles = StyleSheet.create({
  heading1: tailwind(`text-4xl font-bold text-center my-4`),
  header: tailwind(`w-full text-green-400 text-center bg-purple-500 pt-4`),
  modal: tailwind(`justify-around font-bold mx-auto h-96 rounded bg-purple-500 flex-col flex text-center w-72`),
  greenText: tailwind(`text-green-400`),
  paragraphCenter: tailwind(`mx-auto text-center`),
  flexCol: tailwind(`flex flex-col justify-center text-center`)
})

export default Header;