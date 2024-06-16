const laptopContainer = document.getElementById('laptops');

const laptops = [
  { name: 'Dell XPS 13', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRfXCv_2BC95JhVVler0xwkaJM6hYabd-OKUkZATUWPG8ptQ60Yu-oeXI1ga69kcpefcO8WWns9UfFe_KhQ70kV2Ka3X4I73rLNtJTuaSSF9AwemkTAetg_DA&usqp=CAE', description: 'Premium Ultrabook with stunning display' },
  { name: 'Apple MacBook Air M2', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR_thHH4B2HNwCwhyELjAMyUKVU7zkacHsd6p_QTzPcU4_adCxFcu-Z95ziMN5MWosbNb9gi5k0p1PSlriv3HqvqdoEPOBzdCHb_MMorXp4t8G9z1evyg6h&usqp=CAE', description: 'Powerful and lightweight laptop with M2 chip' },
  { name: 'HP Spectre x360', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcToynMTTqxDdB4jLvmUZPNSDEmuMayi9yRnLhgO5o4bLUFGwesctldtpEgH78f1C8m9rs7sUlQYoNCAWA_r-HPIQKlM83ZWPs47ZMRorK0suUnfaVZnhK5U&usqp=CAE', description: 'The HP Spectre x360 is a versatile 2-in-1 laptop with a 360-degree hinge, sharp 13.3-inch display, and robust performance for all your computing needs.' }, // Placeholder for additional laptops
  { name: 'Lenovo ThinkPad X1 Carbon', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRoc3wWzuzwFGHy6z6XpfsCfQ-mTBXmuqfsHflddQgbpR1uz5fsnCLv4aMGpQiPcfowwHh2QS5-FrcvSLi2_QYCXHglKNoOtMqhUzcvo13f6oe81c5h3SjH&usqp=CAE', description: 'The Lenovo ThinkPad X1 Carbon is a lightweight, durable business laptop with a 14-inch display, superior keyboard, and long battery life.' },
  { name: 'Asus ZenBook 14', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQv0-7ye5an1lZpDyDabntSi2jtOj-43n_-lge8YLMfkEgX82gdNb8tL5O4_Fjop_VD1ncaC91rcO46_FIi_CtUjnTIoRI8&usqp=CAE', description: 'The Asus ZenBook 14 is a compact, lightweight laptop with a 14-inch display, powerful performance, and excellent battery life for everyday use.' },
  { name: 'Acer Swift 5', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT0ggr3nv1VVio9Qlr3YKcNUEzhYRePW7-zJWR9tNNyQG0g5Ek2iPd1CBon9NINz6ujpJmGMNzHCdSRT1xAu71SyTr2iSHBZuTAkjBcwGxNdVg4SPJgndzGtQ&usqp=CAE', description: 'The Acer Swift 5 offers a 14-inch full HD display, ultra-light design, and powerful performance, making it perfect for productivity on the go.' },
  { name: 'MSI GS66 Stealth', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTTCIpZ-Prbr-XOhO50KhnKugt1zjRA0SKUDq5ILJNDf39Fox_ZPqgpIu9pFzcoXpUrSCs5ing_MoctmpcgF8OCOAd0yW5bj1mVRrytAcytUyYp5X1xNJPD&usqp=CAE', description: 'The MSI GS66 Stealth is a powerful gaming laptop with a 15.6-inch display, advanced cooling system, and top-notch performance for gamers and creators.' },
  { name: 'Razer Blade 15', image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQICJMKXFBhbaakkbqTDdhAIplUgwagGiop8jwruY3nXag6FHl3DgycxLCbTA2t3gXzX1hIH4dWlefR6Adh5huJQ1ZsEm8nk7GJjrHTCwSI_Tftnfn_apY0&usqp=CAE', description: 'The Razer Blade 15 is a high-performance gaming laptop with a 15.6-inch display, powerful graphics, and sleek design for the ultimate gaming experience.' },
  { name: 'Lenovo Legion 5', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSWCNpqskxhclWZxDov7N431lkgQYSmg3EVqmiWFf_tHHmxsO_DcPkRtbGkKpP6qmriaUno4N2BiRnFqebt-v4FSck9rKd9fbEvWmLMqBMAMetSpyyL_joB&usqp=CAE', description: 'The Lenovo Legion 5 is a powerful gaming laptop with AMD Ryzen processors, NVIDIA GeForce graphics, and a high-refresh-rate display, ideal for gamers.' },
  { name: 'Samsung Galaxy Book Pro', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRTr1fua3cKKKXyYJxKqA7KUZxxCEGFgsosU0MaTpvshf4TZZM4vD6XRCe_In2w_tDNz3TzJn8UAySJP_XZyhMuLTo1WvpfqhjvnLAFE8Hf2UjBd-vkwMo76g&usqp=CAE', description: 'The Samsung Galaxy Book Pro combines a Super AMOLED display with lightweight design and powerful performance, ideal for multimedia and productivity.' },
  { name: 'Dell Inspiron 15', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS2hFKtVZyI8KCZSSedJ49efikYeY2Im40YZjbYFWjWJBeVHyfw_R6PPeJCruCR0YTJEwx8DOA7U1vE_ReUm_z8dv2QJt906N1KZbaN2-v_ymb-rngd1isp&usqp=CAE', description: 'The Dell Inspiron 15 offers a 15.6-inch display, solid performance, and affordability, making it a great choice for everyday computing tasks.' },
  { name: 'Asus ROG Zephyrus G14', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSX5XMqSNtM2j5IG9idWMHqHGhC7EGJmVu_YbzKtsd7bdyGsMYIqCQsmbQwFDJcGypTsQ3BJJfCM4h0KrYFzyPlos5RYGcQH1jCK0Ra0ZuW3xJR5gs8-MfwiLs&usqp=CAE', description: 'The Asus ROG Zephyrus G14 is a compact gaming laptop with a 14-inch display, powerful graphics, and long battery life, perfect for gamers on the go.' },
];

function displayLaptops() {
  laptops.forEach(laptop => {
    const laptopItem = document.createElement('div');
    laptopItem.classList.add('laptop');

    laptopItem.innerHTML = `
          <h3>${laptop.name}</h3>
          <img src="${laptop.image}" alt="${laptop.name}">
          <div class="laptop-info">${laptop.description}</div>
          <div>
            <span>$${Math.floor(Math.random() * 1000) + 500}</span> <button class="add-to-cart">Add to Cart</button>
            <button class="see-more">See More</button>
          </div>
        `;

    laptopItem.querySelector('.see-more').addEventListener('click', () => {
      laptopItem.classList.toggle('show-info');
    });

    laptopContainer.appendChild(laptopItem);
  });
}

displayLaptops();
