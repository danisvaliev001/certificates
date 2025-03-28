const certificates = [
  {
    title: "security analysis of web projects",
    img: "assets/docs/2015-11.png",
    url: "https://stepik.org/cert/14203?lang=en",
  },
  {
    title: "python programming",
    img: "assets/docs/2018-03.png",
    url: "https://stepik.org/cert/97354?lang=en",
  },
  {
    title: "linux automation with ansible",
    img: "assets/docs/2021-08.png",
    url: null,
  },
  {
    title: "containers && kubernetes",
    img: "assets/docs/2021-09.png",
    url: null,
  },
  {
    title: "right devops && kubernetes",
    img: "assets/docs/2023-12-2.png",
    url: null,
  },
  {
    title: "data structures with golang",
    img: "assets/docs/2024-10.png",
    url: "https://stepik.org/cert/2599641?lang=en",
  },
];

const container = document.getElementById("certificates-container");

certificates.forEach((cert) => {
  const html = `
    <div class="section fullheight-slide">
      <div class="title-container">
        ${
          cert.url
            ? `<a href="${cert.url}"><span class="certificate-title">${cert.title}</span></a>`
            : `<span class="certificate-title">${cert.title}</span>`
        }
      </div>
      <img src="${cert.img}" />
    </div>
  `;
  container.insertAdjacentHTML("beforeend", html);
});
