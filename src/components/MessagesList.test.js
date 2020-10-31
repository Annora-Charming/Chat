import React from "react";
import { shallow } from "enzyme";
import MessagesList from "./MessagesList";
import renderer from "react-test-renderer";

test("Messages list", () => {
  const messages = [{ nick: "TEST", message: "TEST" }];
  const component = shallow(<MessagesList messages={messages} />);
  expect(component.find("Message")).toHaveLength(1);
});

test("inline snapshot test", () => {
  const messages = [{ nick: "TEST", message: "TEST" }];
  const component = renderer
    .create(<MessagesList messages={messages} />)
    .toJSON();
  expect(component).toMatchInlineSnapshot(`
    <div
      id="messages_list"
    >
      <ul>
        <li>
          <b>
            TEST
            :
          </b>
          TEST
        </li>
      </ul>
      ;
    </div>
  `);
});
