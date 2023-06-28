import User from "../../types/User";
import { AgeRange, Locality } from "./types";

export const groupUsers = (users: Array<User>) => {
  const ageGroup = { range_13_17: 0, range_18_24: 0, range_25_above: 0 };
  const localityGroup = {} as any;
  let guestsCount = 0;
  const professionCount = { employed: 0, student: 0 };

  users.forEach((user) => {
    // Group by age
    if (user.age >= 13 && user.age < 18) ageGroup.range_13_17 += 1;
    else if (user.age >= 18 && user.age < 25) ageGroup.range_18_24 += 1;
    else if (user.age >= 25) ageGroup.range_25_above += 1;

    // Group by locality
    if (localityGroup[user.locality]) {
      localityGroup[user.locality] += 1;
    } else {
      localityGroup[user.locality] = 1;
    }

    // Sum number of guests
    guestsCount += user.guestsCount;

    // Sum profession
    if (user.profession === "Employed") professionCount.employed += 1;
    else if (user.profession === "Student") professionCount.student += 1;
  });

  const ageRanges: Array<AgeRange> = [];
  for (const ageRange in ageGroup) {
    ageRanges.push({
      ageRange,
      count: ageGroup[ageRange as keyof typeof ageGroup],
    });
  }

  const localities: Array<Locality> = [];
  for (const locality in localityGroup) {
    localities.push({
      locality,
      count: localityGroup[locality as keyof typeof localityGroup],
    });
  }
  localities.sort((a, b) =>
    a.locality > b.locality ? 1 : b.locality > a.locality ? -1 : 0
  );

  return {
    ageRanges,
    localities,
    averageGroupSize: Math.round(guestsCount / users.length),
    professionCount,
  };
};
