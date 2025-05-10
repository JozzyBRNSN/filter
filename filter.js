const dataArray = [
	{ id: 1, name: "Россия", value: "Russia" },
	{ id: 2, name: "США", value: "USA" },
	{ id: 3, name: "Канада", value: "Canada" },
	{ id: 4, name: "Бразилия", value: "Brazil" },
	{ id: 5, name: "Австралия", value: "Australia" },
	{ id: 6, name: "Индия", value: "India" },
	{ id: 7, name: "Аргентина", value: "Argentina" },
	{ id: 8, name: "Мексика", value: "Mexico" },
	{ id: 9, name: "Япония", value: "Japan" },
	{ id: 10, name: "Германия", value: "Germany" },
	{ id: 11, name: "Франция", value: "France" },
	{ id: 12, name: "Италия", value: "Italy" },
	{ id: 13, name: "Египет", value: "Egypt" },
	{ id: 14, name: "Турция", value: "Turkey" },
	{ id: 15, name: "Южная Корея", value: "South Korea" },
	{ id: 16, name: "ЮАР", value: "South Africa" },
	{ id: 17, name: "Норвегия", value: "Norway" },
	{ id: 18, name: "Швеция", value: "Sweden" },
	{ id: 19, name: "Испания", value: "Spain" },
	{ id: 20, name: "Польша", value: "Poland" },
	{ id: 21, name: "Украина", value: "Ukraine" },
	{ id: 22, name: "Саудовская Аравия", value: "Saudi Arabia" },
	{ id: 23, name: "Иран", value: "Iran" },
	{ id: 24, name: "Ирак", value: "Iraq" },
	{ id: 25, name: "Финляндия", value: "Finland" },
	{ id: 26, name: "Чили", value: "Chile" },
	{ id: 27, name: "Перу", value: "Peru" },
	{ id: 28, name: "Малайзия", value: "Malaysia" },
	{ id: 29, name: "Таиланд", value: "Thailand" },
	{ id: 30, name: "Вьетнам", value: "Vietnam" },
	{ id: 31, name: "Кения", value: "Kenya" },
	{ id: 32, name: "Куба", value: "Cuba" },
	{ id: 33, name: "Швейцария", value: "Switzerland" },
	{ id: 34, name: "Бельгия", value: "Belgium" },
	{ id: 35, name: "Греция", value: "Greece" },
	{ id: 36, name: "Португалия", value: "Portugal" },
	{ id: 37, name: "Нидерланды", value: "Netherlands" },
];

function createCountrySelect() {
	const searchInput = document.getElementById("search-input");
	const countrySelect = document.getElementById("country-select");
	const searchText = searchInput.value.toLowerCase();

	// Очищаем предыдущий список
	countrySelect.innerHTML = "";

	// Получаем список стран (либо отфильтрованный, либо первые 5)
	let countriesToShow;
	if (searchText === "") {
		countriesToShow = dataArray.slice(0, 5);
	} else {
		countriesToShow = dataArray
			.filter(country => country.name.toLowerCase().includes(searchText))
			.slice(0, 5);
	}

	// Создаем список стран
	const ul = document.createElement("ul");
	ul.style.listStyle = "none";
	ul.style.padding = "0";
	ul.style.margin = "0";

	if (countriesToShow.length === 0) {
		const errorBlock = document.createElement("div");
		errorBlock.setAttribute("class", "popup__errors");
		errorBlock.textContent = "Нет результатов для отображения";
    countrySelect.appendChild(errorBlock);
    countrySelect.style.border = 'none';
		return;
	}

	countriesToShow.forEach(country => {
		const li = document.createElement("li");
		li.textContent = country.name;
		li.style.padding = "8px";
		li.style.cursor = "pointer";

		// При клике заполняем поле ввода
		li.addEventListener("click", () => {
			searchInput.value = country.name;
			countrySelect.innerHTML = "";
		});

		ul.appendChild(li);
	});

	countrySelect.appendChild(ul);
}

document.addEventListener("DOMContentLoaded", createCountrySelect);
