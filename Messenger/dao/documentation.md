# Documantation for database

## Types

Basic types:

* `integer` and `number` - stored as an INTEGER
* `number` - stored as an INTEGER
* `bigint`  - stored as an INTEGER
* `boolean` and `bool` - stored as an INTEGER
* `date` - stored as an INTEGER
* `text` - stored as a TEXT
* `string` - stored as a TEXT
* `symbol` - stored as a TEXT

if type has `?` in end - field is nullable, otherwise `NOT NULL`

Additional types:

* `enum` - stored as an INTEGER
* `interface` - stored as an TEXT in JSON format
* `list` - have 3 cases:
  * if an array of `primitive types` - strored as an TEXT in JSON format
  * if an array of `interface` - strored as an TEXT in JSON format
  * if an array of `class` - add field INTEGER type and FOREIGN KEY in the binding model
* `special list` - json(array of integer)
* `class` - one-to-one reference,  stored as an INTEGER
* `another` - Error "dao_generateSql_mapToSQl: Unknown type "
