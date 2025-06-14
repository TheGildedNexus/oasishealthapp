import React from "react";

import { DayPicker } from "react-day-picker";

const SelectedDateContext = React.createContext({
  selected: undefined,
  setSelected: () => {}
})

function DayButton(props) {
  const { day, modifiers, ...buttonProps } = props;

  const { setSelected } = React.useContext(SelectedDateContext);
  return (
    <button
      {...buttonProps}
      onClick={() => setSelected?.(day.date)}
    />
  );
}

export function CustomDayButton() {
  const [selected, setSelected] = React.useState();

  return (
    <SelectedDateContext.Provider value={{ selected, setSelected }}>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        components={{
          DayButton
        }}
      />
    </SelectedDateContext.Provider>
  );
}
