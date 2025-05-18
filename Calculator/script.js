(function() {
  var input = document.getElementById('inputBox');
  var buttons = document.querySelectorAll('button');
  
  var expr = '';

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
      var btn = e.target.innerHTML;

      if (btn === '=') {
        try {
          expr = eval(expr) + '';
        } catch (err) {
          expr = 'Error';
        }
        input.value = expr;
      }
      else if (btn === 'AC') {
        expr = '';
        input.value = expr;
      }
      else if (btn === 'DEL') {
        expr = expr.slice(0, -1);
        input.value = expr;
      }
      else {
        expr += btn;
        input.value = expr;
      }
    });
  }
})();
