let usuarios = [
    { nome: "Rodrigo", email: "rodrigo@gmail.com" },
    { nome: "Diego", email: "diego@gmail.com" },
    { nome: "Pedro", email: "pedro@hotmail.com" },
  ];

  function chamar(user) {
    let tela = "";
    for (let i = 0; i < user.length; i++) {
      tela += `Nome: ${user[i].nome} | Email: ${user[i].email}` + ' ';
    }
    console.log(tela);
  }
  
chamar(usuarios);