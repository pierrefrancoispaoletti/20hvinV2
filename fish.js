const Init = {
  init: function () {
    console.log("inited");
    document.querySelector("a[href='#/produits/cote-mer']").style.display =
      "none";
  },
};

document.addEventListener("DOMContentLoaded", Init.init);
