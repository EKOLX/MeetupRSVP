import User from "../../../types/User";
import { groupUsers } from "../utils";

describe("Reports screen: utils functions", () => {
  describe("groupUsers test suite", () => {
    it("should group users", () => {
      const users: Array<User> = [
        {
          id: 1,
          name: "Nataly",
          age: 18,
          birthdate: "31.06.2005",
          profession: "Student",
          locality: "Prague",
          guestsCount: 1,
          address: "Prague street",
        },
        {
          id: 2,
          name: "Emely",
          age: 20,
          birthdate: "22.06.2000",
          profession: "Student",
          locality: "USA",
          guestsCount: 2,
          address: "USA street",
        },
        {
          id: 3,
          name: "Jack",
          age: 22,
          birthdate: "22.06.2002",
          profession: "Student",
          locality: "USA",
          guestsCount: 0,
          address: "Elm street",
        },
        {
          id: 4,
          name: "Jim",
          age: 33,
          birthdate: "31.06.1973",
          profession: "Employed",
          locality: "Canada",
          guestsCount: 1,
          address: "Canada street",
        },
      ];

      const { ageRanges, localities, averageGroupSize, professionCount } =
        groupUsers(users);

      // ageRanges
      expect(ageRanges.length).toEqual(3);
      expect(ageRanges[0].ageRange).toEqual("range_13_17");
      expect(ageRanges[0].count).toEqual(0);
      expect(ageRanges[1].ageRange).toEqual("range_18_24");
      expect(ageRanges[1].count).toEqual(3);
      expect(ageRanges[2].ageRange).toEqual("range_25_above");
      expect(ageRanges[2].count).toEqual(1);
      // localities
      expect(localities.length).toEqual(3);
      expect(localities[0].locality).toEqual("Canada"); // C
      expect(localities[0].count).toEqual(1);
      expect(localities[1].locality).toEqual("Prague"); // P
      expect(localities[1].count).toEqual(1);
      expect(localities[2].locality).toEqual("USA"); // U
      expect(localities[2].count).toEqual(2);
      // averageGroupSize
      expect(averageGroupSize).toEqual(1);
      // professionCount
      expect(professionCount.employed).toEqual(1);
      expect(professionCount.student).toEqual(3);
    });
  });
});
