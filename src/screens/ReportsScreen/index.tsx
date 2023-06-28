import { useMemo } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

import { AppState } from "../../store/AppState";
import { RootDrawerScreenProps } from "../../navigation/types";
import AgeRanges from "./AgeRanges";
import Statistics from "./Statistics";
import GroupedLocalities from "./GroupedLocalities";
import { groupUsers } from "./utils";
import { styles } from "./styles";

const ReportsScreen = ({}: RootDrawerScreenProps<"Reports">) => {
  const users = useSelector((state: AppState) => state.user.users);
  const { ageRanges, localities, averageGroupSize, professionCount } = useMemo(
    () => groupUsers(users),
    [users]
  );

  return (
    <View style={styles.container}>
      <AgeRanges ageRanges={ageRanges} />

      <Statistics
        averageGroupSize={averageGroupSize}
        employedCount={professionCount.employed}
        studentCount={professionCount.student}
      />

      <GroupedLocalities localities={localities} />
    </View>
  );
};

export default ReportsScreen;
