const sendForm = () => {
  //console.log("sendForm");
  const form = document.querySelector(".modal");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = form.querySelector("input[type=text]");
    const tel = form.querySelector("input[type=tel]");
    const email = form.querySelector("input[type=email]");
    const sendObj = {
      name: text.value,
      phone: tel.value,
      email: email.value,
    };

    // fetch("https://jsonplaceholder.typicode.com/todos/4")
    //   .then((response) => {
    //     if (response.status === 404) {
    //       throw new Error("not found!");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => console.log(data))
    //   .catch((error) => {
    //     console.warn(error.message);
    //   })
    //   .finally(() => {
    //     console.log("finally");
    //   });

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(sendObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status === 404) {
          throw new Error("not found!");
        }
        return response.json();
      })
      .then((json) => console.log(json))
      .catch((error) => {
        console.warn(error.message);
        alert("Отправка не случилась!");
      })
      .finally(() => {
        text.textcontent = "";
        tel.textcontent = "";
        email.textcontent = "";
        console.log("Form is clear!");
      });
  });
};
sendForm();

/**
 * jsonplaseholder https://jsonplaceholder.typicode.com/
 *
 * fetc('https://jsonplaceholder.typicode.com/todos/1')
 * 	.then(response => response.json())
 * 	.then(json =>console.log(json)
 */
