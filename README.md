
# Contact Page

This project is a simple contact page built using React and Tailwind CSS. It allows users to submit their contact information and messages, which are then stored in a Google Sheets spreadsheet using the Best Sheet API.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)


## Features

- Input fields for name, email, phone number, and message.
- Validation for required fields.
- Integration with Google Sheets API for storing contact information.
- Responsive design using Tailwind CSS.

## Demo

you can access my website through this link:"https://65e8a43830aaec1e0c1fc1e3--starlit-sable-c4b7b5.netlify.app/"

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone <https://github.com/akshatha-swamy/Contact-Page>
```

2. Navigate to the project directory:

```bash
cd Contact-Page
```

3. Install dependencies:

```bash
npm install
```

## Usage

To start the development server, run:

```bash
npm start
```

Access the application at `http://localhost:3000` in your browser.

## API Integration

This project uses the Best Sheet API to integrate with Google Sheets. Make sure to obtain your API key and replace the placeholder in the code with your actual key.

```javascript
n
 const onSubmit=(e)=>{
        e.preventDefault(); // Prevent default form submission behavior
        axios.post(`https://sheet.best/api/sheets/3f06c792-8e25-43b5-afab-d81383d5be53`, { name, email, phone, message })
            .then(response => {
                console.log("Data sent successfully:", response);
                // Optionally, you can reset the form fields after successful submission
                setName('');
                setEmail('');
                setPhone('+91');
                setMessage('');
                
            })
            .catch(error => {
                console.error("Error sending data:", error);
                // Handle error appropriately
            });
    }
```

