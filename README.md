# User Profile Edit App

This project is an Angular application designed to allow users to edit their profile information using a modern and responsive form. The form includes fields for the user's first name, last name, email, phone number, and profile picture upload.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Edit and update user profile information.
- Form validation for required fields.
- Upload and preview profile pictures.
- Data persistence using `localStorage`.
- Styled using Angular Material for a responsive and modern UI.

## Technologies Used

- **Angular**: Framework used for developing the SPA (Single Page Application).
- **Angular Material**: For styling and adding responsive UI components.
- **Reactive Forms**: To build dynamic forms with validation.
- **TypeScript**: Primary language for Angular and service logic.
- **RxJS**: For handling asynchronous programming and data streams.

## Installation

To get started with this project, clone the repository and install the required dependencies.

### Prerequisites

- **Node.js** (v14.x or higher)
- **Angular CLI** (v15.x or higher)

### Steps to Install

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/user-profile-edit-app.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd user-profile-edit-app
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Install Angular Material (if not installed)**:

    ```bash
    ng add @angular/material
    ```

## Usage

To run the project locally:

1. **Start the development server**:

    ```bash
    ng serve
    ```

2. **Open your browser and navigate to**: [http://localhost:4200](http://localhost:4200)

The application will load, and you will see a form to edit your profile. Changes to the form will be saved to `localStorage`.

## Testing

This project uses **Jasmine** and **Karma** for testing. To run the unit tests:

```bash
ng test
