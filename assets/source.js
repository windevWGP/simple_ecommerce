document.getElementById("year").innerHTML = new Date().getFullYear();

function buy(product_name, product_price) {
  const message = `Halo saya mau beli ${product_name} - ${product_price}`
  const whatsapp = `https://wa.me/6289602694533?text=${message}`
  open(whatsapp, "_blank")
}

function chat()  {
  const message = `Hallo Min Saya Mau Tanya nih...`
  const whatsapp = `https://wa.me/6289602694533?text=${message}`
  open(whatsapp,"_blank")
}