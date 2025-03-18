# Choose Your Top 3 Hotels App

## Demo  
🔗 [View the app on Netlify](https://best-3-hotels.netlify.app/)

## Project Description

This app allows users to select their top 3 hotels from a provided list. The list is displayed as slides, which can be navigated using the "Siguiente" and "Anterior" buttons. The app is built with React using Vite.

The hotel list is stored in an array in a separate file (`data.jsx`) and displayed using the `.map()` method. When a hotel is selected for the top 3, a new array is created to store the selected hotels. The app enforces certain restrictions: users cannot select more than three hotels, and the same hotel cannot be selected twice. If these conditions are violated, an alert message appears. Selected hotels can be removed from the top 3 using the "Remove" button, utilizing the `.filter()` method.

No installation is required.

## App Screenshot:

![App Screenshot](Captura-1.JPG)
![App Screenshot](Captura-2.JPG)

### How to Use:
1. Navigate through the hotel slides using the "Siguiente" and "Anterior" buttons.
2. Select your favorite hotels by clicking the "Añadir al Top-3" button. They will automatically appear in the "Tus top'3 hoteles" section.
3. Remove hotels from the "Top-3" using the "Eliminar" button.

### Features:
- Intuitive and user-friendly interface.
- Ability to select up to three hotels for the top 3.
- Alerts for selection restrictions (e.g., selecting more than three hotels or the same hotel twice).
- Option to remove hotels from the top 3.

## Requirements:
- A modern web browser with JavaScript support.
- Internet access.

  ## Technologies Used:
- React
- Vite
- JavaScript (ES6+)
- CSS (for styling)
