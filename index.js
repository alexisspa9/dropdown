const dropdownFunc = () => {
	const parentElements = Array.from(document.querySelectorAll(".hasDropdown"));
	const addListeners = () => {
		parentElements.forEach((el) => {
			const dropdownElement = el.querySelector(".dropdown");
			el.addEventListener("click", (e) => {
				removeVisible();	
		 		if(dropdownElement) {
		 			dropdownElement.classList.toggle("visible");
		 		}
			});
			el.addEventListener("mouseenter", (e) => {
				removeVisible();
		 		if(dropdownElement) {
		 			dropdownElement.classList.add("visible");
		 		}
			});
			el.addEventListener("mouseleave", (e) => {
				removeVisible();
			});
		});
	}

	const removeVisible = () => {
		const dropdownElements = Array.from(document.querySelectorAll(".dropdown"));

		dropdownElements.forEach((el) => {
			el.classList.remove("visible");
		});

	}
	addListeners();
}


module.exports = dropdownFunc;
