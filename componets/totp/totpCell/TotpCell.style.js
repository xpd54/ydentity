import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.small,
    marginVertical: SIZES.xxxSmall,
    borderRadius: SIZES.xSmall,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.gray,
  },
  logoContainer: {
    width: 70,
    height: 70,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logImage: {
    width: "90%",
    height: "90%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.large,
  },
  serviceName: {
    fontSize: SIZES.large,
    fontWeight: FONT.bold,
    color: COLORS.primary,
  },
  serviceEmail: {
    fontSize: SIZES.small + 2,
    fontWeight: FONT.medium,
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
  serviceValue: {
    fontSize: SIZES.xLarge,
    fontWeight: FONT.bold,
    color: COLORS.limeGreen,
    marginTop: 3,
  },
});

export default styles;
