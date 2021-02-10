import { create } from 'tailwind-rn';
import styles from 'styles.json';
import custom from 'styles-custom.json';

const { tailwind, getColor } = create({ ...styles,
...custom });
export { tailwind, getColor };
