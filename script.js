const messages=[
"💛 Você merece cuidado, respeito e acolhimento.",
"🌻 Pedir ajuda não é fraqueza. É um ato de coragem.",
"🫂 Você não precisa enfrentar tudo sozinho(a).",
"💬 Falar sobre o que sentimos pode ser um passo importante.",
"✨ Sua presença faz diferença. Cuide de você.",
"🌱 Pequenos passos também são caminhos."
];
let last=-1;
document.getElementById("messageBtn").addEventListener("click",()=>{
 let i;
 do{i=Math.floor(Math.random()*messages.length)}while(i===last);
 last=i;
 const el=document.getElementById("message");
 el.style.opacity="0";
 setTimeout(()=>{el.textContent=messages[i];el.style.opacity="1"},180);
});
document.querySelector(".menu").addEventListener("click",()=>{
 const nav=document.querySelector("nav");
 nav.classList.toggle("mobile-open");
});
