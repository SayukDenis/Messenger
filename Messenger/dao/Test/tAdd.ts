const db = SQLite.openDatabase('mydb.db');

class Employee {
  date_of_birth: any;
  employee_id: any;
  first_name: any;
  last_name: any;
  salary: any;
  is_active: boolean;
  constructor(employee_id, first_name, last_name, date_of_birth, salary, is_active) {
    this.employee_id = employee_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.date_of_birth = date_of_birth;
    this.salary = salary;
    this.is_active = is_active;
  }
}
// Створення таблиці при монтажі компоненту
useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS employees 
          (employee_id INTEGER PRIMARY KEY, 
          first_name TEXT, 
          last_name TEXT, 
          date_of_birth DATE, 
          salary REAL, 
          is_active BOOLEAN);`
      );
    });
  }, []);

  // Додавання запису в таблицю
  const addEmployee = () => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO employees 
          (first_name, last_name, date_of_birth, salary, is_active) 
          VALUES (?, ?, ?, ?, ?);`,
        ['John', 'Doe', '1990-01-01', 50000.0, 'true'],
        (_, { rows }) => {
          console.log('Inserted Employee ID: ', rows._array.findIndex(() => true));
        },
        (_, error) => {
          console.error('Error inserting employee:', error);
          return true;
        }
      );
    });
  };

  // Отримання даних з таблиці та створення об'єкта Employee
  const readEmployees = () => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM employees;`,
        [],
        (_, { rows }) => {
          const employees = rows._array.map(
            ({ employee_id, first_name, last_name, date_of_birth, salary, is_active }) =>
              new Employee(employee_id, first_name, last_name, date_of_birth, salary, is_active)
          );
          for( let x in employees)
            console.log('Employees:', x);
        },
        (_, error) => {
          console.error('Error reading employees:', error);
          return true;
        }
      );
    });
  };

