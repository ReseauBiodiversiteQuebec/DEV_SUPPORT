$(document).ready(function () {
  const cat = localStorage.getItem("bqbqbq");
  if (cat == "true") {
    $("#quarto-document-content").css("display", "block");
  } else {
    if ($("#quarto-document-content").css("display") == "none") {
      var name = prompt("Entrer le mot de passe", "");
      if (CryptoJS.MD5(name).toString() == "b20435eac581e05d835146005d94f71a") {
        $("#quarto-document-content").css("display", "block");
        localStorage.setItem("bqbqbq", true);
      } else {
        alert(name);
      }
    }
  }
});
