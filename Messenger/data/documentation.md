# Work with database

Here are described the main methods that you will need when working with the database.

## Get started

First step: export `dataSource` from `data/local/database.ts`

Second step:

* use `manager` - `EntityManager` used to work with entities.
Learn more about [Entity Manager and Repository](https://typeorm.io/working-with-entity-manager#).
* use `getRepository` - Gets `Repository` to perform operations on a specific entity.
Learn more about [Repositories](https://typeorm.io/working-with-repository#).

```typescript
//manager -recommended
const manager: EntityManager = dataSource.manager
// you can call manager methods, for example find:
const users = await manager.find(User)

//repository (only for work with User)
const userRepository = manager.getRepository(User)
//call methods:
await userRepository.find() //->return Users 
```

### DataSource methods

* `isInitialized` - Indicates if DataSource was initialized and initial connection / connection pool with database was established or not.

* `initialize` - Initializes data source and opens connection pool to the database.

```typescript
const isInitialized: boolean = dataSource.isInitialized

await dataSource.initialize()

if (!dataSource.isInitialized) await dataSource.initialize();
```

* `destroy` - Destroys the DataSource and closes all database connections.
    Usually, you call this method when your application is shutting down.

```typescript
await dataSource.destroy()
```

* `synchronize` - Synchronizes database schema. When `synchronize: true` is set in data source options it calls this method.
    Usually, you call this method when your application is starting.

```typescript
await dataSource.synchronize()
```

* `dropDatabase` - Drops the database and all its data.
    Be careful with this method on production since this method will erase all your database tables and their data.
    Can be used only after connection to the database is established.

```typescript
await dataSource.dropDatabase()
```

`dataSource` is such an object:

```ts
export const dataSource = new DataSource({
  database: 'messenger.db',
  type: 'expo',
  driver: require('expo-sqlite'),
  entities: [User, SelfProfile, Message, Chat, Tab, Folder, Branch,
    MainChat, Role, Dialogue, Channel, Group],
  synchronize: true,
  logging: ["error"],
});
```

`synchronize: true` - Indicates if database schema should be auto created on every application launch.Don't use this in production - otherwise you can lose production data.  

## The most important methods

* `transaction` - Provides a transaction where multiple database requests will be executed in a single database transaction.
    Learn more [Transactions](https://typeorm.io/transactions).

```typescript
await manager.transaction(async (manager) => {
    // NOTE: you must perform all database operations using the given manager instance
    // it's a special instance of EntityManager working with this transaction
    // and don't forget to await things here
})
```

* `createQueryBuilder` - Creates a query builder use to build SQL queries.
    Learn more about [QueryBuilder](select-query-builder.md).

```typescript
const users = await manager
    .createQueryBuilder()
    .select()
    .from(User, "user")
    .where("user.name = :name", { name: "John" })
    .getMany()
```

* `save` - Saves a given entity or array of entities.
    If the entity already exists in the database, then it's updated.
    If the entity does not exist in the database yet, it's inserted.
    It saves all given entities in a single transaction (in the case of entity manager is not transactional).
    Also supports partial updating since all undefined properties are skipped. In order to make a value `NULL`, you must manually set the property to equal `null`.

```typescript
await manager.save(user)
await manager.save([category1, category2, category3])
```

* `remove` - Removes a given entity or array of entities.
    It removes all given entities in a single transaction (in the case of entity, manager is not transactional).

```typescript
await manager.remove(user)
await manager.remove([category1, category2, category3])
```

* `insert` - Inserts a new entity, or array of entities.

```typescript
await manager.insert(User, {
    firstName: "Timber",
    lastName: "Timber",
})

await manager.insert(User, [
    {
        firstName: "Foo",
        lastName: "Bar",
    },
    {
        firstName: "Rizz",
        lastName: "Rak",
    },
])
```

* `update` - Partially updates entity by a given update options or entity id.

```typescript
await manager.update(User, { age: 18 }, { category: "ADULT" })
// executes UPDATE user SET category = ADULT WHERE age = 18

await manager.update(User, 1, { firstName: "Rizzrak" })
// executes UPDATE user SET firstName = Rizzrak WHERE id = 1
```

* `upsert` - Inserts a new entity or array of entities unless they already exist in which case they are updated instead. Supported by AuroraDataApi, Cockroach, Mysql, Postgres, and Sqlite database drivers.

```typescript
await manager.upsert(
    User,
    [
        { externalId: "abc123", firstName: "Rizzrak" },
        { externalId: "bca321", firstName: "Karzzir" },
    ],
    ["externalId"],
)
/** executes
 *  INSERT INTO user
 *  VALUES
 *      (externalId = abc123, firstName = Rizzrak),
 *      (externalId = cba321, firstName = Karzzir),
 *  ON CONFLICT (externalId) DO UPDATE firstName = EXCLUDED.firstName
 **/
```

* `delete` - Deletes entities by entity id, ids or given conditions:

```typescript
await manager.delete(User, 1)
await manager.delete(User, [1, 2, 3])
await manager.delete(User, { firstName: "Timber" })
```

* `exists` - Check whether any entity exists that matches `FindOptions`.

```typescript
const exists = await manager.exists(User, {
    where: {
        firstName: "Timber",
    },
})
```

* `existsBy` - Checks whether any entity exists that matches `FindOptionsWhere`.

```typescript
const exists = await manager.existsBy(User, { firstName: "Timber" })
```

* `count` - Counts entities that match `FindOptions`. Useful for pagination.

```typescript
const count = await manager.count(User, {
    where: {
        firstName: "Timber",
    },
})
```

* `countBy` - Counts entities that match `FindOptionsWhere`. Useful for pagination.

```typescript
const count = await manager.countBy(User, { firstName: "Timber" })
```

* `find` - Finds entities that match given `FindOptions`.

```typescript
const timbers = await manager.find(User, {
    where: {
        firstName: "Timber",
    },
})
```

* `findBy` - Finds entities that match given `FindWhereOptions`.

```typescript
const timbers = await manager.findBy(User, {
    firstName: "Timber",
})
```

* `findOne` - Finds the first entity that matches given `FindOptions`.

```typescript
const timber = await manager.findOne(User, {
    where: {
        firstName: "Timber",
    },
})
```

* `findOneBy` - Finds the first entity that matches given `FindOptionsWhere`.

```typescript
const timber = await manager.findOneBy(User, { firstName: "Timber" })
```

* `findOneOrFail` - Finds the first entity that matches some id or find options.
    Rejects the returned promise if nothing matches.

```typescript
const timber = await manager.findOneOrFail(User, {
    where: {
        firstName: "Timber",
    },
})
```

* `findOneByOrFail` - Finds the first entity that matches given `FindOptions`.
    Rejects the returned promise if nothing matches.

```typescript
const timber = await manager.findOneByOrFail(User, { firstName: "Timber" })
```

You can read about everything else here [TypeORM site](https://typeorm.io/data-source-api)

## Work with Tree

* `getTreeRepository` - Gets `TreeRepository` to perform operations on a specific entity.
You can also specify a table name and if repository for given table is found it will be returned.
Learn more about [Repositories](https://typeorm.io/working-with-repository#).

```typescript
const categoryRepository = manager.getTreeRepository(Category)
```

About working with tree entities (Branch) you can read here [TypeORM site (tree-entities)](https://typeorm.io/tree-entities#working-with-tree-entities)

## Column types for `sqlite` / `expo`

`int`, `int2`, `int8`, `integer`, `tinyint`, `smallint`, `mediumint`, `bigint`, `decimal`,
`numeric`, `float`, `double`, `real`, `double precision`, `datetime`, `varying character`,
`character`, `native character`, `varchar`, `nchar`, `nvarchar2`, `unsigned big int`, `boolean`,
`blob`, `text`, `clob`, `date`
