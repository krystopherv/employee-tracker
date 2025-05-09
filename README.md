# Employee Tracker

## Description

This command-line application helps business owners manage a company's employee database. It allows users to view and organize departments, roles, and employees quickly and efficiently using a simple interactive menu.

Built with Node.js, Inquirer, and PostgreSQL, the Employee Tracker simplifies internal HR operations for growing companies.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Demo](#demo)
- [License](#license)
- [Questions](#questions)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/krystopherv/employee-tracker.git
   cd employee-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the PostgreSQL database:
   - Create a PostgreSQL database.
   - Run the SQL schema and (optionally) seed files:
     ```bash
     psql -U yourUsername -d yourDatabaseName -f db/schema.sql
     psql -U yourUsername -d yourDatabaseName -f db/seed.sql
     ```

4. Create a `.env` file with your database credentials:
   ```
   PGHOST=localhost
   PGUSER=yourUsername
   PGPASSWORD=yourPassword
   PGDATABASE=yourDatabaseName
   PGPORT=5432
   ```

---

## Usage

Start the application with:

```bash
node index.js
```

Use the arrow keys and prompts to:

- View all departments, roles, and employees
- Add new departments, roles, or employees
- Update an employee’s role

---

## Features

- Fully interactive CLI with Inquirer.js
- SQL queries for real-time data manipulation
- Modular code structure
- Clear menu navigation

---

## Technologies Used

- Node.js
- Inquirer
- PostgreSQL
- pg package
- dotenv

---

## Demo

📽️ [Walkthrough Video](https://drive.google.com/file/d/1eHHN1OP3tBO6PoO_4_ur3CBddfB5Llt_/view?usp=sharing)

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Questions

For questions or feedback, reach out via:

- GitHub: [@krystopherv](https://github.com/krystopherv)
- Email: krystopherherrera@gmail.com
