import { View, Text, ActivityIndicator} from "react-native";
import TotpCell from "./totpCell/TotpCell";
import useFetch from "../../hooks/useFetch";
import { COLORS } from "../../constants";

const Totp = () => {
  const { data, isLoading, error } = useFetch("getAllServices", {});
  return (
    <View>
      {
        isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) :
        (data?.map((service) =>
        (
          <TotpCell 
            service={service}
            key={service._id}
            handleNavigate={() => {}}
          />
        ))
      )}
    </View>
  )
}

export default Totp;
