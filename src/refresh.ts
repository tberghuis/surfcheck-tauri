document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "r") {
    // alert('Undo!');
    console.log("refresh");
    window.location.reload();
  }
});

export {};
