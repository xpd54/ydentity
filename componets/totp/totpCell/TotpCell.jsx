import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./TotpCell.style";
import { checkImageURL } from "../../../hooks/utils";

const TotpCell = ({ service, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(service.logo)
              ? service.logo
              : "https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_dropbox-1024.png",
          }}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.serviceName} numberOfLines={1}>
          {service.title}
        </Text>
        <Text style={styles.serviceEmail}>
          {service.email}
        </Text>
        <Text style={styles.serviceValue}>
          {service.value}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TotpCell;
