import { create } from "react-test-renderer";

import Form from "../index";
import { InputsModel } from "../../types";

describe("Registration screen: Form component", () => {
  const inputErrors = {} as Partial<InputsModel>;
  const handleOnInputChange = jest.fn();
  const handleOnError = jest.fn();
  const handleOnSubmit = jest.fn();

  const form = create(
    <Form
      errors={inputErrors}
      onInputChange={handleOnInputChange}
      onError={handleOnError}
      onSubmit={handleOnSubmit}
    />
  );

  it("should match snapshot", () => {
    const tree = form.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
