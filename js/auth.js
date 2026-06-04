if (
  location.pathname !== "/gate.html" &&
  localStorage.getItem("blog_auth") !== "ok"
) {
  location.href = "/gate.html";
}