import { Button, Field, Input } from "@fluentui/react-components";
import { AddRegular, SettingsRegular } from "@fluentui/react-icons";
import React from "react";

export const Header = () => {
  return (
    <div className="flex justify-between p-4">
      <div className="leftbuttons flex gap-2">
        <Button icon={<AddRegular />} />
        <Field aria-placeholder="Search">
          <Input />
        </Field>
      </div>
      <div className="rightbuttons">
        <Button icon={<SettingsRegular />} />
      </div>
    </div>
  );
};
