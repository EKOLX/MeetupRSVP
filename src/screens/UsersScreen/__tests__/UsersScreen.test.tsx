import { ReactTestRenderer, create } from "react-test-renderer";

import UsersScreen from "..";
import { UserStackScreenProps } from "../../../navigation/types";

jest.mock("react-redux", () => {
  const ActualReactRedux = jest.requireActual("react-redux");
  return {
    ...ActualReactRedux,
    useDispatch: jest.fn(),
    useSelector: jest.fn().mockImplementation(() => ({})),
  };
});

describe("Users screen", () => {
  let usersScreen: ReactTestRenderer;

  beforeEach(() => {
    usersScreen = create(
      <UsersScreen {...({} as UserStackScreenProps<"Users">)} />
    );
  });

  it("should match snapshot", () => {
    const tree = usersScreen.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
