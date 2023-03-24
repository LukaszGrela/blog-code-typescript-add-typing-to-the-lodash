import { keys } from "lodash";

// test object upon which we will call keys
type TObject = {
  fieldNum: number;
  fieldStr: string;
  fieldBln: boolean;
  fieldArr: string[];
}



export function run(): void {
  const o: TObject = {
    fieldNum: 42,
    fieldStr: 'greladesign',
    fieldBln: true,
    fieldArr: ["a", "b", "c"]
  };

  const keysOfObject = keys(o);
  console.log("_.keys(o)", keysOfObject);
  //
  keysOfObject.forEach((field): void => {
    if (field === 'fieldBln') {
      const flag = o[field];
      console.log(field, flag);
    }
  });
}