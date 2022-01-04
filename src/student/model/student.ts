export class Student {
  private _id: number;
  private _surname : String;
  private _name : String;
  private _patronymic : String;
  private _birthDay : string;
  private _average : number;


  constructor(id:number, surname: String, name: String, patronymic: String, birthDay: string, average: number) {
    this._id = id;
    this._surname = surname;
    this._name = name;
    this._patronymic = patronymic;
    this._birthDay = birthDay;
    this._average = average;
  }


  get surname(): String {
    return this._surname;
  }

  set surname(value: String) {
    this._surname = value;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get patronymic(): String {
    return this._patronymic;
  }

  set patronymic(value: String) {
    this._patronymic = value;
  }

  get birthDay(): string {
    return this._birthDay;
  }

  set birthDay(value: string) {
    this._birthDay = value;
  }

  get average(): number {
    return this._average;
  }

  set average(value: number) {
    this._average = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

}
