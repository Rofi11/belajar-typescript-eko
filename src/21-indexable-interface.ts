export interface StringArray {
  // mmebuat array didalalam interface
  [index: number]: string;
}

export interface StringDictionary {
  [key: string]: string;
}

const names: StringArray = ["Eko", "Kurniawan", "Khannedy"];

console.log(names[0]);
