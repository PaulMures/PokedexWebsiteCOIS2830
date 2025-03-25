Pokedex Web Application

Overview
--------
This project is a dynamic, interactive web application that celebrates Pokémon by fetching data for the first 150 Pokémon from the PokéAPI. It not only displays a gallery of Pokémon cards but also offers an engaging quiz complete with real-time feedback and confetti effects. An embedded video further enriches the user experience, adding a nostalgic touch to the Pokémon theme.

Features
--------
- Dynamic Pokémon Gallery:
  The application dynamically creates cards for each Pokémon, displaying their image, formatted name, and type. The cards feature unique background colors based on Pokémon type for a vibrant look.

- Search & Filter Functionality:
  Users can easily search for a Pokémon by name using the search box, or filter the list by Pokémon type using the dropdown menu in the navigation bar.

- Interactive Quiz:
  A built-in quiz presents multiple-choice questions about Pokémon. As users submit their answers, the quiz provides immediate visual feedback—correct answers are highlighted in green and incorrect ones in red. Achieving a good score triggers a celebratory burst of confetti.

- Embedded Video:
  The project includes a video file (Pokemon.mp4) embedded into the application, which enhances the thematic experience by playing a related video (such as the Pokémon theme song).

- Responsive Design:
  The design is optimized to work across devices, ensuring a seamless experience whether you’re on a desktop or a mobile device.

File Structure
--------------
- index.html:
  This is the main HTML file that structures the entire application. It includes:
    - A fixed navigation bar with a search input and a type filter dropdown.
    - A video container that embeds the Pokemon.mp4 file.
    - A section displaying the Pokémon gallery.
    - Sections for the quiz and the results, along with a submit button.
    - References to external scripts and stylesheets, including the js-confetti library and the main JavaScript file.

- style.css:
  The CSS file defines the visual presentation of the application, including:
    - A modern, linear gradient background.
    - Styling for the navigation bar, ensuring the search input and filter dropdown are both functional and visually appealing.
    - A responsive layout for the Pokémon grid, with cards that animate on hover.
    - Specific styles for the quiz section, including the layout and appearance of questions, answers, and the submit button.

- script.js:
  The JavaScript file is responsible for the application’s functionality. Key tasks include:
    - Fetching data for 150 Pokémon from the PokéAPI.
    - Dynamically generating and displaying Pokémon cards with images, names, and types.
    - Implementing the search and filter features that allow real-time updating of the displayed Pokémon.
    - Managing the quiz by generating questions, processing user answers, displaying results, and triggering confetti effects when the score meets a set threshold.

- Pokemon.mp4:
  A video file embedded within the application that plays a Pokémon-related video, adding an engaging multimedia element to the overall experience.

Installation & Usage
--------------------
1. Clone the Repository:

   git clone https://github.com/your-username/pokedex-web-app.git
   cd pokedex-web-app

2. Run the Application:
   - Option 1: Open index.html directly in your web browser.
   - Option 2: Serve the project using a local development server (for example, with Python):

     python -m http.server 8000

     Then navigate to http://localhost:8000 in your browser.

3. Interact with the Application:
   - Use the search bar and filter dropdown to explore Pokémon cards.
   - Watch the embedded video for a thematic experience.
   - Take the quiz by answering the multiple-choice questions and click the Submit button to see your score and enjoy confetti effects if you perform well.

Technologies & Dependencies
---------------------------
- HTML5 & CSS3:
  Structures and styles the application with modern, responsive design techniques.

- JavaScript (ES6):
  Handles dynamic content loading, search/filter functionality, and interactive quiz features.

- PokéAPI:
  Provides the Pokémon data that fuels the dynamic gallery. (https://pokeapi.co/)

- js-confetti:
  A lightweight JavaScript library used to create fun and interactive confetti effects during the quiz.

Contributing
------------
Contributions are welcome! If you have ideas for improvements or bug fixes, feel free to fork the repository, make your changes, and submit a pull request.

License
-------
This project is open source and available under the MIT License. See the LICENSE file for more details.

Acknowledgements
----------------
- PokéAPI:
  For providing comprehensive Pokémon data that powers the gallery.

- js-confetti:
  For the delightful confetti effects that enhance the quiz experience.

- Community Inspiration:
  Special thanks to the Pokémon community and fan projects that inspired this application.

Enjoy exploring and testing your Pokémon knowledge with this interactive web application!
