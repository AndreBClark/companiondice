import React from 'react';
import { CasinoOutlined, FavoriteBorder } from '@material-ui/icons';
import { View, StyleSheet, Pressable } from 'react-native';
import { tailwind } from '../tailwind';
const Action = ({ children, ...props }) => {
  return (
    // <Link href={props.alink}>
    <Pressable style={style.button}>
      <View className={style.wrapper}>
        {props.icon}
        <label className={style.label}>{props.label}</label>
      </View>
    </Pressable>
    // </Link>
  );
};
const Tabs = () => {
  return (
    <View style={style.nav}>
      <Action alink="/dice/20" label="Dice" icon={<CasinoOutlined />} />
      <Action alink="/hp" label="Health" icon={<FavoriteBorder />} />
    </View>
  );
};
const style = StyleSheet.create({
  nav: tailwind(
    `text-green-400 bg-purple-400 w-full h-16 w-full flex justify-center`
  ),
  button: tailwind(`flex-1 text-green-400 px-3 py-2`),
});

export default Tabs;
