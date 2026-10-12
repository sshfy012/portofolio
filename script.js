/*
  EDIT DATA PORTOFOLIO DI BAGIAN INI.
  Ganti teks di dalam tanda kutip. Untuk tautan CV, taruh file PDF bernama cv.pdf
  di folder yang sama dengan index.html, atau ubah cvUrl ke URL CV online.
  Sertifikat: ganti title, issuer, date, url. Gunakan URL publik untuk url.
*/
const portfolio = {
  name: "Muhammad Jihan Ash Shoify",
  role: "Teknologi & Jaringan",
  location: "Lamongan, Jawa Timur",
  locationFull: "Lamongan, Jawa Timur",
  email: "muhammadjihan568@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-jihan-ash-shoify-0a4283441?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  cvUrl: "cv.pdf",
  intro: "Mahasiswa Teknologi Pendidikan Informasi dengan latar belakang Teknik Komputer dan Jaringan (TKJ), tertarik pada jaringan komputer, teknologi digital, dan pengembangan teknologi untuk pendidikan.",
  about: "Saya adalah mahasiswa Program Studi Teknologi Pendidikan Informasi yang memiliki latar belakang pendidikan Teknik Komputer dan Jaringan (TKJ). Saya memiliki minat di bidang teknologi informasi, jaringan komputer, dan teknologi digital. Saya senang mempelajari hal baru, mengembangkan keterampilan teknis, serta bekerja sama untuk menyelesaikan masalah.",
  focus: "IT Support · Networking · Digital Learning",
  education: "S1 Pendidikan Teknologi Informasi",
  skills: [
    {icon:"⌘", title:"Jaringan Komputer", desc:"Dasar LAN, WAN, IP address, dan troubleshooting."},
    {icon:"⌁", title:"MikroTik & WinBox", desc:"Latihan konfigurasi router, DHCP, DNS, dan NAT."},
    {icon:"▤", title:"Database MySQL", desc:"Membuat tabel, relasi, dan query SQL dasar."},
    {icon:"⌁", title:"Fiber Optik", desc:"Pengetahuan dasar instalasi dan pemeliharaan jaringan."},
    {icon:"▣", title:"Komputer & Software", desc:"Instalasi perangkat lunak dan troubleshooting dasar."},
    {icon:"✧", title:"Dokumentasi", desc:"Microsoft Word, PowerPoint, dan dokumentasi teknis."}
  ],
  projects: [
    {title:"Konfigurasi Jaringan MikroTik", desc:"Latihan konfigurasi IP address, DHCP, DNS, NAT, dan akses internet untuk jaringan lokal.", tags:["MikroTik","Networking"], url:""},
    {title:"Perancangan Database MySQL", desc:"Membuat database dan tabel, memahami primary key, foreign key, serta relasi antartabel.", tags:["MySQL","Database"], url:""},
    {title:"Instalasi Jaringan Fiber Optik", desc:"Dokumentasi pembelajaran terkait pemasangan, pemeliharaan, dan troubleshooting jaringan internet.", tags:["Fiber Optik","PKL"], url:""},
    {title:"Proyek Teknologi Pendidikan", desc:"Tambahkan deskripsi proyek perkuliahan atau proyek digital yang pernah kamu kerjakan.", tags:["Education","Technology"], url:""}
  ],
  
certificates: [
  {title:"ACP#1 Hardware Fundamental", issuer:"Axioo Class Program", date:"", preview:"./acp1.png", url:"./acp1.pdf"},
  {title:"ACP#2 Computer Maintenance Basic Level", issuer:"Axioo Class Program", date:"", preview:"./acp2.png", url:"./acp2.pdf"},
  {title:"AI For Youth Program - no code workshop", issuer:"Axioo Class Program", date:"", preview:"./aiforyouth.png", url:"./aiforyouth.pdf"},
  {title:"LS - Copper Structured Cabling Installation Fundamental", issuer:"LS Cable & System", date:"", preview:"./lscopper.png", url:"./lscopper.pdf"},
  {title:"LS - Fiber Optic Installation Fundamental", issuer:"LS Cable & System", date:"", preview:"./lsfiberoptic.png", url:"./lsfiberoptic.pdf"},
  {title:"LS - Structured Cabling & System Fundamental", issuer:"LS Cable & System", date:"", preview:"./lsstructured.png", url:"./lsstructured.pdf"},
  {title:"TelView - CCTV Surveillance System Installation", issuer:"TelView Security Academy", date:"", preview:"./telviewcctv.png", url:"./telviewcctv.pdf"},
  {title:"TelView - Security Product Knowledge", issuer:"TelView Security Academy", date:"", preview:"./telviewsecurity.png", url:"./telviewsecurity.pdf"}
]
};

const $ = (id) => document.getElementById(id);
function setText(id, value){ $(id).textContent = value; }
function setLink(id, url){ $(id).href = url; }
function safeUrl(url){ return /^https?:\/\//i.test(url); }

document.title = `Portofolio | ${portfolio.name}`;
setText("brandName", portfolio.name.toUpperCase());
setText("heroName", portfolio.name);
setText("footerName", portfolio.name);
setText("heroIntro", portfolio.intro);
setText("aboutText", portfolio.about);
setText("focusText", portfolio.focus);
setText("educationText", portfolio.education);
setText("locationText", portfolio.location);
setText("locationFact", portfolio.locationFull);
setText("year", new Date().getFullYear());
setLink("linkedinLink", portfolio.linkedin);
setLink("contactLinkedin", portfolio.linkedin);
setLink("emailLink", `mailto:${portfolio.email}`);
setLink("contactEmail", `mailto:${portfolio.email}`);
setLink("cvButton", portfolio.cvUrl);

$("skillGrid").innerHTML = portfolio.skills.map(s => `
  <article class="skill-card"><div class="skill-symbol">${s.icon}</div><h3>${s.title}</h3><p>${s.desc}</p></article>
`).join("");

const projectGrid = $("projectGrid");
if (projectGrid) {
  projectGrid.innerHTML = portfolio.projects.map((p,i) => `
    <article class="project-card">
      <div class="project-number">PROJECT / ${String(i+1).padStart(2,"0")}</div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      ${p.url && safeUrl(p.url) ? `<a class="project-link" href="${p.url}" target="_blank" rel="noopener">Lihat proyek ↗</a>` : ""}
    </article>
  `).join("");
}

$("certGrid").innerHTML = portfolio.certificates.slice(0,8).map((c,i) => `
  <article class="cert-card">
    ${c.preview ? `
      <a href="${c.url || c.preview}" target="_blank" rel="noopener">
        <img
          src="${c.preview}"
          alt="Preview ${c.title}"
          style="width:100%;height:150px;object-fit:contain;border-radius:10px;background:#fff;"
        >
      </a>
    ` : `<div class="cert-placeholder">✧</div>`}

    <div class="issuer">${c.issuer}</div>
    <h3>${c.title}</h3>
    <div class="cert-date">${c.date}</div>

    ${c.url
      ? `<a class="cert-link" href="${c.url}" target="_blank" rel="noopener">Lihat sertifikat PDF ↗</a>`
      : `<span class="cert-link" style="color:#778195">Tautan belum ditambahkan</span>`}
  </article>
`).join("");
$("menuToggle").addEventListener("click", () => $("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", () => $("nav").classList.remove("open")));
