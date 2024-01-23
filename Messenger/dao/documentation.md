# Documentation for database

## Models

### Example models

User:

```ts
class User extends Model {
  userId?: number;
  name!: string;
  numberPhone?: string;
  nickname?: string;
  description?: string;
  linkToPhoto?: string;
  //schema
  static schema = {
    name: 'users', // table name
    properties: {  // each property and its type:
      userId: 'integer', 
      name: 'string',
      numberPhone: 'text?',
      nickname: 'text?',
      description: 'text?',
      linkToPhoto: 'text?',
    },
    primaryKey: 'userId', //primary key, field should be in the properties
  };
};
```

Dialogue:

```ts
class Dialogue extends MainChat { 
    constructor(firstUser: User, secondUser: User) {
        super();
        this.users.push(firstUser);
        this.users.push(secondUser);
    }
    dialogueId?: number;
    //schema
    static schema = { // every property that exists in the parent class should be written here
        name: 'dialogues',
        properties: {
            dialogueId: { type: 'integer' }, //Not null
            users: { type: 'list', objectType: User }, // list and class
            messages: { type: 'list', objectType: Message },          
            pinnedMessage: { type: 'list', objectType: Message },
            pinnedMessageForAll: { type: 'list', objectType: Message },
            branches: { type: 'list', objectType: Branch },
            roles: { type: 'list', objectType: Role },
            lastWatchedMessage: { type: 'list', objectType: {} as ILastWatchedMessage }, // interface
            linkToPhoto: 'text?',
        },
        primaryKey: 'dialogueId',
        embedded: false, // a table should be created
    }
}
```

### Basic types in schema

* `integer` - stored as an INTEGER
* `bigint`  - stored as an INTEGER
* `real` - stored as an REAL
* `boolean`  - stored as an BOOLEAN
* `string` and `text` - stored as a TEXT
* `date` - stored as a DATETIME (INTEGER)
* `blob` - stored as a BLOB (image, audio, video and other type of raw binary information)
* `null` - stored as an NULL

### Example column and data to insert

| id | null_column | integer_column | real_column |  text_column  | blob_column |     datetime_column   | boolean_column |
|----|-------------|----------------|-------------|---------------|-------------|-----------------------|----------------|
| 1  | NULL        | 42             | 3.14        | Sample Text   | 0x010101    | 2024-01-01 12:34:56   | TRUE           |
| 2  | NULL        | 23             | 2.71        | Another Text  | 0x020202    | 2024-01-02 18:45:30   | FALSE          |

### Additional types in schema

* `enum` - stored as an INTEGER
* `interface` - stored as an TEXT in JSON format
* `list` - have 3 cases:
  * if an array of `primitive types` - stored as an TEXT in JSON format
  * if an array of `interface` - stored as an TEXT in JSON format
  * if an array of `class` - add field INTEGER type and FOREIGN KEY in the binding model
* `class` - one-to-one reference,  stored as an INTEGER
* `other` - Error "dao_generateSql_mapToSQl: Unknown type "

### NULLable type in schema

1. You can append `?` at the end of the type definition as a string to indicate that the field can be `nullable`; otherwise, it is NOT NULL.
2. If the type is an object, such as `{type: 'number', optional: true}`, it indicates that the field is `optional`. You can omit the specification of optional.

## Field rules

### Field rules in the scheme

1. Fields in the schema should be named like class fields - their names will be analogous in the table.
2. A scheme can't have functions.

### Foreign key naming rules

* For foreign keys in associated models (one-to-many relationship): `{name of the parent table}_{field name}_fk`

* For foreign keys in this table (one-to-one relationship): `{field name}_fk`

## Example work with Expo SQLite

```ts
// Model
class Employee {
  date_of_birth: Date;
  employee_id: number;
  first_name: string;
  last_name: string;
  salary: number;
  is_active: boolean;
  constructor(employee_id, first_name, last_name, date_of_birth, salary, is_active) {
    this.employee_id = employee_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.date_of_birth = new Date(date_of_birth);
    this.salary = salary;
    this.is_active = is_active;
  }
}

// Adding a record to the table
const addEmployee = () => {
  db.transaction(tx => {
    tx.executeSql(
      `INSERT INTO employees 
          (first_name, last_name, date_of_birth, salary, is_active) 
          VALUES (?, ?, ?, ?, ?);`,
      ['John', 'Doe', new Date().getTime(), 50000.0, `${false}`],
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

// Getting data from the table and creating an Employee object
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
        for (let x of employees)
          console.log('Employees:',x );
      },
      (_, error) => {
        console.error('Error reading employees:', error);
        return true;
      }
    );
  });
};
```
