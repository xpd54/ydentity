import React, { useState, useEffect } from 'react';
import { useRouter } from "expo-router";
import { Text, View, Button} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from "./scan.style";
import { COLORS } from "../constants";
import addService from '../hooks/addService';
const Scan = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')
  const router = useRouter();
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {askForCameraPermission();}, []);

  // send scaned data to server
  // ToTp have formate like this 
  /*
   otpauth://totp/ACME%20Co:john.doe@email.com?secret=HXDMVJECJJWSRB3HWIZR4IFUGFTMXBOZ&issuer=ACME%20Co&algorithm=SHA1&digits=6&period=30
  */
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    const url = new URL(data)
    const obj = Object.fromEntries(new URLSearchParams(url.search))
    const email = url.pathname.slice(1)
    const title = obj.issuer
    const logo = obj.logo
    const auth = obj.secret
    // addService("addService", {title, email, logo, auth})
    addService("addService", {title, email, logo, auth},() => {
      router.back()
    })
    console.log('Type: ' + type + '\nData: ' + email)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  return (
        <View style={styles.container}>
          <View style={styles.barcodebox}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ height: 400, width: 400 }} />
          </View>
          <Text style={styles.maintext}>{text}</Text>

          {
            scanned && 
            <Button 
                title={'Finised Reading'}
                color={COLORS.red} 
                onPress={() => router.back()}
            />
          }
        </View>
  );
}
export default Scan