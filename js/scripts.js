$(function() {
    var age = parseInt(prompt("Enter your age"));

    if (age >= 18) {
      $("#old").show();
    } else if (age === 21) {
      $("#under-18").show();
    } else {
      $("#under-18").show();
    }
});
