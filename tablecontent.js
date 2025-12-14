document.addEventListener("DOMContentLoaded", () => {
  const tocList = document.getElementById("tocList");
  if (!tocList) return;

  const wrappers = document.querySelectorAll(".wrapper");

  let index = 1;

  wrappers.forEach(wrapper => {
    const titleEl = wrapper.querySelector(".title-text");
    if (!titleEl) return;

    const id = `section-${index++}`;
    wrapper.id = id;

    const li = document.createElement("li");
    const a  = document.createElement("a");

    a.textContent = titleEl.textContent;
    a.href = `#${id}`;
    a.className = "toc-link";

    li.appendChild(a);
    tocList.appendChild(li);
  });

  /* =============================
     Inject CSS via JavaScript
     ============================= */
  const style = document.createElement("style");
style.textContent = `
  .toc-list {
    list-style: lower-roman;
    margin: 0;
  }

  .toc-list li {
    margin: 6px 0;
  }

  .toc-link {
    text-decoration: none;
    color: blue;
    display: block;
  }

  .toc-link:hover {
    text-decoration: underline;
  }

  html {
    scroll-behavior: smooth;
  }

  /* 🔽 PENTING: offset sticky header */
  .wrapper {
    scroll-margin-top: 90px; /* laraskan ikut tinggi header */
  }
`;
  document.head.appendChild(style);
});
