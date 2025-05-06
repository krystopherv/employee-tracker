import db from './connection.js';
import cTable from 'console.table';

// View all departments
export async function viewAllDepartments() {
  try {
    const result = await db.query('SELECT id, name FROM department ORDER BY id;');
    console.table(result.rows);
  } catch (err) {
    console.error('Error viewing departments:', err.message);
  }
}

// View all roles
export async function viewAllRoles() {
  try {
    const result = await db.query(`
      SELECT role.id, role.title, department.name AS department, role.salary
      FROM role
      JOIN department ON role.department_id = department.id
    `);
    console.table(result.rows);
  } catch (err) {
    console.error('Error viewing roles:', err.message);
  }
}

// View all employees
export async function viewAllEmployees() {
  try {
    const result = await db.query(`
      SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department,
             role.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
      FROM employee e
      LEFT JOIN role ON e.role_id = role.id
      LEFT JOIN department ON role.department_id = department.id
      LEFT JOIN employee m ON e.manager_id = m.id
    `);
    console.table(result.rows);
  } catch (err) {
    console.error('Error viewing employees:', err.message);
  }
}

// Add a department
export async function addDepartment() {
  const { default: inquirer } = await import('inquirer');
  const { name } = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the name of the department:',
    },
  ]);
  try {
    await db.query('INSERT INTO department (name) VALUES ($1)', [name]);
    console.log(`Added department: ${name}`);
  } catch (err) {
    console.error('Error adding department:', err.message);
  }
}

// Add a role
export async function addRole() {
  const { default: inquirer } = await import('inquirer');
  const { title, salary, department_id } = await inquirer.prompt([
    { type: 'input', name: 'title', message: 'Enter role title:' },
    { type: 'input', name: 'salary', message: 'Enter salary:' },
    { type: 'input', name: 'department_id', message: 'Enter department ID:' },
  ]);
  try {
    await db.query(
      'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)',
      [title, salary, department_id]
    );
    console.log(`Added role: ${title}`);
  } catch (err) {
    console.error('Error adding role:', err.message);
  }
}

// Add an employee
export async function addEmployee() {
  const { default: inquirer } = await import('inquirer');
  const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
    { type: 'input', name: 'first_name', message: 'Enter first name:' },
    { type: 'input', name: 'last_name', message: 'Enter last name:' },
    { type: 'input', name: 'role_id', message: 'Enter role ID:' },
    { type: 'input', name: 'manager_id', message: 'Enter manager ID (null if none):' },
  ]);
  try {
    await db.query(
      'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)',
      [first_name, last_name, role_id, manager_id || null]
    );
    console.log(`Added employee: ${first_name} ${last_name}`);
  } catch (err) {
    console.error('Error adding employee:', err.message);
  }
}

// Update an employee role
export async function updateEmployeeRole() {
  const { default: inquirer } = await import('inquirer');
  const { employee_id, new_role_id } = await inquirer.prompt([
    { type: 'input', name: 'employee_id', message: 'Enter employee ID to update:' },
    { type: 'input', name: 'new_role_id', message: 'Enter new role ID:' },
  ]);
  try {
    await db.query('UPDATE employee SET role_id = $1 WHERE id = $2', [new_role_id, employee_id]);
    console.log(`Updated employee ${employee_id} to role ${new_role_id}`);
  } catch (err) {
    console.error('Error updating employee role:', err.message);
  }
}
