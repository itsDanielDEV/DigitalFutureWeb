const d = document,
  w = window;

function inputChecker($input, tag = "") {
  const $form = $input.closest("form"),
    $formFloating = $input.closest(".form-floating");

  let $invalidFeedback = d.createElement("div");
  $invalidFeedback.classList.add("invalid-feedback");

  // Si el input esta vacio
  if (!$input.value) {
    $input.classList.add("is-invalid");
    $invalidFeedback.textContent = `${tag} is required.`;

    if (!$input.closest(".form-floating").querySelector(".invalid-feedback"))
      $formFloating.appendChild($invalidFeedback);
  }

  // Si el input es de contraseña y su longitud es menor o igual a 8
  if (
    $input.id === "inputPassMobile" &&
    Number($input.value.length) > 0 &&
    Number($input.value.length) <= 8
  ) {
    $input.classList.add("is-invalid");
    $invalidFeedback.textContent = `${tag} must be at least 9 characters long.`;

    if ($input.closest(".form-floating").querySelector(".invalid-feedback"))
      $input
        .closest(".form-floating")
        .querySelector(".invalid-feedback")
        .remove();

    $formFloating.appendChild($invalidFeedback);
  } else if (
    $input.id === "inputPassMobile" &&
    Number($input.value.length) > 8
  ) {
    $input.classList.remove("is-invalid");
    $input.classList.add("is-valid");
  }
}

function emailValidator($inputEmail, regex) {
  const $formFloating = $inputEmail.closest(".form-floating");

  let $invalidFeedback = d.createElement("div");
  $invalidFeedback.classList.add("invalid-feedback");

  if (regex.test($inputEmail.value)) {
    if (
      $inputEmail.closest(".form-floating").querySelector(".invalid-feedback")
    )
      $inputEmail
        .closest(".form-floating")
        .querySelector(".invalid-feedback")
        .remove();

    $inputEmail.classList.remove("is-invalid");
    $inputEmail.classList.add("is-valid");
  } else if (
    regex.test($inputEmail.value) === false &&
    $inputEmail.value.length > 0
  ) {
    $inputEmail.classList.remove("is-valid");
    $inputEmail.classList.add("is-invalid");

    $inputEmail.classList.add("is-invalid");
    $invalidFeedback.textContent = `Please enter a valid email address.`;

    if (
      $inputEmail.closest(".form-floating").querySelector(".invalid-feedback")
    )
      $inputEmail
        .closest(".form-floating")
        .querySelector(".invalid-feedback")
        .remove();

    $formFloating.appendChild($invalidFeedback);
  }
}

function loginValidation() {
  d.addEventListener("focusout", (e) => {
    if (e.target.matches("#inputEmailMobile")) {
      inputChecker(e.target, "Email address");
    }
    if (e.target.matches("#inputPassMobile")) {
      inputChecker(e.target, "Password");
    }
  });

  d.addEventListener("focusout", (e) => {
    if (e.target.matches("#inputEmailMobile")) {
      emailValidator(
        e.target,
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      );
    }
  });

  d.body.querySelector(".btn-mobile-submit").addEventListener("click", (e) => {
    const $inputEmail = e.target
        .closest("form")
        .querySelector("#inputEmailMobile"),
      $inputPass = e.target.closest("form").querySelector("#inputPassMobile");

    if (!$inputEmail.value || !$inputPass.value) {
      inputChecker($inputEmail, "Email address");
      inputChecker($inputPass, "Password");
    }
    if (
      $inputEmail.classList.contains("is-invalid") ||
      $inputPass.classList.contains("is-invalid")
    ) {
      e.preventDefault();
    }
  });
}

loginValidation();