import React from 'react';
import Modal from 'react-native-modal';
// import ModalWeb from 'modal-enhanced-react-native-web';
// import { isWeb } from '../components/Constants';

const ModalCrossPlatform = props =>
    <Modal {...props}>{props.children}</Modal>

export default ModalCrossPlatform;
