// require('trace');
// require('clarify');

function f(ms) {
  setTimeout(() => {
    throw new Error("BAH!");
  }, ms);
}

function g() {
  f(100);
}

g();
