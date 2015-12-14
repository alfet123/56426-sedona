(function() {

  var form = document.querySelector(".review");
  var dateDuration = form.querySelector("#date-duration");
  var memberAmount = form.querySelector("#member-amount");

  dateDuration.value = 14;
  memberAmount.value = 2;

  form.querySelector("#date-minus").addEventListener("click", function() {
    if (dateDuration.value > 0) {
      dateDuration.value--;
    }
  });

  form.querySelector("#date-plus").addEventListener("click", function() {
    dateDuration.value++;
  });

  form.querySelector("#member-minus").addEventListener("click", function() {
    if (memberAmount.value > 0) {
      memberAmount.value--;
    }
  });

  form.querySelector("#member-plus").addEventListener("click", function() {
    memberAmount.value++;
  });

  dateDuration.addEventListener("change", function() {
    dateDuration.value = parseInt(dateDuration.value, 10);
    if (isNaN(dateDuration.value) || dateDuration.value < 0) {
      dateDuration.value = 0;
    };
  });

  memberAmount.addEventListener("change", function() {
    memberAmount.value = parseInt(memberAmount.value, 10);
    if (isNaN(memberAmount.value) || memberAmount.value < 0) {
      memberAmount.value = 0;
    };
  });

})();
