import { View, Text, TouchableOpacity, Image } from "react-native";
import {useState, useEffect} from "react"
import styles from "./TotpCell.style";
import { checkImageURL } from "../../../hooks/utils";
import totp from "totp-generator";
const TotpCell = ({ service, handleNavigate }) => {
  const [value, setValue] = useState(totp(service.auth, { period: 60}));
  useEffect(() => {
    const interval = setInterval(() => {
      setValue(totp(service.auth, { period: 60}))
    }, 60000);
    return () => clearInterval(interval);
  }, []);

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
          { value }
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TotpCell;
