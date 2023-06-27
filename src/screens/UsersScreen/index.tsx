import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { styles } from "./styles";
import Colors from "../../constants/Colors";
import { FC } from "react";
import { InputsModel } from "../RegistrationScreen/types";

const data = [
  {
    id: 1,
    name: "Hanna Pietrusiak",
    age: 76,
    birthdate: "17.01.2023",
    profession: "Student",
    locality: "Prokopâ€™yevsk",
    guestsCount: 2,
    address: "1941 Blaine Plaza",
  },
  {
    id: 2,
    name: "Britt Blann",
    age: 25,
    birthdate: "10.10.2022",
    profession: "Student",
    locality: "LianoklÃ¡dhion",
    guestsCount: 1,
    address: "910 Hallows Point",
  },
  {
    id: 3,
    name: "Klement Seys",
    age: 35,
    birthdate: "03.12.2022",
    profession: "Employed",
    locality: "Birmingham",
    guestsCount: 1,
    address: "601 Victoria Pass",
  },
  {
    id: 4,
    name: "Carri Hamson",
    age: 69,
    birthdate: "02.02.2023",
    profession: "Student",
    locality: "Salaza",
    guestsCount: 2,
    address: "1 Jenifer Drive",
  },
  {
    id: 5,
    name: "Bobbie Steele",
    age: 58,
    birthdate: "19.04.2023",
    profession: "Employed",
    locality: "Sagaing",
    guestsCount: 0,
    address: "7 Stoughton Trail",
  },
  {
    id: 6,
    name: "Etty Purrier",
    age: 85,
    birthdate: "12.07.2022",
    profession: "Employed",
    locality: "Nandu",
    guestsCount: 1,
    address: "416 Continental Alley",
  },
  {
    id: 7,
    name: "Kort Denmead",
    age: 10,
    birthdate: "07.05.2023",
    profession: "Student",
    locality: "Haikou",
    guestsCount: 0,
    address: "455 Thierer Lane",
  },
  {
    id: 8,
    name: "Stafani Wansbury",
    age: 79,
    birthdate: "16.04.2023",
    profession: "Student",
    locality: "Nikhom Phattana",
    guestsCount: 2,
    address: "2617 Badeau Road",
  },
  {
    id: 9,
    name: "Salvatore Waiton",
    age: 42,
    birthdate: "22.03.2023",
    profession: "Student",
    locality: "ZÃ¡horovice",
    guestsCount: 0,
    address: "5711 Little Fleur Crossing",
  },
  {
    id: 10,
    name: "Leoine Gainsford",
    age: 70,
    birthdate: "20.06.2023",
    profession: "Employed",
    locality: "Damaishan",
    guestsCount: 1,
    address: "822 Sunbrook Center",
  },
  {
    id: 11,
    name: "Susan Gonnard",
    age: 89,
    birthdate: "08.03.2023",
    profession: "Student",
    locality: "PavliÅ¡",
    guestsCount: 2,
    address: "61063 Bunker Hill Plaza",
  },
  {
    id: 12,
    name: "Billi Gorhardt",
    age: 28,
    birthdate: "02.05.2023",
    profession: "Employed",
    locality: "Monte Agudo",
    guestsCount: 2,
    address: "0 Dryden Court",
  },
  {
    id: 13,
    name: "Ethel Keattch",
    age: 90,
    birthdate: "27.04.2023",
    profession: "Student",
    locality: "Al Nashmah",
    guestsCount: 1,
    address: "7301 Knutson Lane",
  },
  {
    id: 14,
    name: "Earlie Liley",
    age: 69,
    birthdate: "15.03.2023",
    profession: "Employed",
    locality: "Nantou",
    guestsCount: 0,
    address: "66492 Kipling Avenue",
  },
  {
    id: 15,
    name: "Nedda Colvine",
    age: 81,
    birthdate: "28.06.2022",
    profession: "Student",
    locality: "Huxu",
    guestsCount: 2,
    address: "91654 Gina Park",
  },
  {
    id: 16,
    name: "Armin Lauritzen",
    age: 103,
    birthdate: "09.02.2023",
    profession: "Employed",
    locality: "Kyzyl-Kyya",
    guestsCount: 0,
    address: "26344 Eagle Crest Lane",
  },
  {
    id: 17,
    name: "Raphaela Hamflett",
    age: 27,
    birthdate: "20.12.2022",
    profession: "Student",
    locality: "Xinxing",
    guestsCount: 2,
    address: "6729 Reinke Parkway",
  },
  {
    id: 18,
    name: "Sydney Hlavecek",
    age: 17,
    birthdate: "28.08.2022",
    profession: "Employed",
    locality: "Dasongshu",
    guestsCount: 0,
    address: "152 Menomonie Trail",
  },
  {
    id: 19,
    name: "Alexandra Proske",
    age: 85,
    birthdate: "07.11.2022",
    profession: "Employed",
    locality: "Bor",
    guestsCount: 1,
    address: "370 Delladonna Crossing",
  },
  {
    id: 20,
    name: "Prudy O'Geneay",
    age: 59,
    birthdate: "22.03.2023",
    profession: "Student",
    locality: "El CopÃ©",
    guestsCount: 2,
    address: "31 Brickson Park Hill",
  },
  {
    id: 21,
    name: "Gauthier Ousley",
    age: 90,
    birthdate: "12.02.2023",
    profession: "Employed",
    locality: "Huanghu",
    guestsCount: 1,
    address: "3 Maple Lane",
  },
  {
    id: 22,
    name: "Enriqueta Steward",
    age: 45,
    birthdate: "25.08.2022",
    profession: "Student",
    locality: "Macinhata da Seixa",
    guestsCount: 0,
    address: "01 Schurz Lane",
  },
  {
    id: 23,
    name: "Patin Ainscough",
    age: 52,
    birthdate: "10.08.2022",
    profession: "Student",
    locality: "Fier",
    guestsCount: 0,
    address: "9 Londonderry Parkway",
  },
  {
    id: 24,
    name: "Dex Cowgill",
    age: 30,
    birthdate: "02.09.2022",
    profession: "Student",
    locality: "New Orleans",
    guestsCount: 1,
    address: "87 Blackbird Court",
  },
  {
    id: 25,
    name: "Thekla Duffield",
    age: 13,
    birthdate: "31.01.2023",
    profession: "Student",
    locality: "Yangjinzhuang",
    guestsCount: 2,
    address: "31 Mitchell Circle",
  },
  {
    id: 26,
    name: "Joana Kingswold",
    age: 60,
    birthdate: "09.11.2022",
    profession: "Employed",
    locality: "San Roque",
    guestsCount: 1,
    address: "45 Pierstorff Lane",
  },
  {
    id: 27,
    name: "Aurie Ransfield",
    age: 35,
    birthdate: "19.04.2023",
    profession: "Student",
    locality: "Tangkolo",
    guestsCount: 2,
    address: "0596 Drewry Court",
  },
  {
    id: 28,
    name: "Janice Werndly",
    age: 42,
    birthdate: "11.10.2022",
    profession: "Student",
    locality: "Svecha",
    guestsCount: 1,
    address: "29 Delaware Terrace",
  },
  {
    id: 29,
    name: "Tammi Buzzing",
    age: 19,
    birthdate: "16.01.2023",
    profession: "Student",
    locality: "Lewotukan",
    guestsCount: 0,
    address: "3920 Ohio Plaza",
  },
  {
    id: 30,
    name: "Andi Aronowicz",
    age: 58,
    birthdate: "06.06.2023",
    profession: "Employed",
    locality: "Torsby",
    guestsCount: 0,
    address: "59544 Namekagon Point",
  },
  {
    id: 31,
    name: "Stevy Ector",
    age: 32,
    birthdate: "16.06.2023",
    profession: "Student",
    locality: "ChÃ¢lons-en-Champagne",
    guestsCount: 0,
    address: "3198 Gale Road",
  },
  {
    id: 32,
    name: "Lenard Julian",
    age: 15,
    birthdate: "18.01.2023",
    profession: "Student",
    locality: "Raoyang",
    guestsCount: 0,
    address: "47 Banding Way",
  },
  {
    id: 33,
    name: "Jeralee Pfaff",
    age: 9,
    birthdate: "25.12.2022",
    profession: "Employed",
    locality: "Setro",
    guestsCount: 2,
    address: "05123 Riverside Junction",
  },
];

interface User {
  id: number;
  name: string;
  age: number;
  birthdate: string;
  profession: string;
  locality: string;
  guestsCount: number;
  address: string;
}

const UsersScreen = () => {
  const renderUser: ListRenderItem<User> = ({ item: user }) => {
    return (
      <View style={styles.userItem}>
        <Text>{user.name}</Text>
        <Text>{user.locality}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholderTextColor={Colors.gray}
        placeholder="Search..."
      />

      <FlatList
        style={styles.usersContainer}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderUser}
      />
    </View>
  );
};

export default UsersScreen;
