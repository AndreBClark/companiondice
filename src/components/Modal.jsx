import React from 'react';
import Modal from 'react-native-modal';

const ModalCrossPlatform = props =>
    <Modal {...props}>{props.children}</Modal>

export default ModalCrossPlatform;
