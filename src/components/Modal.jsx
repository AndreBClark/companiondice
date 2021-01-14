import React from 'react';
import { Platform } from 'react-native';
import Modal from 'react-native-modal';
import ModalWeb from 'modal-enhanced-react-native-web';

const isWeb = Platform.OS == "web";
const ModalCrossPlatform = props => isWeb ? <ModalWeb {...props}>{props.children}</ModalWeb> : <Modal {...props}>{props.children}</Modal>

export default ModalCrossPlatform;