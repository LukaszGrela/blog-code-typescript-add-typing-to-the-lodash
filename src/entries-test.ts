import { entries } from "lodash";

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
    fieldStr: 'greladsign',
    fieldBln: true,
    fieldArr: ["a", "b", "c"]
  };

  const entryPairs = entries(o);

  console.log("_.entries(o)", entryPairs);
  //
  entryPairs.forEach(([field, value]): void => {
    if (field === 'fieldBln') {
      const flag = value
      console.log(field, flag);
    }
  })

  type TTuple<O> = {
    /* map the possible tuples against object's field */
    [Field in keyof O]: [field: Field, value: O[Field]];
  }/* select the proper tuple */[keyof O];


  const [key, value]: TTuple<TObject> = ['fieldBln', true];
  console.log(key, value)
}