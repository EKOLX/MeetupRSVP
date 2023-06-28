import { FC } from "react";
import { FlatList, ListRenderItem, Text, View } from "react-native";

import { Locality } from "../types";
import { Props } from "./types";
import { styles } from "./styles";

const GroupedLocalities: FC<Props> = ({ localities }) => {
  const renderLocality: ListRenderItem<Locality> = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.locality}</Text>
      <Text>{item.count}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Grouped by Localities</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={localities}
        renderItem={renderLocality}
      />
    </View>
  );
};

export default GroupedLocalities;
