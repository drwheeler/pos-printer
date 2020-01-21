"use strict";

class Interface {
  constructor(config) {
    if ( !config ) {
      config = {};
    }

    this.timeout = config.timeout || 500;
  }

  get name() {
    return undefined;
  }

  get isOpen() {
    throw new Error("Function not supported");
  }

  open() {
    throw new Error("Function not supported");
  }

  close() {
    throw new Error("Function not supported");
  }

  read() {
    throw new Error("Function not supported");
  }

  write(_data) {
    throw new Error("Function not supported");
  }
}

module.exports = {Interface};
