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

  // Si el input es de contraseña y su longitud es mayor a 0 y  menor o igual a 8
  if (
    ($input.id === "inputPass" || $input.id === "verifyInputPass") &&
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
    ($input.id === "inputPass" || $input.id === "verifyInputPass") &&
    Number($input.value.length) > 8
  ) {
    $input.classList.remove("is-invalid");
    $input.classList.add("is-valid");
  }
}

function emailValidator($inputEmail, tag, regex) {
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
    $invalidFeedback.textContent = `Please enter a valid ${tag}.`;

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
  let signup = false;
  if (d.querySelector("#verifyInputPass")) {
    signup = true;
  }

  d.addEventListener("focusout", (e) => {
    if (e.target.matches("#inputEmail")) {
      inputChecker(e.target, "Email address");
      emailValidator(
        e.target,
        "email address",
        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      );
    }
    if (e.target.matches("#inputPass")) {
      inputChecker(e.target, "Password");
    }
    if (e.target.matches("#verifyInputPass")) {
      inputChecker(e.target, "Verify Password");
    }
    if (e.target.matches("#firstName")) {
      inputChecker(e.target, "First Name");
      emailValidator(
        e.target,
        "first name",
        new RegExp("^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ][a-zA-ZáéíóúÁÉÍÓÚñÑüÜs]*$")
      );
    }
    if (e.target.matches("#lastName")) {
      inputChecker(e.target, "Last Name");
      emailValidator(
        e.target,
        "last name",
        new RegExp("^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ][a-zA-ZáéíóúÁÉÍÓÚñÑüÜs]*$")
      );
    }
    if (e.target.matches("#inputAddress")) {
      inputChecker(e.target, "Address");
      emailValidator(e.target, "last name", new RegExp("^.+$"));
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.matches("#btn-submit")) {
      let $btnSubmit = e.target;

      const $inputEmail = $btnSubmit
          .closest("form")
          .querySelector("#inputEmail"),
        $inputPass = $btnSubmit.closest("form").querySelector("#inputPass"),
        $verifyInputPass = $btnSubmit
          .closest("form")
          .querySelector("#verifyInputPass");

      if (signup && $verifyInputPass !== null) {
        const $firstName = $btnSubmit
            .closest("form")
            .querySelector("#firstName"),
          $lastName = $btnSubmit.closest("form").querySelector("#lastName"),
          $inputAddress = $btnSubmit
            .closest("form")
            .querySelector("#inputAddress");

        inputChecker($verifyInputPass, "Verify Password");
        inputChecker($firstName, "First Name");
        inputChecker($lastName, "Last Name");
        inputChecker($inputAddress, "Address");

        if (
          $inputEmail.classList.contains("is-invalid") ||
          $inputPass.classList.contains("is-invalid") ||
          $verifyInputPass.classList.contains("is-invalid") ||
          $firstName.classList.contains("is-invalid") ||
          $lastName.classList.contains("is-invalid") ||
          $inputAddress.classList.contains("is-invalid")
        ) {
          e.preventDefault();
        }
      }

      if (!$inputEmail.value || !$inputPass.value) {
        inputChecker($inputEmail, "Email address");
        inputChecker($inputPass, "Password");
        e.preventDefault();
      } else if (
        $inputEmail.classList.contains("is-invalid") ||
        $inputPass.classList.contains("is-invalid")
      ) {
        e.preventDefault();
      }
    }
  });
}

loginValidation();
