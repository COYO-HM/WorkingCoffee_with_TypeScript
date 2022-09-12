import React, { useEffect, useState } from "react";

export const useInput = (initValue: any) => {
  const [value, setValue] = useState(initValue);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };
  return [value, onChangeInput, setValue];
};
