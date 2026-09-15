/* ============================================
   DATABASE - PRODUTOS DO CARDÁPIO
   ============================================ */

const products = [
    /* ========== ENTRADAS (30 produtos) ========== */
    {
        id: 1,
        name: "Camarão ao Alho",
        description: "Camarões frescos refogados com alho, azeite e temperos especiais",
        price: 48.90,
        category: "entradas",
        emoji: "🍤",
        rating: 4.8
    },
    {
        id: 2,
        name: "Polvo à Portuguesa",
        description: "Polvo macio cozido com batata, cebola e azeite",
        price: 52.50,
        category: "entradas",
        emoji: "🦑",
        rating: 4.7
    },
    {
        id: 3,
        name: "Tábua de Queijos e Embutidos",
        description: "Seleção premium de queijos portugueses e embutidos variados",
        price: 68.00,
        category: "entradas",
        emoji: "🧀",
        rating: 4.9
    },
    {
        id: 4,
        name: "Espetada de Atum",
        description: "Dados de atum fresco em espeto com molho especial",
        price: 45.00,
        category: "entradas",
        emoji: "🍣",
        rating: 4.6
    },
    {
        id: 5,
        name: "Croquetes de Camarão",
        description: "Croquetes crocantes recheadas de camarão fresco",
        price: 32.00,
        category: "entradas",
        emoji: "🍟",
        rating: 4.5
    },
    {
        id: 6,
        name: "Patéu de Fígado",
        description: "Patéu caseiro com pão tostado e geleia de mirtilo",
        price: 28.50,
        category: "entradas",
        emoji: "🥖",
        rating: 4.4
    },
    {
        id: 7,
        name: "Sardinas Grelhadas",
        description: "Sardinas frescas grelhadas com limão e azeite",
        price: 38.00,
        category: "entradas",
        emoji: "🐟",
        rating: 4.7
    },
    {
        id: 8,
        name: "Cogumelos Recheados",
        description: "Cogumelos grandes recheados com queijo e ervas",
        price: 35.90,
        category: "entradas",
        emoji: "🍄",
        rating: 4.5
    },
    {
        id: 9,
        name: "Vieiras ao Vinho Branco",
        description: "Vieiras nobres cozidas em vinho branco refinado",
        price: 65.00,
        category: "entradas",
        emoji: "🦪",
        rating: 4.9
    },
    {
        id: 10,
        name: "Bruschettas Variadas",
        description: "Trio de bruschettas: tomate, queijo e tapenade",
        price: 24.50,
        category: "entradas",
        emoji: "🍞",
        rating: 4.3
    },
    {
        id: 11,
        name: "Camarão na Moranga",
        description: "Camarão refogado servido em abóbora grelhada",
        price: 55.00,
        category: "entradas",
        emoji: "🦐",
        rating: 4.8
    },
    {
        id: 12,
        name: "Mexilhões à Açorda",
        description: "Mexilhões frescos em caldo aromático com pão",
        price: 42.00,
        category: "entradas",
        emoji: "🐚",
        rating: 4.6
    },
    {
        id: 13,
        name: "Foie Gras com Torrada",
        description: "Foie gras 100% natural com torrada de brioche",
        price: 78.00,
        category: "entradas",
        emoji: "🍗",
        rating: 5.0
    },
    {
        id: 14,
        name: "Salada de Gambas",
        description: "Gambas grelhadas sobre cama de folhas verdes frescas",
        price: 50.00,
        category: "entradas",
        emoji: "🥗",
        rating: 4.7
    },
    {
        id: 15,
        name: "Ostras Frescas",
        description: "Ostras do dia com molho de mirtilos e champagne",
        price: 72.00,
        category: "entradas",
        emoji: "🦪",
        rating: 4.9
    },
    {
        id: 16,
        name: "Ceviche de Peixe",
        description: "Peixe fresco marinado em limão com tomate e cebola",
        price: 46.50,
        category: "entradas",
        emoji: "🐠",
        rating: 4.6
    },
    {
        id: 17,
        name: "Queijo Bafado",
        description: "Queijo da Serra fumegante com marmelada",
        price: 38.50,
        category: "entradas",
        emoji: "🧈",
        rating: 4.5
    },
    {
        id: 18,
        name: "Bacalhoada de Entrada",
        description: "Bacalhau desfiado com batata-doce e azeite",
        price: 40.00,
        category: "entradas",
        emoji: "🐟",
        rating: 4.6
    },
    {
        id: 19,
        name: "Tábua de Enchidos",
        description: "Presunto, chouriço e alheira fatiados com pão",
        price: 55.00,
        category: "entradas",
        emoji: "🥓",
        rating: 4.7
    },
    {
        id: 20,
        name: "Alheira Frita",
        description: "Alheira tradicional frita acompanhada de ovo",
        price: 32.00,
        category: "entradas",
        emoji: "🍗",
        rating: 4.4
    },
    {
        id: 21,
        name: "Pâté de Pato",
        description: "Pâté caseiro de pato com conhaque e torradas",
        price: 45.00,
        category: "entradas",
        emoji: "🦆",
        rating: 4.8
    },
    {
        id: 22,
        name: "Camarão Infusionado",
        description: "Camarão ao som do azeite de trufas pretas",
        price: 60.00,
        category: "entradas",
        emoji: "🍤",
        rating: 4.9
    },
    {
        id: 23,
        name: "Cogumelos em Azeite",
        description: "Cogumelos variados marinados em azeite aromatizado",
        price: 28.00,
        category: "entradas",
        emoji: "🍄",
        rating: 4.3
    },
    {
        id: 24,
        name: "Anchova Marinada",
        description: "Anchova fresca marinada com cebola roxa e limão",
        price: 35.00,
        category: "entradas",
        emoji: "🐟",
        rating: 4.5
    },
    {
        id: 25,
        name: "Bolinha de Queijo",
        description: "Bolinhas de queijo parmesão fritas e quentinhas",
        price: 26.00,
        category: "entradas",
        emoji: "⚪",
        rating: 4.2
    },
    {
        id: 26,
        name: "Lula Recheada",
        description: "Lula fresca recheada com camarão e ervas",
        price: 58.00,
        category: "entradas",
        emoji: "🦑",
        rating: 4.8
    },
    {
        id: 27,
        name: "Piquin de Pato",
        description: "Pato confitado em azeite com especiarias",
        price: 52.00,
        category: "entradas",
        emoji: "🦆",
        rating: 4.7
    },
    {
        id: 28,
        name: "Ovos de Codorniz",
        description: "Ovos de codorniz cozidos com sal de trufa",
        price: 30.00,
        category: "entradas",
        emoji: "🥚",
        rating: 4.4
    },
    {
        id: 29,
        name: "Melão com Presunto",
        description: "Melão fresco com presunto ibérico derretido",
        price: 44.00,
        category: "entradas",
        emoji: "🍈",
        rating: 4.6
    },
    {
        id: 30,
        name: "Tapenade Negra",
        description: "Pasta de azeitona preta com azeite e pão",
        price: 22.00,
        category: "entradas",
        emoji: "⚫",
        rating: 4.1
    },

    /* ========== PRATOS PRINCIPAIS (30 produtos) ========== */
    {
        id: 31,
        name: "Bacalhau à Brás",
        description: "Bacalhau desfiado com batata palha e cebola crocante",
        price: 62.00,
        category: "prato-principal",
        emoji: "🍽️",
        rating: 4.9
    },
    {
        id: 32,
        name: "Francesinha do Porto",
        description: "Sanduíche de carnes variadas com molho de cerveja",
        price: 58.00,
        category: "prato-principal",
        emoji: "🥪",
        rating: 4.8
    },
    {
        id: 33,
        name: "Caldo à Portuguesa",
        description: "Caldo rico com diversos tipos de carne e vegetais",
        price: 48.00,
        category: "prato-principal",
        emoji: "🍲",
        rating: 4.6
    },
    {
        id: 34,
        name: "Arroz de Marisco",
        description: "Arroz cremoso com camarão, mexilhão e lula",
        price: 75.00,
        category: "prato-principal",
        emoji: "🍚",
        rating: 4.9
    },
    {
        id: 35,
        name: "Pargo Grelhado",
        description: "Pargo inteiro grelhado com limão e ervas",
        price: 68.00,
        category: "prato-principal",
        emoji: "🐟",
        rating: 4.7
    },
    {
        id: 36,
        name: "Bifana Portuguesa",
        description: "Sanduíche de leitão marinado com pimenta",
        price: 32.00,
        category: "prato-principal",
        emoji: "🥪",
        rating: 4.5
    },
    {
        id: 37,
        name: "Pastéis de Nata (Prato)",
        description: "Trio de pastéis de nata tradicionais de Belém",
        price: 28.00,
        category: "prato-principal",
        emoji: "🥐",
        rating: 4.8
    },
    {
        id: 38,
        name: "Carne de Porco à Alentejana",
        description: "Carne de porco com ameijoas à alentejana",
        price: 64.00,
        category: "prato-principal",
        emoji: "🥩",
        rating: 4.9
    },
    {
        id: 39,
        name: "Polvo à Lagareiro",
        description: "Polvo grelhado com batata cozida e azeite",
        price: 72.00,
        category: "prato-principal",
        emoji: "🦑",
        rating: 4.8
    },
    {
        id: 40,
        name: "Sardinha Assada",
        description: "Sardinha fresca assada com batata-doce",
        price: 42.00,
        category: "prato-principal",
        emoji: "🐟",
        rating: 4.6
    },
    {
        id: 41,
        name: "Migas à Alentejana",
        description: "Migas tradicionais com carne e broa",
        price: 50.00,
        category: "prato-principal",
        emoji: "🍞",
        rating: 4.5
    },
    {
        id: 42,
        name: "Arroz de Pato",
        description: "Arroz cremoso com pato confitado",
        price: 70.00,
        category: "prato-principal",
        emoji: "🍚",
        rating: 4.8
    },
    {
        id: 43,
        name: "Filet Mignon Grelhado",
        description: "Filet mignon suculento com molho pimenta",
        price: 85.00,
        category: "prato-principal",
        emoji: "🥩",
        rating: 4.9
    },
    {
        id: 44,
        name: "Secreto Ibérico",
        description: "Secreto de porco ibérico com mel de trufa",
        price: 78.00,
        category: "prato-principal",
        emoji: "🥓",
        rating: 4.9
    },
    {
        id: 45,
        name: "Tamboril à Moda do Chef",
        description: "Tamboril fresco com molho de vinho branco",
        price: 76.00,
        category: "prato-principal",
        emoji: "🐙",
        rating: 4.8
    },
    {
        id: 46,
        name: "Espaguete de Marisco",
        description: "Massa fresca com camarão, lula e mexilhão",
        price: 68.00,
        category: "prato-principal",
        emoji: "🍝",
        rating: 4.7
    },
    {
        id: 47,
        name: "Beringela à Transmontana",
        description: "Beringela recheada com carne e queijo fundido",
        price: 52.00,
        category: "prato-principal",
        emoji: "🍆",
        rating: 4.6
    },
    {
        id: 48,
        name: "Cataplana de Marisco",
        description: "Mariscos variados cozidos em cataplana",
        price: 82.00,
        category: "prato-principal",
        emoji: "🦪",
        rating: 4.9
    },
    {
        id: 49,
        name: "Rolo de Carne",
        description: "Rolo de carne recheado com fiambre e queijo",
        price: 60.00,
        category: "prato-principal",
        emoji: "🥩",
        rating: 4.7
    },
    {
        id: 50,
        name: "Dourada ao Sal",
        description: "Dourada inteira cozida em crosta de sal",
        price: 74.00,
        category: "prato-principal",
        emoji: "🐟",
        rating: 4.8
    },
    {
        id: 51,
        name: "Alheira à Braz",
        description: "Alheira frita com batata palha e ovo",
        price: 44.00,
        category: "prato-principal",
        emoji: "🍗",
        rating: 4.5
    },
    {
        id: 52,
        name: "Moqueca de Peixe",
        description: "Peixe cozido em caldo de coco e leite",
        price: 64.00,
        category: "prato-principal",
        emoji: "🍲",
        rating: 4.7
    },
    {
        id: 53,
        name: "Coelho à Caçadora",
        description: "Coelho cozido com vinho tinto e vegetais",
        price: 70.00,
        category: "prato-principal",
        emoji: "🐇",
        rating: 4.8
    },
    {
        id: 54,
        name: "Truta ao Forno",
        description: "Truta fresca assada com manteiga e ervas",
        price: 62.00,
        category: "prato-principal",
        emoji: "🐟",
        rating: 4.6
    },
    {
        id: 55,
        name: "Cabrito à Serrana",
        description: "Cabrito tenro cozido na panela de barro",
        price: 88.00,
        category: "prato-principal",
        emoji: "🐐",
        rating: 4.9
    },
    {
        id: 56,
        name: "Risoto de Trufa",
        description: "Risoto cremoso com aroma intenso de trufa preta",
        price: 72.00,
        category: "prato-principal",
        emoji: "🍚",
        rating: 4.8
    },
    {
        id: 57,
        name: "Caldo Verde",
        description: "Sopa de repolho e batata com chouriço",
        price: 28.00,
        category: "prato-principal",
        emoji: "🥬",
        rating: 4.4
    },
    {
        id: 58,
        name: "Choco Frito",
        description: "Choco fresco frito e crocante com sal",
        price: 48.00,
        category: "prato-principal",
        emoji: "🦑",
        rating: 4.6
    },
    {
        id: 59,
        name: "Costela de Boi",
        description: "Costela suculenta grelhada com especiarias",
        price: 92.00,
        category: "prato-principal",
        emoji: "🥩",
        rating: 4.9
    },
    {
        id: 60,
        name: "Bacalhoada Completa",
        description: "Bacalhoada tradicional com grão e batata",
        price: 66.00,
        category: "prato-principal",
        emoji: "🍲",
        rating: 4.8
    },

    /* ========== SOBREMESAS (30 produtos) ========== */
    {
        id: 61,
        name: "Pastel de Nata",
        description: "Pastel tradicional de Belém com canela e açúcar",
        price: 12.00,
        category: "sobremesas",
        emoji: "🥐",
        rating: 4.9
    },
    {
        id: 62,
        name: "Tiramisu Italiano",
        description: "Camadas de mascarpone, café e biscoito saboiardi",
        price: 18.00,
        category: "sobremesas",
        emoji: "🍰",
        rating: 4.8
    },
    {
        id: 63,
        name: "Pudim de Leite",
        description: "Pudim de leite condensado com calda caramelizada",
        price: 14.00,
        category: "sobremesas",
        emoji: "🍮",
        rating: 4.7
    },
    {
        id: 64,
        name: "Chocolate Quente Belga",
        description: "Chocolate quente premium com chantilly",
        price: 16.00,
        category: "sobremesas",
        emoji: "🍫",
        rating: 4.8
    },
    {
        id: 65,
        name: "Fruta da Estação",
        description: "Seleção de frutas frescas da época",
        price: 15.00,
        category: "sobremesas",
        emoji: "🍓",
        rating: 4.5
    },
    {
        id: 66,
        name: "Bolo de Chocolate",
        description: "Bolo úmido de chocolate belga com ganache",
        price: 20.00,
        category: "sobremesas",
        emoji: "🍰",
        rating: 4.9
    },
    {
        id: 67,
        name: "Pavê",
        description: "Pavê de biscoito com calda de frutas vermelhas",
        price: 17.00,
        category: "sobremesas",
        emoji: "🍰",
        rating: 4.7
    },
    {
        id: 68,
        name: "Mousse de Morango",
        description: "Mousse aerado de morango fresco",
        price: 16.00,
        category: "sobremesas",
        emoji: "🍓",
        rating: 4.6
    },
    {
        id: 69,
        name: "Sorvete Premium",
        description: "Trio de sabores: chocolate, baunilha e morango",
        price: 19.00,
        category: "sobremesas",
        emoji: "🍦",
        rating: 4.8
    },
    {
        id: 70,
        name: "Coulant de Chocolate",
        description: "Bolo de chocolate com núcleo mole de ganache",
        price: 22.00,
        category: "sobremesas",
        emoji: "🍫",
        rating: 4.9
    },
    {
        id: 71,
        name: "Panna Cotta",
        description: "Panna cotta cremosa com calda de framboesa",
        price: 18.00,
        category: "sobremesas",
        emoji: "🍮",
        rating: 4.7
    },
    {
        id: 72,
        name: "Biscoito de Polvilho",
        description: "Biscoito crocante de polvilho caseiro",
        price: 11.00,
        category: "sobremesas",
        emoji: "🍪",
        rating: 4.4
    },
    {
        id: 73,
        name: "Crème Brûlée",
        description: "Crema queimada com aroma de baunilha",
        price: 20.00,
        category: "sobremesas",
        emoji: "🍮",
        rating: 4.9
    },
    {
        id: 74,
        name: "Torta de Chocolate",
        description: "Torta cremosa com camadas de chocolate e café",
        price: 24.00,
        category: "sobremesas",
        emoji: "🍰",
        rating: 4.8
    },
    {
        id: 75,
        name: "Frutas ao Calda",
        description: "Frutas variadas em calda de vinho tinto",
        price: 16.00,
        category: "sobremesas",
        emoji: "🍇",
        rating: 4.6
    },
    {
        id: 76,
        name: "Cheesecake Clássico",
        description: "Cheesecake cremoso com base de biscoito",
        price: 21.00,
        category: "sobremesas",
        emoji: "🍰",
        rating: 4.8
    },
    {
        id: 77,
        name: "Brigadeiro Artesanal",
        description: "Brigadeiro caseiro com chocolate 60% cacau",
        price: 13.00,
        category: "sobremesas",
        emoji: "🍫",
        rating: 4.5
    },
    {
        id: 78,
        name: "Tarte Tatin",
        description: "Tarte de maçã caramelizada com calda pegajosa",
        price: 19.00,
        category: "sobremesas",
        emoji: "🍎",
        rating: 4.7
    },
    {
        id: 79,
        name: "Suspiro de Limão",
        description: "Doce de suspiro com calda de limão siciliano",
        price: 15.00,
        category: "sobremesas",
        emoji: "🍋",
        rating: 4.6
    },
    {
        id: 80,
        name: "Bolo de Mel",
        description: "Bolo tradicional português com mel e especiarias",
        price: 14.00,
        category: "sobremesas",
        emoji: "🍯",
        rating: 4.5
    },
    {
        id: 81,
        name: "Amêndoa Doce",
        description: "Doce tradicional de amêndoa com açúcar",
        price: 12.00,
        category: "sobremesas",
        emoji: "🌰",
        rating: 4.4
    },
    {
        id: 82,
        name: "Banana Foster",
        description: "Banana caramelizada com sorvete de baunilha",
        price: 17.00,
        category: "sobremesas",
        emoji: "🍌",
        rating: 4.7
    },
    {
        id: 83,
        name: "Semifrio de Chocolate",
        description: "Semifrio cremoso com cobertura de chocolate",
        price: 18.00,
        category: "sobremesas",
        emoji: "🍫",
        rating: 4.6
    },
    {
        id: 84,
        name: "Bolo de Cenoura",
        description: "Bolo húmido de cenoura com cobertura de chocolate",
        price: 15.00,
        category: "sobremesas",
        emoji: "🥕",
        rating: 4.5
    },
    {
        id: 85,
        name: "Goiabada com Queijo",
        description: "Goiabada cremosa servida com queijo branco",
        price: 14.00,
        category: "sobremesas",
        emoji: "🍮",
        rating: 4.6
    },
    {
        id: 86,
        name: "Pavlova de Morango",
        description: "Merengue crocante com creme e morango fresco",
        price: 19.00,
        category: "sobremesas",
        emoji: "🍓",
        rating: 4.8
    },
    {
        id: 87,
        name: "Gelado de Pistácio",
        description: "Gelado artesanal de pistácio siciliano",
        price: 16.00,
        category: "sobremesas",
        emoji: "🍦",
        rating: 4.7
    },
    {
        id: 88,
        name: "Brownie Quente",
        description: "Brownie quentinho com sorvete e calda de chocolate",
        price: 20.00,
        category: "sobremesas",
        emoji: "🍫",
        rating: 4.8
    },
    {
        id: 89,
        name: "Doce de Abóbora",
        description: "Doce tradicional português de abóbora",
        price: 13.00,
        category: "sobremesas",
        emoji: "🎃",
        rating: 4.4
    },
    {
        id: 90,
        name: "Sorbet de Melancia",
        description: "Sorbet gelado de melancia com hortelã",
        price: 14.00,
        category: "sobremesas",
        emoji: "🍉",
        rating: 4.5
    },

    /* ========== BEBIDAS (30 produtos) ========== */
    {
        id: 91,
        name: "Água Mineral",
        description: "Água mineral gelada sem gás",
        price: 3.50,
        category: "bebidas",
        emoji: "💧",
        rating: 4.0
    },
    {
        id: 92,
        name: "Água com Gás",
        description: "Água mineral com gás refrescante",
        price: 4.00,
        category: "bebidas",
        emoji: "💦",
        rating: 4.1
    },
    {
        id: 93,
        name: "Suco Natural de Laranja",
        description: "Suco fresco espremido na hora",
        price: 8.00,
        category: "bebidas",
        emoji: "🍊",
        rating: 4.8
    },
    {
        id: 94,
        name: "Suco de Maracujá",
        description: "Suco tropical de maracujá gelado",
        price: 8.50,
        category: "bebidas",
        emoji: "🍌",
        rating: 4.7
    },
    {
        id: 95,
        name: "Refrigerante Cola",
        description: "Refrigerante gelado marca premium",
        price: 5.00,
        category: "bebidas",
        emoji: "🥤",
        rating: 4.2
    },
    {
        id: 96,
        name: "Refrigerante Laranja",
        description: "Refrigerante laranja gelado",
        price: 5.00,
        category: "bebidas",
        emoji: "🍊",
        rating: 4.1
    },
    {
        id: 97,
        name: "Cerveja Artesanal",
        description: "Cerveja artesanal premium nacional",
        price: 12.00,
        category: "bebidas",
        emoji: "🍺",
        rating: 4.7
    },
    {
        id: 98,
        name: "Cerveja Importada",
        description: "Cerveja belgã importada de alta qualidade",
        price: 15.00,
        category: "bebidas",
        emoji: "🍺",
        rating: 4.8
    },
    {
        id: 99,
        name: "Vinho Tinto da Casa",
        description: "Vinho tinto português de safra 2020",
        price: 35.00,
        category: "bebidas",
        emoji: "🍷",
        rating: 4.6
    },
    {
        id: 100,
        name: "Vinho Branco da Casa",
        description: "Vinho branco português fresco e aromático",
        price: 32.00,
        category: "bebidas",
        emoji: "🍷",
        rating: 4.5
    },
    {
        id: 101,
        name: "Espumante Português",
        description: "Espumante Bairrada elegante e refinado",
        price: 48.00,
        category: "bebidas",
        emoji: "🥂",
        rating: 4.8
    },
    {
        id: 102,
        name: "Champagne",
        description: "Champagne francês Dom Pérignon",
        price: 120.00,
        category: "bebidas",
        emoji: "🍾",
        rating: 5.0
    },
    {
        id: 103,
        name: "Chá Gelado",
        description: "Chá gelado sabor limão com mel",
        price: 6.00,
        category: "bebidas",
        emoji: "🍵",
        rating: 4.3
    },
    {
        id: 104,
        name: "Café Expresso",
        description: "Café expresso italiano autêntico",
        price: 3.50,
        category: "bebidas",
        emoji: "☕",
        rating: 4.6
    },
    {
        id: 105,
        name: "Café com Leite",
        description: "Café expresso com leite quente",
        price: 4.50,
        category: "bebidas",
        emoji: "☕",
        rating: 4.5
    },
    {
        id: 106,
        name: "Cappuccino",
        description: "Cappuccino cremoso com chocolate",
        price: 7.00,
        category: "bebidas",
        emoji: "☕",
        rating: 4.7
    },
    {
        id: 107,
        name: "Mocha Quente",
        description: "Café com chocolate quente e chantilly",
        price: 8.50,
        category: "bebidas",
        emoji: "☕",
        rating: 4.8
    },
    {
        id: 108,
        name: "Milkshake de Morango",
        description: "Milkshake gelado de morango com sorvete",
        price: 12.00,
        category: "bebidas",
        emoji: "🥛",
        rating: 4.7
    },
    {
        id: 109,
        name: "Milkshake de Chocolate",
        description: "Milkshake cremoso de chocolate belga",
        price: 13.00,
        category: "bebidas",
        emoji: "🥛",
        rating: 4.8
    },
    {
        id: 110,
        name: "Suco Detox",
        description: "Suco verde com maçã, gengibre e limão",
        price: 10.00,
        category: "bebidas",
        emoji: "🥗",
        rating: 4.5
    },
    {
        id: 111,
        name: "Smoothie de Açaí",
        description: "Smoothie de açaí com granola e mel",
        price: 14.00,
        category: "bebidas",
        emoji: "🍓",
        rating: 4.8
    },
    {
        id: 112,
        name: "Limonada Caseira",
        description: "Limonada fresca feita com limão siciliano",
        price: 6.00,
        category: "bebidas",
        emoji: "🍋",
        rating: 4.4
    },
    {
        id: 113,
        name: "Água de Coco",
        description: "Água de coco natural pura",
        price: 7.00,
        category: "bebidas",
        emoji: "🥥",
        rating: 4.3
    },
    {
        id: 114,
        name: "Chá Preto",
        description: "Chá preto quente importado da Índia",
        price: 5.00,
        category: "bebidas",
        emoji: "🍵",
        rating: 4.4
    },
    {
        id: 115,
        name: "Chá Verde",
        description: "Chá verde premium do Japão",
        price: 5.50,
        category: "bebidas",
        emoji: "🍵",
        rating: 4.5
    },
    {
        id: 116,
        name: "Saquê Aquecido",
        description: "Saquê tradicional japonês levemente aquecido",
        price: 18.00,
        category: "bebidas",
        emoji: "🍶",
        rating: 4.6
    },
    {
        id: 117,
        name: "Coquetel Margarita",
        description: "Margarita feito com tequila premium",
        price: 22.00,
        category: "bebidas",
        emoji: "🍹",
        rating: 4.7
    },
    {
        id: 118,
        name: "Mojito",
        description: "Mojito refrescante com rum branco e menta",
        price: 20.00,
        category: "bebidas",
        emoji: "🍹",
        rating: 4.8
    },
    {
        id: 119,
        name: "Sangria Branca",
        description: "Sangria refrescante com frutas e vinho branco",
        price: 16.00,
        category: "bebidas",
        emoji: "🍷",
        rating: 4.6
    },
    {
        id: 120,
        name: "Suco Tropical",
        description: "Suco misto de frutas tropicais gelado",
        price: 9.00,
        category: "bebidas",
        emoji: "🍹",
        rating: 4.5
    },

    /* ========== CARTA DE VINHOS (30 produtos) ========== */
    {
        id: 121,
        name: "Douro Reserva Tinto",
        description: "Vinho tinto de excelente corpo e complexidade do Douro",
        price: 58.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.8
    },
    {
        id: 122,
        name: "Bairrada Tinto Premium",
        description: "Vinho tinto estruturado de Bairrada safra 2018",
        price: 52.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.7
    },
    {
        id: 123,
        name: "Vinho Verde Branco",
        description: "Vinho verde fresco e jovem sabor cítrico",
        price: 28.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.5
    },
    {
        id: 124,
        name: "Dão Tinto Elegante",
        description: "Vinho tinto do Dão com elegância e harmonia",
        price: 45.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.6
    },
    {
        id: 125,
        name: "Alentejo Tinto Robusto",
        description: "Vinho tinto alentejano com corpo cheio",
        price: 42.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.6
    },
    {
        id: 126,
        name: "Colheita Tardia Branco",
        description: "Vinho branco doce de colheita tardia",
        price: 48.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.7
    },
    {
        id: 127,
        name: "Moscatel de Setúbal",
        description: "Vinho doce tradicional português",
        price: 65.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.9
    },
    {
        id: 128,
        name: "Porto Tawny 20 Anos",
        description: "Porto envelhecido em carvalho por 20 anos",
        price: 95.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.9
    },
    {
        id: 129,
        name: "Porto Vintage 2000",
        description: "Porto vintage de safra excepcional",
        price: 145.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 5.0
    },
    {
        id: 130,
        name: "Madeira Seco",
        description: "Vinho de Madeira seco envelhecido 10 anos",
        price: 72.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.8
    },
    {
        id: 131,
        name: "Espumante Bruto",
        description: "Espumante português método tradicional",
        price: 42.00,
        category: "vinhos",
        emoji: "🥂",
        rating: 4.7
    },
    {
        id: 132,
        name: "Champagne Brut Premier",
        description: "Champagne Veuve Clicquot brut elegante",
        price: 125.00,
        category: "vinhos",
        emoji: "🥂",
        rating: 4.9
    },
    {
        id: 133,
        name: "Rosé da Estremadura",
        description: "Vinho rosé leve e refrescante",
        price: 32.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.5
    },
    {
        id: 134,
        name: "Arneis Branco",
        description: "Vinho branco italiano de corpo médio",
        price: 38.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.6
    },
    {
        id: 135,
        name: "Barolo Tinto Italiano",
        description: "Vinho tinto italiano de grande estrutura",
        price: 78.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.8
    },
    {
        id: 136,
        name: "Chianti Classico",
        description: "Vinho tinto toscano tradicional",
        price: 58.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.7
    },
    {
        id: 137,
        name: "Rioja Tempranillo",
        description: "Vinho tinto espanhol envelhecido em carvalho",
        price: 52.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.7
    },
    {
        id: 138,
        name: "Riesling Alemão",
        description: "Vinho branco aromático alemão de Mosel",
        price: 45.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.6
    },
    {
        id: 139,
        name: "Cabernet Sauvignon Chileno",
        description: "Vinho tinto chileno de corpo intenso",
        price: 48.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.6
    },
    {
        id: 140,
        name: "Malbec Argentino",
        description: "Vinho tinto argentino com frutos vermelhos",
        price: 52.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.7
    },
    {
        id: 141,
        name: "Pinot Noir Francês",
        description: "Vinho tinto pinot noir da Borgonha",
        price: 85.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.8
    },
    {
        id: 142,
        name: "Sauvignon Blanc",
        description: "Vinho branco francês cítrico e mineral",
        price: 42.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.6
    },
    {
        id: 143,
        name: "Chardonnay Californiano",
        description: "Vinho branco encorpado do Vale de Napa",
        price: 65.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.7
    },
    {
        id: 144,
        name: "Syrah Australiano",
        description: "Vinho tinto frutuoso da Austrália",
        price: 55.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.6
    },
    {
        id: 145,
        name: "Garnacha Espanhola",
        description: "Vinho tinto encorpado de Aragon",
        price: 48.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.6
    },
    {
        id: 146,
        name: "Prosecco Italiano",
        description: "Espumante italiano leve e fresco",
        price: 35.00,
        category: "vinhos",
        emoji: "🥂",
        rating: 4.5
    },
    {
        id: 147,
        name: "Cava Espanhol",
        description: "Espumante espanhol método tradicional",
        price: 38.00,
        category: "vinhos",
        emoji: "🥂",
        rating: 4.6
    },
    {
        id: 148,
        name: "Sauternes Doce",
        description: "Vinho branco doce francês nobre",
        price: 62.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.8
    },
    {
        id: 149,
        name: "Tawny Reserva",
        description: "Vinho fortificado português 10 anos",
        price: 58.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.7
    },
    {
        id: 150,
        name: "Vino da Tavola Premium",
        description: "Vinho italiano tinto de grande qualidade",
        price: 72.00,
        category: "vinhos",
        emoji: "🍷",
        rating: 4.8
    }
];

