# weather_app

# Beschreibung der Lösung

Diese Web-Anwendung ermöglicht es Benutzern:

Ihre bevorzugten Orte hinzuzufügen, zu löschen und zu aktualisieren.
Die aktuelle Wetterlage für jeden gespeicherten Ort abzurufen.
Alle Ort-Daten werden im LocalStorage gespeichert.
Technologien

Frontend: React, React Router DOM, Axios
Backend: Nicht verwendet, alle Daten werden im LocalStorage gespeichert
Wetter-API: OpenWeatherMap
Projektstruktur

# Frontend

# Komponenten und Seiten:

src/components/AddLocation.js: Formular zum Hinzufügen eines neuen Ortes.
src/components/LocationList.js: Liste der gespeicherten Orte mit Möglichkeit zum Löschen und Bearbeiten.
src/components/WeatherDetails.js: Zeigt das aktuelle Wetter für den ausgewählten Ort an.
src/pages/AddLocationPage.js: Seite zum Hinzufügen eines neuen Ortes.
src/pages/LocationListPage.js: Seite zur Ansicht der Liste gespeicherter Orte.
src/layout/Layout.js: Allgemeines Layout der Anwendung mit Navigationsmenü.
src/components/NavBar.js: Navigationsmenü zum Wechseln zwischen den Seiten.

# Hooks:

src/hooks/useWeather.js: Benutzerdefinierter Hook zum Abrufen von Wetterdaten aus der API.

# Stile:

src/components/weatherDetails/WeatherDetails.module.css
src/pages/AddLocationPage.module.css
src/pages/LocationListPage.module.css
src/components/AddLocation/AddLocation.module.css
src/components/LocationList/LocationList.module.css
src/components/NavBar/NavBar.module.css

# Backend

Wird nicht verwendet, alle Daten werden im LocalStorage gespeichert.