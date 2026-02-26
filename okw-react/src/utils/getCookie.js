function getCookie(name) {
  const cookie = document.cookie
    .split("; ")
    .find((c) => c.startsWith(name + "="));
    console.log(cookie)
  return cookie ? cookie.split("=")[1] : null;
}


export default getCookie;