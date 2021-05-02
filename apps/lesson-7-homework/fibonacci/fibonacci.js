// Reference: https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame

function *fib(n) {
  if (n == 0) {
    return 0;
  }
  else if (n < 3) {
    return 1;
  }
  else {
    let prev = 1, curr = 1;
    for (let i = 3; i <= n; ++i) {
        let temp = curr;
        curr += prev;
        prev = temp;
        yield;
    }
    return curr;
  }
}

function cal() {
  let input = document.querySelector(".input").value;
  document.querySelector(".ret").innerHTML = "calculating now ...";
  let gen = fib(input);
  window.requestAnimationFrame(function step() {
    let val = gen.next();
    if (val.done) {
        document.querySelector(".ret").innerHTML = val.value;
    } else {
        window.requestAnimationFrame(step);
    }
  })
}