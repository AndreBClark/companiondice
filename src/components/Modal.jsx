import React from 'react';
import Modal from 'react-native-modal';
// eslint-disable-next-line
const ModalCrossPlatform = (props) => <Modal {...props}>{props.children}</Modal>;

export default ModalCrossPlatform;
