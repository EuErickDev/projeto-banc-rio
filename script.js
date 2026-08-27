const formulario = document.getElementById("formLogin");

formulario.addEventListener("submit", function(event) {

    event.preventDefault(); // impede envio automático

    let nome = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("password").value.trim();

    // ===== VALIDAÇÃO DE CAMPOS VAZIOS (PRIMEIRA VERIFICAÇÃO) =====
    if (nome === "" || email === "" || senha === "") {
        alert("⚠️ Todos os campos precisam ser preenchidos!");
        return;
    }

    // Validação do nome
    if (nome.split(" ").length < 2) {
        alert("⚠️ Digite seu nome completo.");
        return;
    }

    // Validação do email
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        alert("⚠️ Digite um e-mail válido.");
        return;
    }

    // ===== VALIDAÇÃO DE SENHA FORTE =====
    // Requisitos: 8+ caracteres, 1 maiúscula, 1 minúscula, 1 número, 1 caractere especial
    let senhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!senhaForte.test(senha)) {
        alert("⚠️ A senha deve conter:\n" +
              "• Mínimo de 8 caracteres\n" +
              "• Pelo menos uma letra maiúscula (A-Z)\n" +
              "• Pelo menos uma letra minúscula (a-z)\n" +
              "• Pelo menos um número (0-9)\n" +
              "• Pelo menos um caractere especial (@$!%*?&)");
        return;
    }


    // Caso todas as validações passem
    // Armazenar dados do usuário
    const userData = {
      nome: nome,
      email: email
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    alert("✅ Login realizado com sucesso!");
    sessionStorage.setItem("logado", "true");
    window.location.href = "painel.html";

});
