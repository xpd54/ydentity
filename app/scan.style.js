import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.gray,
      alignItems: 'center',
      justifyContent: 'center',
    },
    maintext: {
      fontSize: SIZES.medium,
      margin: SIZES.large,
    },
    barcodebox: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 300,
      width: 300,
      overflow: 'hidden',
      borderRadius: SIZES.xLarge,
      backgroundColor: COLORS.red
    }
  });
export default styles;