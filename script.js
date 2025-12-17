const app = (function () {
    // --- Private Data ---
    const menuData = {
        wine: {
            categories: ['White', 'Red', 'Sparkling', 'Rosé', 'Orange & Pet Nat', 'Zero Alcohol', 'Flights'],
            items: {
                'White': [
                    { name: "Villa Calappiano", sub: "Pinot Grigio, Italy", desc: "Sustainable, vegan. Tropical figs, dates and pineapple. Zesty lemon.", price: "€9.00 / €36.00" },
                    { name: "Aveleda Vinho Verde", sub: "Loureiro/Alvarinho, Portugal", desc: "Sustainable, vegan. Aromatic hints of lime, white flowers and passion fruit.", price: "€9.50 / €38.00" },
                    { name: "Las Sardines Catalanes", sub: "Viognier/Grenache, France", desc: "Organic, vegan. White fruits complemented by herbal aromas. Fresh.", price: "€10.00 / €40.00" },
                    { name: "J. de Villbois", sub: "Sauvignon Blanc, Loire Valley", desc: "Sustainable. Grassy fruit aromas, smooth structure. Flinty elements.", price: "€10.50 / €42.00" },
                    { name: "Garzón Albariño Reserva", sub: "Maldonado, Uruguay", desc: "Organic, natural. Loaded with peach and stone fruits. Crisp and brilliant.", price: "€13.00 / €53.00" },
                    { name: "La Chablisienne Chablis", sub: "Chardonnay, Burgundy", desc: "Sustainable. Notes of delicious golden apples, lovely texture, mineral finish.", price: "€72.00 (Bottle)" }
                ],
                'Red': [
                    { name: "Terre di Falano", sub: "Nero di Troia, Italy", desc: "Sustainable. Dark fresh plums, cinnamon, black pepper and tobacco.", price: "€9.50 / €38.00" },
                    { name: "Duris Douro Reserva", sub: "Reserva, Portugal", desc: "Sustainable, natural. Aromas of red fruits, with floral and spicy nuances.", price: "€10.30 / €42.00" },
                    { name: "Les Sardines Rouge", sub: "Grenache/Syrah, France", desc: "Organic, natural. Ripe fruits, subtle spice, velvety texture.", price: "€10.00 / €40.00" },
                    { name: "Carpineto Chianti Classico", sub: "Sangiovese, Tuscany", desc: "Organic. Full-bodied, blackberry, dried plum and savoury spice.", price: "€58.00 (Bottle)" },
                    { name: "Mantello Super Tuscano", sub: "Sangiovese/Shiraz, Tuscany", desc: "Organic. Intense dark red. Tobacco, spice, vanilla. Strong tannins.", price: "€68.00 (Bottle)" }
                ],
                'Sparkling': [
                    { name: "Foscaro Prosecco", sub: "Glera, Italy", desc: "Sustainable. Balanced, golden delicious apples and floral hints.", price: "€9.50 / €39.00" },
                    { name: "Gosset Champagne", sub: "Extra Brut, France", desc: "Sustainable. Rich and textured. Ripe pears and green apples.", price: "€28.00 / €135.00" }
                ],
                'Rosé': [
                    { name: "AIX Provence Rosé", sub: "Provence, France", desc: "Organic. Benchmark Provence rosé. Ripe summer red fruits, citrus lift.", price: "€15.00 / €60.00" },
                    { name: "Colombelle Rosé", sub: "Gascony, France", desc: "Sustainable. Vibrant & refreshing pale pink. Strawberries.", price: "€9.50 / €38.00" }
                ],
                'Orange & Pet Nat': [
                    { name: "Celler de Capçanes", sub: "Orange Wine, Spain", desc: "Organic. Intense golden color. Peach, apricot and dried apricots.", price: "€12.50 / €50.00" },
                    { name: "Lubanzi Pét Nat", sub: "Cinsault, South Africa", desc: "Organic. Strawberry and candy on the nose with grapefruit.", price: "€13.00 / €52.00" }
                ],
                'Zero Alcohol': [
                    { name: "Zeno Tempranillo", sub: "Rioja, Spain", desc: "Sustainable. Juicy plums, crisp cherries, black forest fruits.", price: "€8.00 / €32.00" },
                    { name: "Leitz Riesling", sub: "Germany", desc: "Sustainable. Fresh green apples, touch of lemon and rhubarb.", price: "€8.00" }
                ],
                'Flights': [
                    { name: "French Wine Flight", sub: "3 Wines + Cheese", desc: "Sauvignon Blanc, Pinot Noir, Merlot. Served with Irish Cheeseboard.", price: "€29.95" },
                    { name: "Italian Wine Flight", sub: "3 Wines + Croquettes", desc: "Pinot Grigio, Chianti, Valpolicella. Served with Jamón Croquettes.", price: "€35.00" },
                    { name: "Spanish Wine Flight", sub: "3 Wines + Charcuterie", desc: "Verdejo, Crianza, Reserva. Served with Artisan Charcuterie.", price: "€29.95" }
                ]
            }
        },
        food: {
            categories: ['Pica Pica', 'Salads', 'Sandwiches', 'Mains', 'Sides', 'Dessert'],
            items: {
                'Pica Pica': [
                    { name: "Boquerones", sub: "", desc: "Yuzu olive oil marinated anchovies, roasted red peppers, olives.", price: "€9.00" },
                    { name: "Stone-Baked Sourdough", sub: "", desc: "Arbequina olive oil, confit garlic and tomato.", price: "€4.50" },
                    { name: "Almonds", sub: "", desc: "Boyne Valley honey roasted almonds, Achill Island sea salt.", price: "€4.50" }
                ],
                'Salads': [
                    { name: "Heirloom Tomato", sub: "Small / Large", desc: "Basil pearls, tomato, olive oil broth, feta cheese, rocket.", price: "€8.00 / €12.00" },
                    { name: "Burrata Cheese", sub: "Small / Large", desc: "Baby spinach, pomegranate, burrata, citrus vinaigrette.", price: "€8.50 / €12.50" },
                    { name: "Chicken Caesar", sub: "Small / Large", desc: "Crisp pancetta, cornfed chicken, baby gem, parmesan.", price: "€9.00 / €14.00" }
                ],
                'Sandwiches': [
                    { name: "Grilled Beef Sandwich", sub: "Served with chips/salad", desc: "Beef bavette, fermented potato focaccia, celeriac remoulade.", price: "€14.00" },
                    { name: "Prawn & Lobster Roll", sub: "Served with chips/salad", desc: "Dublin Bay prawns, lobster, saffron & lemon mayo.", price: "€18.50" },
                    { name: "Club Sandwich", sub: "Served with chips/salad", desc: "Sourdough, plum tomato, bacon, chicken, egg.", price: "€16.00" }
                ],
                'Mains': [
                    { name: "Grilled Chicken Burger", sub: "", desc: "Irish chicken breast, brioche bun, crispy onions, pickled slaw.", price: "€16.00" },
                    { name: "Fish & Chips", sub: "", desc: "Sustainable fish in tempura batter, malt vinegar, minted peas.", price: "€19.50" },
                    { name: "Lemon Artichoke Orzo", sub: "", desc: "Slow-cooked orzo, roasted artichokes, Sicilian lemon, parmesan.", price: "€16.00" },
                    { name: "Shakshuka", sub: "", desc: "Baked eggs, tomatoes, peppers, coriander, velvet cloud yoghurt.", price: "€14.00" }
                ],
                'Sides': [
                    { name: "Homemade Chips", sub: "", desc: "Hand cut, triple cooked.", price: "€5.00" },
                    { name: "Mixed Leaf Salad", sub: "", desc: "Seasonal dressing.", price: "€4.00" }
                ],
                'Dessert': [
                    { name: "Dessert Special", sub: "Daily Rotation", desc: "Please ask your server for our daily dessert special.", price: "€7.50" }
                ]
            }
        }
    };

    let currentMainCat = 'wine';
    let currentSubCat = 'White';

    // --- UI Rendering ---
    function renderSubNav() {
        const container = document.getElementById('sub-nav');
        const categories = menuData[currentMainCat].categories;

        container.innerHTML = categories.map(cat => `
            <button 
                onclick="app.setSubCategory('${cat}')"
                class="pb-2 text-sm font-medium whitespace-nowrap transition-colors border-b-2 
                ${currentSubCat === cat ? 'border-[#722F37] text-[#722F37]' : 'border-transparent text-gray-500 hover:text-gray-800'}"
            >
                ${cat}
            </button>
        `).join('');
    }

    function renderMenu() {
        const container = document.getElementById('menu-grid');
        const items = menuData[currentMainCat].items[currentSubCat];

        container.classList.add('opacity-50');

        setTimeout(() => {
            container.innerHTML = items.map((item, index) => `
                <div class="menu-item-anim card-hover p-6 rounded-xl border border-gray-100 hover:border-[#D4AF37]/30 bg-white group flex justify-between gap-4" style="transition-delay: ${index * 50}ms">
                    <div class="flex-1">
                        <h3 class="font-bold text-lg text-gray-900 mb-1 group-hover:text-[#722F37] transition-colors">${item.name}</h3>
                        ${item.sub ? `<span class="text-xs text-[#D4AF37] uppercase tracking-wider font-semibold mb-2 block">${item.sub}</span>` : ''}
                        <p class="text-gray-600 text-sm leading-relaxed">${item.desc}</p>
                    </div>
                    <div class="text-right">
                        <span class="block font-serif font-bold text-gray-900 whitespace-nowrap">${item.price}</span>
                    </div>
                </div>
            `).join('');

            container.classList.remove('opacity-50');

            // Trigger scroll observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                    }
                });
            });
            document.querySelectorAll('.menu-item-anim').forEach(el => {
                el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-500');
                observer.observe(el);
            });

        }, 200);
    }

    function showToast(msg) {
        const toast = document.getElementById('toast');
        const toastMsg = document.getElementById('toast-message');
        toastMsg.innerText = msg;
        toast.classList.remove('translate-y-20', 'opacity-0');
        setTimeout(() => toast.classList.add('translate-y-20', 'opacity-0'), 4000);
    }

    // --- Public API ---
    return {
        init: function () {
            lucide.createIcons();
            renderSubNav();
            renderMenu();

            // Init Scroll Observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                    }
                });
            }, { threshold: 0.1 });

            setTimeout(() => {
                document.querySelectorAll('.animate-fade-in-up').forEach(el => observer.observe(el));
            }, 100);

            // Mobile Menu Event
            document.getElementById('mobile-menu-btn').addEventListener('click', (e) => {
                const menu = document.getElementById('mobile-menu');
                const icon = e.currentTarget.querySelector('i');
                // Check if menu has the 'open' classes
                const isOpen = menu.classList.contains('max-h-screen');

                if (isOpen) {
                    menu.classList.remove('max-h-screen', 'opacity-100');
                    menu.classList.add('max-h-0', 'opacity-0');
                    icon.setAttribute('data-lucide', 'menu');
                } else {
                    menu.classList.remove('max-h-0', 'opacity-0');
                    menu.classList.add('max-h-screen', 'opacity-100');
                    icon.setAttribute('data-lucide', 'x');
                }
                lucide.createIcons();
            });
        },

        setMainCategory: function (cat) {
            currentMainCat = cat;
            const pill = document.getElementById('category-pill');
            const btnWine = document.getElementById('btn-wine');
            const btnFood = document.getElementById('btn-food');

            if (cat === 'wine') {
                pill.style.transform = 'translateX(0)';
                btnWine.classList.replace('text-gray-500', 'text-gray-900');
                btnFood.classList.replace('text-gray-900', 'text-gray-500');
                currentSubCat = 'White';
            } else {
                pill.style.transform = 'translateX(100%) translateX(8px)';
                btnFood.classList.replace('text-gray-500', 'text-gray-900');
                btnWine.classList.replace('text-gray-900', 'text-gray-500');
                currentSubCat = 'Pica Pica';
            }
            renderSubNav();
            renderMenu();
        },

        setSubCategory: function (cat) {
            currentSubCat = cat;
            renderSubNav();
            renderMenu();
        },

        openModal: function () {
            const modal = document.getElementById('booking-modal');
            modal.classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('modal-backdrop').classList.replace('opacity-0', 'opacity-100');
                document.getElementById('modal-content').classList.replace('opacity-0', 'opacity-100');
                document.getElementById('modal-content').classList.replace('scale-95', 'scale-100');
            }, 10);
        },

        closeModal: function () {
            const modal = document.getElementById('booking-modal');
            document.getElementById('modal-backdrop').classList.replace('opacity-100', 'opacity-0');
            document.getElementById('modal-content').classList.replace('opacity-100', 'opacity-0');
            document.getElementById('modal-content').classList.replace('scale-100', 'scale-95');
            setTimeout(() => modal.classList.add('hidden'), 300);
        },

        // NOTE: This currently simulates a booking request.
        // In a real application, you would send this data to a backend server (e.g. via fetch/axios).
        handleBooking: function (e) {
            e.preventDefault();

            // 1. Get form data (simulated)
            const formData = new FormData(e.target);
            // const data = Object.fromEntries(formData.entries());
            // console.log("Booking Data:", data);

            const btn = e.target.querySelector('button[type="submit"]');
            const originalText = btn.innerText;

            // 2. Show loading state
            btn.innerHTML = '<i data-lucide="loader" class="animate-spin w-5 h-5 inline"></i> PROCESSING...';
            lucide.createIcons();

            // 3. Simulate Network Request
            setTimeout(() => {
                app.closeModal();
                showToast("Your table request has been received. We'll confirm shortly.");
                btn.innerText = originalText;
                e.target.reset();
            }, 1500);
        },

        // NOTE: This simulates a newsletter subscription.
        handleLeadGen: function (e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerText;
            btn.innerHTML = 'JOINED!';

            // Visual feedback
            btn.classList.add('bg-green-600', 'text-white');
            showToast("Welcome to the Wine Club! Check your inbox.");

            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.remove('bg-green-600', 'text-white');
                e.target.reset();
            }, 3000);
        }
    };
})();

// Start App
window.addEventListener('DOMContentLoaded', app.init);