/* ============================================
   FUNÇÕES DE ACESSO AO BANCO DE DADOS
   ============================================ */

/**
 * Obter todos os produtos
 */
function getAllProducts() {
    return products;
}

/**
 * Obter produtos por categoria
 * @param {string} category - Nome da categoria
 */
function getProductsByCategory(category) {
    if (category === 'all') {
        return products;
    }
    return products.filter(product => product.category === category);
}

/**
 * Buscar produtos por nome
 * @param {string} searchTerm - Termo de busca
 */
function searchProducts(searchTerm) {
    const term = searchTerm.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term)
    );
}

/**
 * Obter produto por ID
 * @param {number} id - ID do produto
 */
function getProductById(id) {
    return products.find(product => product.id === id);
}

/**
 * Filtrar produtos por preço
 * @param {number} maxPrice - Preço máximo
 */
function getProductsByPrice(maxPrice) {
    return products.filter(product => product.price <= maxPrice);
}

/**
 * Ordenar produtos
 * @param {string} sortType - Tipo de ordenação
 * @param {array} productsToSort - Produtos para ordenar
 */
function sortProducts(sortType, productsToSort) {
    let sorted = [...productsToSort];
    
    switch(sortType) {
        case 'price-asc':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            break;
    }
    
    return sorted;
}

/**
 * Obter categorias únicas
 */
function getCategories() {
    return [...new Set(products.map(p => p.category))];
}

/**
 * Obter informações da categoria
 */
function getCategoryInfo() {
    const categories = {
        'entradas': 'Entradas',
        'prato-principal': 'Prato Principal',
        'sobremesas': 'Sobremesas',
        'bebidas': 'Bebidas',
        'vinhos': 'Carta de Vinhos'
    };
    return categories;
}
