# W05D02 - Database Design

### To Do
- [X] Primary Keys/Foreign Keys
- [X] Naming Conventions
- [X] Data Types
- [X] Relationship Types
- [X] Design Concepts
- [X] Entity Relationship Diagrams
- [X] Breakout: Convert 2 Spreadsheets (15 - 20 mins)



## Keys
- primary key - the unique identifier for a record
  * field `id` for every table

- foreign keys - same type as the key they reference

## Naming conventions
- field/tables names should be snake case (`field_name`, `table_name`) 
- tables should be plural (`users`, `books`)
- `id` for primary key
- for foreign keys `author_id`, `album_id`, `user_id`

## Data Types
- but most our types are `integer`, `varchar`, `boolean`
- phone numbers? postal (zip) codes - create as string types

## Relationship Types
- one-to-one: 1 record in the first table is related to **only** 1 record in teh second table
  * generally useless
  * perhaps to save space
- one-to-many/ many-to-one : 1 record in the first table can be related to 1 or more records in the second
- many-to-many: 1 or more records in the first table relate to 1 or more records in the second
  * requires a third table (bridge, junction table)

## Design Concepts
1. required fields - the record in its initial state
2. default values - (`NOW()`, `CURRENT_DATE`)
3. calculated fields - `first_name` + `last_name` = `full_name`
  * staying away from them 
4. Pull repeated values out
  - for example if we ask for a city , then people will input things like (Kansas City, KC, KCMO, KCK)
  - instead a look-up table
  (1, Toronto)
  (2, Montreal)
  (3, Calgary)
5. Try not to delete anything (soft-delete)
  * just add a field that you can change to true or false to indicate that that record is active
  `SELECT * FROM users WHERE active = TRUE`



## Today's Breakout
- [our gist](https://gist.github.com/jcbain/175b1c6ca6263343329f41f4105d8404)