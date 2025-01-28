import { DomListner } from "./DomListner";

export class ExcelComponent extends DomListner {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || "";
    this.emitter = options.emitter;
    this.unsubscribers = [];
    this.prepare();
    this.store = options.store;
    this.subscribe = options.subscribe || []
  }
  prepare() {}
  toHTML() {
    return "";
  }
  init() {
    this.initDOMListeners();
  }

  $emit(event, ...args) {
    this.emitter.emit(event, ...args);
  }
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }
  $dispatch(action) {
    this.store.dispatch(action);
  }
  storeChanged() {}


  isWatching (key) { 
    return this.subscribe.includes(key)
  }
  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach((unsub) => unsub());
  }
}
