import { observable, decorate, action } from "mobx";

class TranslateStore {
  t = () => "";

  setT(t) {
    this.t = t;
  }
}

decorate(TranslateStore, {
  t: observable,
  setT: action
});

export default new TranslateStore();
