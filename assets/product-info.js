connectedCallback() {
  // Check if the variant select element exists
  const variantSelect = this.querySelector('.product-single__variants');
  if (!variantSelect) return;

  // Create a new dropdown element
  const dropdown = document.createElement('select');
  dropdown.classList.add('product-single__variants');
  dropdown.name = 'id';

  // Add an "Unselected" option at the top
  const unselectedOption = document.createElement('option');
  unselectedOption.value = '';
  unselectedOption.textContent = 'Unselected';
  dropdown.appendChild(unselectedOption);

  // Move existing size options to the dropdown
  const sizeOptions = variantSelect.querySelectorAll('option');
  sizeOptions.forEach(option => {
    dropdown.appendChild(option.cloneNode(true));
  });

  // Replace the original variant select with the new dropdown
  variantSelect.replaceWith(dropdown);

  // Listen for changes on the dropdown
  dropdown.addEventListener('change', () => {
    this.currentVariant.value = dropdown.value;
    this.fetchQuantityRules();
  });

  // Set the dropdown default to "Unselected"
  dropdown.value = '';
}
