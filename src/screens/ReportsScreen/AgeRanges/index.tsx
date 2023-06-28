import { FC } from "react";
import { Text, View } from "react-native";
import { VictoryPie } from "victory-native";

import { Props } from "./types";
import { styles } from "./styles";

const AgeRanges: FC<Props> = ({ ageRanges }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Age Ranges</Text>
      <VictoryPie
        colorScale={["gold", "orange", "tomato"]}
        startAngle={90}
        endAngle={-90}
        data={ageRanges}
        x="ageRange"
        y="count"
        labels={({ datum }) =>
          datum.ageRange === "range_25_above"
            ? "25+"
            : datum.ageRange === "range_18_24"
            ? "18-24"
            : datum.ageRange === "range_13_17"
            ? "13-17"
            : ""
        }
        labelPlacement="perpendicular"
      />
    </View>
  );
};

export default AgeRanges;
