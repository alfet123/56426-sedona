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

  var mainHeader = document.querySelector(".main-header");
  var mainMenu = document.querySelector(".main-menu");
  var menuOpenBtn = document.querySelector("#menu-open-btn");

  menuOpenBtn.addEventListener("tap", function() {

  });

  if (!("FormData" in window)) {
    return;
  }

  var form = document.querySelector(".review");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var data = new FormData(form);

    request(data, function(response) {
      console.log(response);
    });
  });

  function request(data, fn) {
    var xhr = new XMLHttpRequest();
    var time = (new Date()).getTime();

    xhr.open("post", "https://echo.htmlacademy.ru/adaptive?" + time);

    xhr.addEventListener("readystatechange", function() {
      if (xhr.readyState == 4) {
        fn(xhr.responseText);
      }
    });

    xhr.send(data);
  }

  if ("FileReader" in window) {
    var area = document.querySelector(".photo__list");

    form.querySelector("#select-file").addEventListener("change", function() {
      var files = this.files;

      for (var i = 0; i < files.length; i++) {
        preview(files[i]);
      }
    });

    function preview(file) {
      if (file.type.match(/image.*/)) {
        var reader = new FileReader();

        reader.addEventListener("load", function(event) {
          var img = document.createElement("img");

          img.src = event.target.result;
          img.alt = file.name;

          area.appendChild(img);
        });

        reader.readAsDataURL(file);
      }
    }

  }

})();
