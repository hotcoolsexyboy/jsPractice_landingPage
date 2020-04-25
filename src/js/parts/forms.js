function forms() {
  let message = {
    loading: "Загрузка",
    success: "Спасибо! Мы с вами свяжемся!",
    failure: "Ошибка..."
  };

  function postData(selectorName) {
    let form = document.querySelector(selectorName),
      input = form.getElementsByTagName("input"),
      statusMessage = document.createElement("div");

    statusMessage.classList.add("status");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      form.appendChild(statusMessage);

      let promise = new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        request.open("POST", "server.php");
        request.setRequestHeader(
          "Content-type",
          "application/json; charset=utf-8"
        );

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function (value, key) {
          obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener("readystatechange", function () {
          if (request.readyState < 4) {
            resolve();
          } else if (request.readyState === 4 && request.status == 200) {
            resolve();
          } else {
            reject();
          }
        });
      });

      promise
        .then(() => (statusMessage.innerHTML = message.loading))
        .then(() => (statusMessage.innerHTML = message.success))
        .catch(() => (statusMessage.innerHTML = message.failure));

      for (let i = 0; i < input.length; i++) {
        input[i].value = "";
      }
    });
  }

  postData('.main-form');
  postData('#form');
}

module.exports = forms;