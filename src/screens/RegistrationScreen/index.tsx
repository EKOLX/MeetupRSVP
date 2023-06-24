import { Text, View } from "react-native";

import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { styles } from "./styles";

const RegistrationScreen = () => (
  <View style={styles.container}>
    <Text style={styles.header}>
      Please register to participate in the meetup
    </Text>

    <Input placeholder="Name" />
    <Input placeholder="Age" />
    <Input placeholder="Date of Birth" />
    <Input placeholder="Profession" />
    <Input placeholder="Locality" />
    <Input placeholder="Number of Guests" />
    <Input placeholder="Address" />

    <Button style={styles.submit} title="Submit" onPress={() => {}} />
  </View>
);

export default RegistrationScreen;
