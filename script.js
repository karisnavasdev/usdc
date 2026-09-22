const CA = "0xcomingsoon";
const toast = document.getElementById("toast");
const flipBtn = document.getElementById("flipBtn");
let toastTimer;

async function copyCa() {
  try {
    await navigator.clipboard.writeText(CA);
    showToast("CA copied · 0xcomingsoon");
  } catch {
    showToast("Copy failed — CA is 0xcomingsoon");
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", copyCa);
});

flipBtn.addEventListener("click", () => {
  const flipped = document.documentElement.classList.toggle("flipped");
  flipBtn.setAttribute("aria-pressed", String(flipped));
  flipBtn.textContent = flipped ? "Right it" : "Flip it";
});
