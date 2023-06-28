import { FC } from "react";
import { Text, View } from "react-native";

import { Props } from "./types";
import { styles } from "./styles";

const Statistics: FC<Props> = ({
  averageGroupSize,
  employedCount,
  studentCount,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Average group size:</Text>
        <Text>{averageGroupSize}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Employed count:</Text>
        <Text>{employedCount}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>Student count:</Text>
        <Text>{studentCount}</Text>
      </View>
    </View>
  );
};

export default Statistics;
