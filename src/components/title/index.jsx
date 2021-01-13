import React, { useState } from 'react'
import { StyleSheet, View, Dimensions, Platform, Pressable } from 'react-native';
import { CosmicSVG, NateSVG, SvgIcon } from '../Svg';
import { tailwind } from '../tailwind';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 
import BaseText from '../BaseText';
import Anchor from '../Anchor';
import Modal from 'react-native-modal';
import brandColor from '../brandColor';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Platform.OS === "ios"
  ? Dimensions.get("window").height
  : require("react-native-extra-dimensions-android").get("REAL_WINDOW_HEIGHT");

const Header = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.header}>
        <BaseText style={styles.heading1}>
          Luckbringer
            <Pressable
              style={styles.btn}
              onPress={() => setModalVisible(true)}>
              <View style={styles.btn}>
                <MaterialCommunityIcons name="information" size={24} color={brandColor} />
              </View>
            </Pressable>
        </BaseText>
      </View>
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        coverScreen={true}
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}
        >
        <View style={styles.modal}>
          <BaseText style={tailwind(`text-center`)}>Created By</BaseText>
          <Anchor style={styles.flexCol} href="https://cosmicdivision.dev">
            <SvgIcon Svg={<CosmicSVG size="50px" />} label1="Andre Clark" label2="Developer" />
          </Anchor>
          <Anchor style={styles.flexCol} href="https://nathangoullette.com">
            <SvgIcon Svg={<NateSVG />} label1="Nathan Goullette" label2="Designer" />
          </Anchor>
          <Anchor
            href="https://github.com/AndreBClark/companiondice">
            <View>
              <Octicons name="mark-github" size={48} color={brandColor} />
              <BaseText>Github Repo</BaseText>
            </View>
          </Anchor>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  heading1: tailwind(`text-4xl font-bold text-center my-4`),
  header: tailwind(`w-full text-green-400 text-center bg-purple-500`),
  modal: tailwind("justify-around font-bold mx-auto h-96 rounded bg-purple-500 flex-col flex text-center max-w-full max-w-lg w-96"),
  modalWrapper: tailwind(`self-stretch absolute`),
  overlay: tailwind(`h-full absolute opacity-75 z-10 w-full top-0 left-0`),
  btn: tailwind(`w-8 h-6 text-green-400`),
  paragraphCenter: tailwind(`mx-auto text-center`),
  flexCol: tailwind(`flex flex-col text-center`)
})

export default Header;