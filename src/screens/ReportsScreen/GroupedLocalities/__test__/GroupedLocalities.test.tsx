import { create } from "react-test-renderer";

import GroupedLocalities from "../GroupedLocalities";
import { Locality } from "../../types";

describe("GroupedLocalities component", () => {
  const localities: Array<Locality> = [
    {
      locality: "Prague",
      count: 3,
    },
    {
      locality: "Russia",
      count: 5,
    },
  ];

  const groupedLocalities = create(
    <GroupedLocalities localities={localities} />
  );

  it("should match snapshot", () => {
    const tree = groupedLocalities.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
