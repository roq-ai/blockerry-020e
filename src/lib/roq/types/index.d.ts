/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model installation
 *
 */
export type installation = $Result.DefaultSelection<Prisma.$installationPayload>;
/**
 * Model organization
 *
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>;
/**
 * Model server
 *
 */
export type server = $Result.DefaultSelection<Prisma.$serverPayload>;
/**
 * Model tool
 *
 */
export type tool = $Result.DefaultSelection<Prisma.$toolPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Installations
 * const installations = await prisma.installation.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Installations
   * const installations = await prisma.installation.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.installation`: Exposes CRUD operations for the **installation** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Installations
   * const installations = await prisma.installation.findMany()
   * ```
   */
  get installation(): Prisma.installationDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.server`: Exposes CRUD operations for the **server** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Servers
   * const servers = await prisma.server.findMany()
   * ```
   */
  get server(): Prisma.serverDelegate<ExtArgs>;

  /**
   * `prisma.tool`: Exposes CRUD operations for the **tool** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tools
   * const tools = await prisma.tool.findMany()
   * ```
   */
  get tool(): Prisma.toolDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    installation: 'installation';
    organization: 'organization';
    server: 'server';
    tool: 'tool';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'installation' | 'organization' | 'server' | 'tool' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      installation: {
        payload: Prisma.$installationPayload<ExtArgs>;
        fields: Prisma.installationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.installationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$installationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.installationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$installationPayload>;
          };
          findFirst: {
            args: Prisma.installationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$installationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.installationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$installationPayload>;
          };
          findMany: {
            args: Prisma.installationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$installationPayload>[];
          };
          create: {
            args: Prisma.installationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$installationPayload>;
          };
          createMany: {
            args: Prisma.installationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.installationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$installationPayload>;
          };
          update: {
            args: Prisma.installationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$installationPayload>;
          };
          deleteMany: {
            args: Prisma.installationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.installationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.installationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$installationPayload>;
          };
          aggregate: {
            args: Prisma.InstallationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInstallation>;
          };
          groupBy: {
            args: Prisma.installationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InstallationGroupByOutputType>[];
          };
          count: {
            args: Prisma.installationCountArgs<ExtArgs>;
            result: $Utils.Optional<InstallationCountAggregateOutputType> | number;
          };
        };
      };
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>;
        fields: Prisma.organizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[];
          };
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number;
          };
        };
      };
      server: {
        payload: Prisma.$serverPayload<ExtArgs>;
        fields: Prisma.serverFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.serverFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$serverPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.serverFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$serverPayload>;
          };
          findFirst: {
            args: Prisma.serverFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$serverPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.serverFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$serverPayload>;
          };
          findMany: {
            args: Prisma.serverFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$serverPayload>[];
          };
          create: {
            args: Prisma.serverCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$serverPayload>;
          };
          createMany: {
            args: Prisma.serverCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.serverDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$serverPayload>;
          };
          update: {
            args: Prisma.serverUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$serverPayload>;
          };
          deleteMany: {
            args: Prisma.serverDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.serverUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.serverUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$serverPayload>;
          };
          aggregate: {
            args: Prisma.ServerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateServer>;
          };
          groupBy: {
            args: Prisma.serverGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ServerGroupByOutputType>[];
          };
          count: {
            args: Prisma.serverCountArgs<ExtArgs>;
            result: $Utils.Optional<ServerCountAggregateOutputType> | number;
          };
        };
      };
      tool: {
        payload: Prisma.$toolPayload<ExtArgs>;
        fields: Prisma.toolFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.toolFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.toolFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          findFirst: {
            args: Prisma.toolFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.toolFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          findMany: {
            args: Prisma.toolFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>[];
          };
          create: {
            args: Prisma.toolCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          createMany: {
            args: Prisma.toolCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.toolDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          update: {
            args: Prisma.toolUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          deleteMany: {
            args: Prisma.toolDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.toolUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.toolUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$toolPayload>;
          };
          aggregate: {
            args: Prisma.ToolAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTool>;
          };
          groupBy: {
            args: Prisma.toolGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ToolGroupByOutputType>[];
          };
          count: {
            args: Prisma.toolCountArgs<ExtArgs>;
            result: $Utils.Optional<ToolCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    installation: number;
    user: number;
  };

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installation?: boolean | OrganizationCountOutputTypeCountInstallationArgs;
    user?: boolean | OrganizationCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountInstallationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: installationWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: userWhereInput;
  };

  /**
   * Count Type ServerCountOutputType
   */

  export type ServerCountOutputType = {
    installation: number;
  };

  export type ServerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installation?: boolean | ServerCountOutputTypeCountInstallationArgs;
  };

  // Custom InputTypes

  /**
   * ServerCountOutputType without action
   */
  export type ServerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServerCountOutputType
     */
    select?: ServerCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ServerCountOutputType without action
   */
  export type ServerCountOutputTypeCountInstallationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: installationWhereInput;
  };

  /**
   * Count Type ToolCountOutputType
   */

  export type ToolCountOutputType = {
    installation: number;
  };

  export type ToolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installation?: boolean | ToolCountOutputTypeCountInstallationArgs;
  };

  // Custom InputTypes

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolCountOutputType
     */
    select?: ToolCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ToolCountOutputType without action
   */
  export type ToolCountOutputTypeCountInstallationArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: installationWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model installation
   */

  export type AggregateInstallation = {
    _count: InstallationCountAggregateOutputType | null;
    _min: InstallationMinAggregateOutputType | null;
    _max: InstallationMaxAggregateOutputType | null;
  };

  export type InstallationMinAggregateOutputType = {
    id: string | null;
    organization_id: string | null;
    server_id: string | null;
    coin_name: string | null;
    coin_ticker: string | null;
    logo: string | null;
    genesis_file: string | null;
    status: string | null;
    tool_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InstallationMaxAggregateOutputType = {
    id: string | null;
    organization_id: string | null;
    server_id: string | null;
    coin_name: string | null;
    coin_ticker: string | null;
    logo: string | null;
    genesis_file: string | null;
    status: string | null;
    tool_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InstallationCountAggregateOutputType = {
    id: number;
    organization_id: number;
    server_id: number;
    coin_name: number;
    coin_ticker: number;
    logo: number;
    genesis_file: number;
    status: number;
    tool_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type InstallationMinAggregateInputType = {
    id?: true;
    organization_id?: true;
    server_id?: true;
    coin_name?: true;
    coin_ticker?: true;
    logo?: true;
    genesis_file?: true;
    status?: true;
    tool_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InstallationMaxAggregateInputType = {
    id?: true;
    organization_id?: true;
    server_id?: true;
    coin_name?: true;
    coin_ticker?: true;
    logo?: true;
    genesis_file?: true;
    status?: true;
    tool_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InstallationCountAggregateInputType = {
    id?: true;
    organization_id?: true;
    server_id?: true;
    coin_name?: true;
    coin_ticker?: true;
    logo?: true;
    genesis_file?: true;
    status?: true;
    tool_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type InstallationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which installation to aggregate.
     */
    where?: installationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of installations to fetch.
     */
    orderBy?: installationOrderByWithRelationInput | installationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: installationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` installations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` installations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned installations
     **/
    _count?: true | InstallationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InstallationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InstallationMaxAggregateInputType;
  };

  export type GetInstallationAggregateType<T extends InstallationAggregateArgs> = {
    [P in keyof T & keyof AggregateInstallation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstallation[P]>
      : GetScalarType<T[P], AggregateInstallation[P]>;
  };

  export type installationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: installationWhereInput;
    orderBy?: installationOrderByWithAggregationInput | installationOrderByWithAggregationInput[];
    by: InstallationScalarFieldEnum[] | InstallationScalarFieldEnum;
    having?: installationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InstallationCountAggregateInputType | true;
    _min?: InstallationMinAggregateInputType;
    _max?: InstallationMaxAggregateInputType;
  };

  export type InstallationGroupByOutputType = {
    id: string;
    organization_id: string;
    server_id: string;
    coin_name: string;
    coin_ticker: string;
    logo: string;
    genesis_file: string;
    status: string;
    tool_id: string;
    created_at: Date;
    updated_at: Date;
    _count: InstallationCountAggregateOutputType | null;
    _min: InstallationMinAggregateOutputType | null;
    _max: InstallationMaxAggregateOutputType | null;
  };

  type GetInstallationGroupByPayload<T extends installationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstallationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof InstallationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], InstallationGroupByOutputType[P]>
          : GetScalarType<T[P], InstallationGroupByOutputType[P]>;
      }
    >
  >;

  export type installationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        organization_id?: boolean;
        server_id?: boolean;
        coin_name?: boolean;
        coin_ticker?: boolean;
        logo?: boolean;
        genesis_file?: boolean;
        status?: boolean;
        tool_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        organization?: boolean | organizationDefaultArgs<ExtArgs>;
        server?: boolean | serverDefaultArgs<ExtArgs>;
        tool?: boolean | toolDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['installation']
    >;

  export type installationSelectScalar = {
    id?: boolean;
    organization_id?: boolean;
    server_id?: boolean;
    coin_name?: boolean;
    coin_ticker?: boolean;
    logo?: boolean;
    genesis_file?: boolean;
    status?: boolean;
    tool_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type installationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | organizationDefaultArgs<ExtArgs>;
    server?: boolean | serverDefaultArgs<ExtArgs>;
    tool?: boolean | toolDefaultArgs<ExtArgs>;
  };

  export type $installationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'installation';
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs>;
      server: Prisma.$serverPayload<ExtArgs>;
      tool: Prisma.$toolPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        organization_id: string;
        server_id: string;
        coin_name: string;
        coin_ticker: string;
        logo: string;
        genesis_file: string;
        status: string;
        tool_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['installation']
    >;
    composites: {};
  };

  type installationGetPayload<S extends boolean | null | undefined | installationDefaultArgs> = $Result.GetResult<
    Prisma.$installationPayload,
    S
  >;

  type installationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    installationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: InstallationCountAggregateInputType | true;
  };

  export interface installationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['installation']; meta: { name: 'installation' } };
    /**
     * Find zero or one Installation that matches the filter.
     * @param {installationFindUniqueArgs} args - Arguments to find a Installation
     * @example
     * // Get one Installation
     * const installation = await prisma.installation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends installationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, installationFindUniqueArgs<ExtArgs>>,
    ): Prisma__installationClient<
      $Result.GetResult<Prisma.$installationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Installation that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {installationFindUniqueOrThrowArgs} args - Arguments to find a Installation
     * @example
     * // Get one Installation
     * const installation = await prisma.installation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends installationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, installationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__installationClient<
      $Result.GetResult<Prisma.$installationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Installation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {installationFindFirstArgs} args - Arguments to find a Installation
     * @example
     * // Get one Installation
     * const installation = await prisma.installation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends installationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, installationFindFirstArgs<ExtArgs>>,
    ): Prisma__installationClient<
      $Result.GetResult<Prisma.$installationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Installation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {installationFindFirstOrThrowArgs} args - Arguments to find a Installation
     * @example
     * // Get one Installation
     * const installation = await prisma.installation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends installationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, installationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__installationClient<
      $Result.GetResult<Prisma.$installationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Installations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {installationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Installations
     * const installations = await prisma.installation.findMany()
     *
     * // Get first 10 Installations
     * const installations = await prisma.installation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const installationWithIdOnly = await prisma.installation.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends installationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, installationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$installationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Installation.
     * @param {installationCreateArgs} args - Arguments to create a Installation.
     * @example
     * // Create one Installation
     * const Installation = await prisma.installation.create({
     *   data: {
     *     // ... data to create a Installation
     *   }
     * })
     *
     **/
    create<T extends installationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, installationCreateArgs<ExtArgs>>,
    ): Prisma__installationClient<$Result.GetResult<Prisma.$installationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Installations.
     *     @param {installationCreateManyArgs} args - Arguments to create many Installations.
     *     @example
     *     // Create many Installations
     *     const installation = await prisma.installation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends installationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, installationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Installation.
     * @param {installationDeleteArgs} args - Arguments to delete one Installation.
     * @example
     * // Delete one Installation
     * const Installation = await prisma.installation.delete({
     *   where: {
     *     // ... filter to delete one Installation
     *   }
     * })
     *
     **/
    delete<T extends installationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, installationDeleteArgs<ExtArgs>>,
    ): Prisma__installationClient<$Result.GetResult<Prisma.$installationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Installation.
     * @param {installationUpdateArgs} args - Arguments to update one Installation.
     * @example
     * // Update one Installation
     * const installation = await prisma.installation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends installationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, installationUpdateArgs<ExtArgs>>,
    ): Prisma__installationClient<$Result.GetResult<Prisma.$installationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Installations.
     * @param {installationDeleteManyArgs} args - Arguments to filter Installations to delete.
     * @example
     * // Delete a few Installations
     * const { count } = await prisma.installation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends installationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, installationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Installations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {installationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Installations
     * const installation = await prisma.installation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends installationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, installationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Installation.
     * @param {installationUpsertArgs} args - Arguments to update or create a Installation.
     * @example
     * // Update or create a Installation
     * const installation = await prisma.installation.upsert({
     *   create: {
     *     // ... data to create a Installation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Installation we want to update
     *   }
     * })
     **/
    upsert<T extends installationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, installationUpsertArgs<ExtArgs>>,
    ): Prisma__installationClient<$Result.GetResult<Prisma.$installationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Installations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {installationCountArgs} args - Arguments to filter Installations to count.
     * @example
     * // Count the number of Installations
     * const count = await prisma.installation.count({
     *   where: {
     *     // ... the filter for the Installations we want to count
     *   }
     * })
     **/
    count<T extends installationCountArgs>(
      args?: Subset<T, installationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstallationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Installation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends InstallationAggregateArgs>(
      args: Subset<T, InstallationAggregateArgs>,
    ): Prisma.PrismaPromise<GetInstallationAggregateType<T>>;

    /**
     * Group by Installation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {installationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends installationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: installationGroupByArgs['orderBy'] }
        : { orderBy?: installationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, installationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetInstallationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the installation model
     */
    readonly fields: installationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for installation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__installationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends organizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, organizationDefaultArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    server<T extends serverDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, serverDefaultArgs<ExtArgs>>,
    ): Prisma__serverClient<
      $Result.GetResult<Prisma.$serverPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    tool<T extends toolDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, toolDefaultArgs<ExtArgs>>,
    ): Prisma__toolClient<
      $Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the installation model
   */
  interface installationFieldRefs {
    readonly id: FieldRef<'installation', 'String'>;
    readonly organization_id: FieldRef<'installation', 'String'>;
    readonly server_id: FieldRef<'installation', 'String'>;
    readonly coin_name: FieldRef<'installation', 'String'>;
    readonly coin_ticker: FieldRef<'installation', 'String'>;
    readonly logo: FieldRef<'installation', 'String'>;
    readonly genesis_file: FieldRef<'installation', 'String'>;
    readonly status: FieldRef<'installation', 'String'>;
    readonly tool_id: FieldRef<'installation', 'String'>;
    readonly created_at: FieldRef<'installation', 'DateTime'>;
    readonly updated_at: FieldRef<'installation', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * installation findUnique
   */
  export type installationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the installation
     */
    select?: installationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: installationInclude<ExtArgs> | null;
    /**
     * Filter, which installation to fetch.
     */
    where: installationWhereUniqueInput;
  };

  /**
   * installation findUniqueOrThrow
   */
  export type installationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the installation
     */
    select?: installationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: installationInclude<ExtArgs> | null;
    /**
     * Filter, which installation to fetch.
     */
    where: installationWhereUniqueInput;
  };

  /**
   * installation findFirst
   */
  export type installationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the installation
     */
    select?: installationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: installationInclude<ExtArgs> | null;
    /**
     * Filter, which installation to fetch.
     */
    where?: installationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of installations to fetch.
     */
    orderBy?: installationOrderByWithRelationInput | installationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for installations.
     */
    cursor?: installationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` installations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` installations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of installations.
     */
    distinct?: InstallationScalarFieldEnum | InstallationScalarFieldEnum[];
  };

  /**
   * installation findFirstOrThrow
   */
  export type installationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the installation
     */
    select?: installationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: installationInclude<ExtArgs> | null;
    /**
     * Filter, which installation to fetch.
     */
    where?: installationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of installations to fetch.
     */
    orderBy?: installationOrderByWithRelationInput | installationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for installations.
     */
    cursor?: installationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` installations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` installations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of installations.
     */
    distinct?: InstallationScalarFieldEnum | InstallationScalarFieldEnum[];
  };

  /**
   * installation findMany
   */
  export type installationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the installation
     */
    select?: installationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: installationInclude<ExtArgs> | null;
    /**
     * Filter, which installations to fetch.
     */
    where?: installationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of installations to fetch.
     */
    orderBy?: installationOrderByWithRelationInput | installationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing installations.
     */
    cursor?: installationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` installations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` installations.
     */
    skip?: number;
    distinct?: InstallationScalarFieldEnum | InstallationScalarFieldEnum[];
  };

  /**
   * installation create
   */
  export type installationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the installation
     */
    select?: installationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: installationInclude<ExtArgs> | null;
    /**
     * The data needed to create a installation.
     */
    data: XOR<installationCreateInput, installationUncheckedCreateInput>;
  };

  /**
   * installation createMany
   */
  export type installationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many installations.
     */
    data: installationCreateManyInput | installationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * installation update
   */
  export type installationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the installation
     */
    select?: installationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: installationInclude<ExtArgs> | null;
    /**
     * The data needed to update a installation.
     */
    data: XOR<installationUpdateInput, installationUncheckedUpdateInput>;
    /**
     * Choose, which installation to update.
     */
    where: installationWhereUniqueInput;
  };

  /**
   * installation updateMany
   */
  export type installationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update installations.
     */
    data: XOR<installationUpdateManyMutationInput, installationUncheckedUpdateManyInput>;
    /**
     * Filter which installations to update
     */
    where?: installationWhereInput;
  };

  /**
   * installation upsert
   */
  export type installationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the installation
     */
    select?: installationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: installationInclude<ExtArgs> | null;
    /**
     * The filter to search for the installation to update in case it exists.
     */
    where: installationWhereUniqueInput;
    /**
     * In case the installation found by the `where` argument doesn't exist, create a new installation with this data.
     */
    create: XOR<installationCreateInput, installationUncheckedCreateInput>;
    /**
     * In case the installation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<installationUpdateInput, installationUncheckedUpdateInput>;
  };

  /**
   * installation delete
   */
  export type installationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the installation
     */
    select?: installationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: installationInclude<ExtArgs> | null;
    /**
     * Filter which installation to delete.
     */
    where: installationWhereUniqueInput;
  };

  /**
   * installation deleteMany
   */
  export type installationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which installations to delete
     */
    where?: installationWhereInput;
  };

  /**
   * installation without action
   */
  export type installationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the installation
     */
    select?: installationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: installationInclude<ExtArgs> | null;
  };

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    image: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    image: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    description: number;
    image: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    description?: true;
    image?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    description?: true;
    image?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    description?: true;
    image?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: organizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    description: string | null;
    image: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrganizationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
      }
    >
  >;

  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        image?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        installation?: boolean | organization$installationArgs<ExtArgs>;
        user?: boolean | organization$userArgs<ExtArgs>;
        _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['organization']
    >;

  export type organizationSelectScalar = {
    id?: boolean;
    description?: boolean;
    image?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installation?: boolean | organization$installationArgs<ExtArgs>;
    user?: boolean | organization$userArgs<ExtArgs>;
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'organization';
    objects: {
      installation: Prisma.$installationPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        image: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<
    Prisma.$organizationPayload,
    S
  >;

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    organizationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization']; meta: { name: 'organization' } };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     **/
    create<T extends organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationCreateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     **/
    delete<T extends organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     **/
    upsert<T extends organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the organization model
     */
    readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    installation<T extends organization$installationArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$installationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$installationPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends organization$userArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<'organization', 'String'>;
    readonly description: FieldRef<'organization', 'String'>;
    readonly image: FieldRef<'organization', 'String'>;
    readonly name: FieldRef<'organization', 'String'>;
    readonly created_at: FieldRef<'organization', 'DateTime'>;
    readonly updated_at: FieldRef<'organization', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
  };

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>;
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput;
  };

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput;
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
  };

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput;
  };

  /**
   * organization.installation
   */
  export type organization$installationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the installation
     */
    select?: installationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: installationInclude<ExtArgs> | null;
    where?: installationWhereInput;
    orderBy?: installationOrderByWithRelationInput | installationOrderByWithRelationInput[];
    cursor?: installationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InstallationScalarFieldEnum | InstallationScalarFieldEnum[];
  };

  /**
   * organization.user
   */
  export type organization$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
  };

  /**
   * Model server
   */

  export type AggregateServer = {
    _count: ServerCountAggregateOutputType | null;
    _min: ServerMinAggregateOutputType | null;
    _max: ServerMaxAggregateOutputType | null;
  };

  export type ServerMinAggregateOutputType = {
    id: string | null;
    ip_adress: string | null;
    region: string | null;
    server_provider: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ServerMaxAggregateOutputType = {
    id: string | null;
    ip_adress: string | null;
    region: string | null;
    server_provider: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ServerCountAggregateOutputType = {
    id: number;
    ip_adress: number;
    region: number;
    server_provider: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ServerMinAggregateInputType = {
    id?: true;
    ip_adress?: true;
    region?: true;
    server_provider?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ServerMaxAggregateInputType = {
    id?: true;
    ip_adress?: true;
    region?: true;
    server_provider?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ServerCountAggregateInputType = {
    id?: true;
    ip_adress?: true;
    region?: true;
    server_provider?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ServerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which server to aggregate.
     */
    where?: serverWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of servers to fetch.
     */
    orderBy?: serverOrderByWithRelationInput | serverOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: serverWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` servers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` servers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned servers
     **/
    _count?: true | ServerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ServerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ServerMaxAggregateInputType;
  };

  export type GetServerAggregateType<T extends ServerAggregateArgs> = {
    [P in keyof T & keyof AggregateServer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServer[P]>
      : GetScalarType<T[P], AggregateServer[P]>;
  };

  export type serverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: serverWhereInput;
    orderBy?: serverOrderByWithAggregationInput | serverOrderByWithAggregationInput[];
    by: ServerScalarFieldEnum[] | ServerScalarFieldEnum;
    having?: serverScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServerCountAggregateInputType | true;
    _min?: ServerMinAggregateInputType;
    _max?: ServerMaxAggregateInputType;
  };

  export type ServerGroupByOutputType = {
    id: string;
    ip_adress: string;
    region: string;
    server_provider: string;
    created_at: Date;
    updated_at: Date;
    _count: ServerCountAggregateOutputType | null;
    _min: ServerMinAggregateOutputType | null;
    _max: ServerMaxAggregateOutputType | null;
  };

  type GetServerGroupByPayload<T extends serverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ServerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ServerGroupByOutputType[P]>
          : GetScalarType<T[P], ServerGroupByOutputType[P]>;
      }
    >
  >;

  export type serverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      ip_adress?: boolean;
      region?: boolean;
      server_provider?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      installation?: boolean | server$installationArgs<ExtArgs>;
      _count?: boolean | ServerCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['server']
  >;

  export type serverSelectScalar = {
    id?: boolean;
    ip_adress?: boolean;
    region?: boolean;
    server_provider?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type serverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installation?: boolean | server$installationArgs<ExtArgs>;
    _count?: boolean | ServerCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $serverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'server';
    objects: {
      installation: Prisma.$installationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        ip_adress: string;
        region: string;
        server_provider: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['server']
    >;
    composites: {};
  };

  type serverGetPayload<S extends boolean | null | undefined | serverDefaultArgs> = $Result.GetResult<
    Prisma.$serverPayload,
    S
  >;

  type serverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    serverFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ServerCountAggregateInputType | true;
  };

  export interface serverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['server']; meta: { name: 'server' } };
    /**
     * Find zero or one Server that matches the filter.
     * @param {serverFindUniqueArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends serverFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, serverFindUniqueArgs<ExtArgs>>,
    ): Prisma__serverClient<$Result.GetResult<Prisma.$serverPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Server that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {serverFindUniqueOrThrowArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends serverFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, serverFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__serverClient<$Result.GetResult<Prisma.$serverPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Server that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serverFindFirstArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends serverFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, serverFindFirstArgs<ExtArgs>>,
    ): Prisma__serverClient<$Result.GetResult<Prisma.$serverPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Server that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serverFindFirstOrThrowArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends serverFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, serverFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__serverClient<$Result.GetResult<Prisma.$serverPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Servers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serverFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servers
     * const servers = await prisma.server.findMany()
     *
     * // Get first 10 Servers
     * const servers = await prisma.server.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const serverWithIdOnly = await prisma.server.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends serverFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, serverFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$serverPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Server.
     * @param {serverCreateArgs} args - Arguments to create a Server.
     * @example
     * // Create one Server
     * const Server = await prisma.server.create({
     *   data: {
     *     // ... data to create a Server
     *   }
     * })
     *
     **/
    create<T extends serverCreateArgs<ExtArgs>>(
      args: SelectSubset<T, serverCreateArgs<ExtArgs>>,
    ): Prisma__serverClient<$Result.GetResult<Prisma.$serverPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Servers.
     *     @param {serverCreateManyArgs} args - Arguments to create many Servers.
     *     @example
     *     // Create many Servers
     *     const server = await prisma.server.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends serverCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, serverCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Server.
     * @param {serverDeleteArgs} args - Arguments to delete one Server.
     * @example
     * // Delete one Server
     * const Server = await prisma.server.delete({
     *   where: {
     *     // ... filter to delete one Server
     *   }
     * })
     *
     **/
    delete<T extends serverDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, serverDeleteArgs<ExtArgs>>,
    ): Prisma__serverClient<$Result.GetResult<Prisma.$serverPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Server.
     * @param {serverUpdateArgs} args - Arguments to update one Server.
     * @example
     * // Update one Server
     * const server = await prisma.server.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends serverUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, serverUpdateArgs<ExtArgs>>,
    ): Prisma__serverClient<$Result.GetResult<Prisma.$serverPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Servers.
     * @param {serverDeleteManyArgs} args - Arguments to filter Servers to delete.
     * @example
     * // Delete a few Servers
     * const { count } = await prisma.server.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends serverDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, serverDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servers
     * const server = await prisma.server.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends serverUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, serverUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Server.
     * @param {serverUpsertArgs} args - Arguments to update or create a Server.
     * @example
     * // Update or create a Server
     * const server = await prisma.server.upsert({
     *   create: {
     *     // ... data to create a Server
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Server we want to update
     *   }
     * })
     **/
    upsert<T extends serverUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, serverUpsertArgs<ExtArgs>>,
    ): Prisma__serverClient<$Result.GetResult<Prisma.$serverPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serverCountArgs} args - Arguments to filter Servers to count.
     * @example
     * // Count the number of Servers
     * const count = await prisma.server.count({
     *   where: {
     *     // ... the filter for the Servers we want to count
     *   }
     * })
     **/
    count<T extends serverCountArgs>(
      args?: Subset<T, serverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Server.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ServerAggregateArgs>(
      args: Subset<T, ServerAggregateArgs>,
    ): Prisma.PrismaPromise<GetServerAggregateType<T>>;

    /**
     * Group by Server.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {serverGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends serverGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: serverGroupByArgs['orderBy'] }
        : { orderBy?: serverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, serverGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetServerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the server model
     */
    readonly fields: serverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for server.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__serverClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    installation<T extends server$installationArgs<ExtArgs> = {}>(
      args?: Subset<T, server$installationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$installationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the server model
   */
  interface serverFieldRefs {
    readonly id: FieldRef<'server', 'String'>;
    readonly ip_adress: FieldRef<'server', 'String'>;
    readonly region: FieldRef<'server', 'String'>;
    readonly server_provider: FieldRef<'server', 'String'>;
    readonly created_at: FieldRef<'server', 'DateTime'>;
    readonly updated_at: FieldRef<'server', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * server findUnique
   */
  export type serverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the server
     */
    select?: serverSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serverInclude<ExtArgs> | null;
    /**
     * Filter, which server to fetch.
     */
    where: serverWhereUniqueInput;
  };

  /**
   * server findUniqueOrThrow
   */
  export type serverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the server
     */
    select?: serverSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serverInclude<ExtArgs> | null;
    /**
     * Filter, which server to fetch.
     */
    where: serverWhereUniqueInput;
  };

  /**
   * server findFirst
   */
  export type serverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the server
     */
    select?: serverSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serverInclude<ExtArgs> | null;
    /**
     * Filter, which server to fetch.
     */
    where?: serverWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of servers to fetch.
     */
    orderBy?: serverOrderByWithRelationInput | serverOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for servers.
     */
    cursor?: serverWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` servers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` servers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of servers.
     */
    distinct?: ServerScalarFieldEnum | ServerScalarFieldEnum[];
  };

  /**
   * server findFirstOrThrow
   */
  export type serverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the server
     */
    select?: serverSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serverInclude<ExtArgs> | null;
    /**
     * Filter, which server to fetch.
     */
    where?: serverWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of servers to fetch.
     */
    orderBy?: serverOrderByWithRelationInput | serverOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for servers.
     */
    cursor?: serverWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` servers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` servers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of servers.
     */
    distinct?: ServerScalarFieldEnum | ServerScalarFieldEnum[];
  };

  /**
   * server findMany
   */
  export type serverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the server
     */
    select?: serverSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serverInclude<ExtArgs> | null;
    /**
     * Filter, which servers to fetch.
     */
    where?: serverWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of servers to fetch.
     */
    orderBy?: serverOrderByWithRelationInput | serverOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing servers.
     */
    cursor?: serverWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` servers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` servers.
     */
    skip?: number;
    distinct?: ServerScalarFieldEnum | ServerScalarFieldEnum[];
  };

  /**
   * server create
   */
  export type serverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the server
     */
    select?: serverSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serverInclude<ExtArgs> | null;
    /**
     * The data needed to create a server.
     */
    data: XOR<serverCreateInput, serverUncheckedCreateInput>;
  };

  /**
   * server createMany
   */
  export type serverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many servers.
     */
    data: serverCreateManyInput | serverCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * server update
   */
  export type serverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the server
     */
    select?: serverSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serverInclude<ExtArgs> | null;
    /**
     * The data needed to update a server.
     */
    data: XOR<serverUpdateInput, serverUncheckedUpdateInput>;
    /**
     * Choose, which server to update.
     */
    where: serverWhereUniqueInput;
  };

  /**
   * server updateMany
   */
  export type serverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update servers.
     */
    data: XOR<serverUpdateManyMutationInput, serverUncheckedUpdateManyInput>;
    /**
     * Filter which servers to update
     */
    where?: serverWhereInput;
  };

  /**
   * server upsert
   */
  export type serverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the server
     */
    select?: serverSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serverInclude<ExtArgs> | null;
    /**
     * The filter to search for the server to update in case it exists.
     */
    where: serverWhereUniqueInput;
    /**
     * In case the server found by the `where` argument doesn't exist, create a new server with this data.
     */
    create: XOR<serverCreateInput, serverUncheckedCreateInput>;
    /**
     * In case the server was found with the provided `where` argument, update it with this data.
     */
    update: XOR<serverUpdateInput, serverUncheckedUpdateInput>;
  };

  /**
   * server delete
   */
  export type serverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the server
     */
    select?: serverSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serverInclude<ExtArgs> | null;
    /**
     * Filter which server to delete.
     */
    where: serverWhereUniqueInput;
  };

  /**
   * server deleteMany
   */
  export type serverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servers to delete
     */
    where?: serverWhereInput;
  };

  /**
   * server.installation
   */
  export type server$installationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the installation
     */
    select?: installationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: installationInclude<ExtArgs> | null;
    where?: installationWhereInput;
    orderBy?: installationOrderByWithRelationInput | installationOrderByWithRelationInput[];
    cursor?: installationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InstallationScalarFieldEnum | InstallationScalarFieldEnum[];
  };

  /**
   * server without action
   */
  export type serverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the server
     */
    select?: serverSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: serverInclude<ExtArgs> | null;
  };

  /**
   * Model tool
   */

  export type AggregateTool = {
    _count: ToolCountAggregateOutputType | null;
    _avg: ToolAvgAggregateOutputType | null;
    _sum: ToolSumAggregateOutputType | null;
    _min: ToolMinAggregateOutputType | null;
    _max: ToolMaxAggregateOutputType | null;
  };

  export type ToolAvgAggregateOutputType = {
    price: number | null;
  };

  export type ToolSumAggregateOutputType = {
    price: number | null;
  };

  export type ToolMinAggregateOutputType = {
    id: string | null;
    tool_type: string | null;
    tool_name: string | null;
    price: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ToolMaxAggregateOutputType = {
    id: string | null;
    tool_type: string | null;
    tool_name: string | null;
    price: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ToolCountAggregateOutputType = {
    id: number;
    tool_type: number;
    tool_name: number;
    price: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ToolAvgAggregateInputType = {
    price?: true;
  };

  export type ToolSumAggregateInputType = {
    price?: true;
  };

  export type ToolMinAggregateInputType = {
    id?: true;
    tool_type?: true;
    tool_name?: true;
    price?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ToolMaxAggregateInputType = {
    id?: true;
    tool_type?: true;
    tool_name?: true;
    price?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ToolCountAggregateInputType = {
    id?: true;
    tool_type?: true;
    tool_name?: true;
    price?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ToolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tool to aggregate.
     */
    where?: toolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tools to fetch.
     */
    orderBy?: toolOrderByWithRelationInput | toolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: toolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tools
     **/
    _count?: true | ToolCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ToolAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ToolSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ToolMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ToolMaxAggregateInputType;
  };

  export type GetToolAggregateType<T extends ToolAggregateArgs> = {
    [P in keyof T & keyof AggregateTool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTool[P]>
      : GetScalarType<T[P], AggregateTool[P]>;
  };

  export type toolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: toolWhereInput;
    orderBy?: toolOrderByWithAggregationInput | toolOrderByWithAggregationInput[];
    by: ToolScalarFieldEnum[] | ToolScalarFieldEnum;
    having?: toolScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ToolCountAggregateInputType | true;
    _avg?: ToolAvgAggregateInputType;
    _sum?: ToolSumAggregateInputType;
    _min?: ToolMinAggregateInputType;
    _max?: ToolMaxAggregateInputType;
  };

  export type ToolGroupByOutputType = {
    id: string;
    tool_type: string;
    tool_name: string;
    price: number;
    created_at: Date;
    updated_at: Date;
    _count: ToolCountAggregateOutputType | null;
    _avg: ToolAvgAggregateOutputType | null;
    _sum: ToolSumAggregateOutputType | null;
    _min: ToolMinAggregateOutputType | null;
    _max: ToolMaxAggregateOutputType | null;
  };

  type GetToolGroupByPayload<T extends toolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToolGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ToolGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ToolGroupByOutputType[P]>
          : GetScalarType<T[P], ToolGroupByOutputType[P]>;
      }
    >
  >;

  export type toolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      tool_type?: boolean;
      tool_name?: boolean;
      price?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      installation?: boolean | tool$installationArgs<ExtArgs>;
      _count?: boolean | ToolCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['tool']
  >;

  export type toolSelectScalar = {
    id?: boolean;
    tool_type?: boolean;
    tool_name?: boolean;
    price?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type toolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installation?: boolean | tool$installationArgs<ExtArgs>;
    _count?: boolean | ToolCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $toolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'tool';
    objects: {
      installation: Prisma.$installationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        tool_type: string;
        tool_name: string;
        price: number;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['tool']
    >;
    composites: {};
  };

  type toolGetPayload<S extends boolean | null | undefined | toolDefaultArgs> = $Result.GetResult<
    Prisma.$toolPayload,
    S
  >;

  type toolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    toolFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ToolCountAggregateInputType | true;
  };

  export interface toolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tool']; meta: { name: 'tool' } };
    /**
     * Find zero or one Tool that matches the filter.
     * @param {toolFindUniqueArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends toolFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, toolFindUniqueArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Tool that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {toolFindUniqueOrThrowArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends toolFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, toolFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Tool that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolFindFirstArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends toolFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, toolFindFirstArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Tool that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolFindFirstOrThrowArgs} args - Arguments to find a Tool
     * @example
     * // Get one Tool
     * const tool = await prisma.tool.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends toolFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, toolFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Tools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tools
     * const tools = await prisma.tool.findMany()
     *
     * // Get first 10 Tools
     * const tools = await prisma.tool.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const toolWithIdOnly = await prisma.tool.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends toolFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, toolFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Tool.
     * @param {toolCreateArgs} args - Arguments to create a Tool.
     * @example
     * // Create one Tool
     * const Tool = await prisma.tool.create({
     *   data: {
     *     // ... data to create a Tool
     *   }
     * })
     *
     **/
    create<T extends toolCreateArgs<ExtArgs>>(
      args: SelectSubset<T, toolCreateArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Tools.
     *     @param {toolCreateManyArgs} args - Arguments to create many Tools.
     *     @example
     *     // Create many Tools
     *     const tool = await prisma.tool.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends toolCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, toolCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Tool.
     * @param {toolDeleteArgs} args - Arguments to delete one Tool.
     * @example
     * // Delete one Tool
     * const Tool = await prisma.tool.delete({
     *   where: {
     *     // ... filter to delete one Tool
     *   }
     * })
     *
     **/
    delete<T extends toolDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, toolDeleteArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Tool.
     * @param {toolUpdateArgs} args - Arguments to update one Tool.
     * @example
     * // Update one Tool
     * const tool = await prisma.tool.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends toolUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, toolUpdateArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Tools.
     * @param {toolDeleteManyArgs} args - Arguments to filter Tools to delete.
     * @example
     * // Delete a few Tools
     * const { count } = await prisma.tool.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends toolDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, toolDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tools
     * const tool = await prisma.tool.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends toolUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, toolUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Tool.
     * @param {toolUpsertArgs} args - Arguments to update or create a Tool.
     * @example
     * // Update or create a Tool
     * const tool = await prisma.tool.upsert({
     *   create: {
     *     // ... data to create a Tool
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tool we want to update
     *   }
     * })
     **/
    upsert<T extends toolUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, toolUpsertArgs<ExtArgs>>,
    ): Prisma__toolClient<$Result.GetResult<Prisma.$toolPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Tools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolCountArgs} args - Arguments to filter Tools to count.
     * @example
     * // Count the number of Tools
     * const count = await prisma.tool.count({
     *   where: {
     *     // ... the filter for the Tools we want to count
     *   }
     * })
     **/
    count<T extends toolCountArgs>(
      args?: Subset<T, toolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToolCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Tool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ToolAggregateArgs>(
      args: Subset<T, ToolAggregateArgs>,
    ): Prisma.PrismaPromise<GetToolAggregateType<T>>;

    /**
     * Group by Tool.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {toolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends toolGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: toolGroupByArgs['orderBy'] }
        : { orderBy?: toolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, toolGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetToolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the tool model
     */
    readonly fields: toolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tool.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__toolClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    installation<T extends tool$installationArgs<ExtArgs> = {}>(
      args?: Subset<T, tool$installationArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$installationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the tool model
   */
  interface toolFieldRefs {
    readonly id: FieldRef<'tool', 'String'>;
    readonly tool_type: FieldRef<'tool', 'String'>;
    readonly tool_name: FieldRef<'tool', 'String'>;
    readonly price: FieldRef<'tool', 'Float'>;
    readonly created_at: FieldRef<'tool', 'DateTime'>;
    readonly updated_at: FieldRef<'tool', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * tool findUnique
   */
  export type toolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter, which tool to fetch.
     */
    where: toolWhereUniqueInput;
  };

  /**
   * tool findUniqueOrThrow
   */
  export type toolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter, which tool to fetch.
     */
    where: toolWhereUniqueInput;
  };

  /**
   * tool findFirst
   */
  export type toolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter, which tool to fetch.
     */
    where?: toolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tools to fetch.
     */
    orderBy?: toolOrderByWithRelationInput | toolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tools.
     */
    cursor?: toolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tools.
     */
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[];
  };

  /**
   * tool findFirstOrThrow
   */
  export type toolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter, which tool to fetch.
     */
    where?: toolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tools to fetch.
     */
    orderBy?: toolOrderByWithRelationInput | toolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tools.
     */
    cursor?: toolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tools.
     */
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[];
  };

  /**
   * tool findMany
   */
  export type toolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter, which tools to fetch.
     */
    where?: toolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tools to fetch.
     */
    orderBy?: toolOrderByWithRelationInput | toolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tools.
     */
    cursor?: toolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tools.
     */
    skip?: number;
    distinct?: ToolScalarFieldEnum | ToolScalarFieldEnum[];
  };

  /**
   * tool create
   */
  export type toolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * The data needed to create a tool.
     */
    data: XOR<toolCreateInput, toolUncheckedCreateInput>;
  };

  /**
   * tool createMany
   */
  export type toolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tools.
     */
    data: toolCreateManyInput | toolCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * tool update
   */
  export type toolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * The data needed to update a tool.
     */
    data: XOR<toolUpdateInput, toolUncheckedUpdateInput>;
    /**
     * Choose, which tool to update.
     */
    where: toolWhereUniqueInput;
  };

  /**
   * tool updateMany
   */
  export type toolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tools.
     */
    data: XOR<toolUpdateManyMutationInput, toolUncheckedUpdateManyInput>;
    /**
     * Filter which tools to update
     */
    where?: toolWhereInput;
  };

  /**
   * tool upsert
   */
  export type toolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * The filter to search for the tool to update in case it exists.
     */
    where: toolWhereUniqueInput;
    /**
     * In case the tool found by the `where` argument doesn't exist, create a new tool with this data.
     */
    create: XOR<toolCreateInput, toolUncheckedCreateInput>;
    /**
     * In case the tool was found with the provided `where` argument, update it with this data.
     */
    update: XOR<toolUpdateInput, toolUncheckedUpdateInput>;
  };

  /**
   * tool delete
   */
  export type toolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
    /**
     * Filter which tool to delete.
     */
    where: toolWhereUniqueInput;
  };

  /**
   * tool deleteMany
   */
  export type toolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tools to delete
     */
    where?: toolWhereInput;
  };

  /**
   * tool.installation
   */
  export type tool$installationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the installation
     */
    select?: installationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: installationInclude<ExtArgs> | null;
    where?: installationWhereInput;
    orderBy?: installationOrderByWithRelationInput | installationOrderByWithRelationInput[];
    cursor?: installationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InstallationScalarFieldEnum | InstallationScalarFieldEnum[];
  };

  /**
   * tool without action
   */
  export type toolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tool
     */
    select?: toolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: toolInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    organization_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    organization_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    organization_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    organization_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    organization_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    organization_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    organization_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      organization_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      organization?: boolean | user$organizationArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    organization_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | user$organizationArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      organization: Prisma.$organizationPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        organization_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    organization<T extends user$organizationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$organizationArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly organization_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.organization
   */
  export type user$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    where?: organizationWhereInput;
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const InstallationScalarFieldEnum: {
    id: 'id';
    organization_id: 'organization_id';
    server_id: 'server_id';
    coin_name: 'coin_name';
    coin_ticker: 'coin_ticker';
    logo: 'logo';
    genesis_file: 'genesis_file';
    status: 'status';
    tool_id: 'tool_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type InstallationScalarFieldEnum =
    (typeof InstallationScalarFieldEnum)[keyof typeof InstallationScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    description: 'description';
    image: 'image';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const ServerScalarFieldEnum: {
    id: 'id';
    ip_adress: 'ip_adress';
    region: 'region';
    server_provider: 'server_provider';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ServerScalarFieldEnum = (typeof ServerScalarFieldEnum)[keyof typeof ServerScalarFieldEnum];

  export const ToolScalarFieldEnum: {
    id: 'id';
    tool_type: 'tool_type';
    tool_name: 'tool_name';
    price: 'price';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ToolScalarFieldEnum = (typeof ToolScalarFieldEnum)[keyof typeof ToolScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    organization_id: 'organization_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type installationWhereInput = {
    AND?: installationWhereInput | installationWhereInput[];
    OR?: installationWhereInput[];
    NOT?: installationWhereInput | installationWhereInput[];
    id?: UuidFilter<'installation'> | string;
    organization_id?: UuidFilter<'installation'> | string;
    server_id?: UuidFilter<'installation'> | string;
    coin_name?: StringFilter<'installation'> | string;
    coin_ticker?: StringFilter<'installation'> | string;
    logo?: StringFilter<'installation'> | string;
    genesis_file?: StringFilter<'installation'> | string;
    status?: StringFilter<'installation'> | string;
    tool_id?: UuidFilter<'installation'> | string;
    created_at?: DateTimeFilter<'installation'> | Date | string;
    updated_at?: DateTimeFilter<'installation'> | Date | string;
    organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
    server?: XOR<ServerRelationFilter, serverWhereInput>;
    tool?: XOR<ToolRelationFilter, toolWhereInput>;
  };

  export type installationOrderByWithRelationInput = {
    id?: SortOrder;
    organization_id?: SortOrder;
    server_id?: SortOrder;
    coin_name?: SortOrder;
    coin_ticker?: SortOrder;
    logo?: SortOrder;
    genesis_file?: SortOrder;
    status?: SortOrder;
    tool_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    organization?: organizationOrderByWithRelationInput;
    server?: serverOrderByWithRelationInput;
    tool?: toolOrderByWithRelationInput;
  };

  export type installationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: installationWhereInput | installationWhereInput[];
      OR?: installationWhereInput[];
      NOT?: installationWhereInput | installationWhereInput[];
      organization_id?: UuidFilter<'installation'> | string;
      server_id?: UuidFilter<'installation'> | string;
      coin_name?: StringFilter<'installation'> | string;
      coin_ticker?: StringFilter<'installation'> | string;
      logo?: StringFilter<'installation'> | string;
      genesis_file?: StringFilter<'installation'> | string;
      status?: StringFilter<'installation'> | string;
      tool_id?: UuidFilter<'installation'> | string;
      created_at?: DateTimeFilter<'installation'> | Date | string;
      updated_at?: DateTimeFilter<'installation'> | Date | string;
      organization?: XOR<OrganizationRelationFilter, organizationWhereInput>;
      server?: XOR<ServerRelationFilter, serverWhereInput>;
      tool?: XOR<ToolRelationFilter, toolWhereInput>;
    },
    'id'
  >;

  export type installationOrderByWithAggregationInput = {
    id?: SortOrder;
    organization_id?: SortOrder;
    server_id?: SortOrder;
    coin_name?: SortOrder;
    coin_ticker?: SortOrder;
    logo?: SortOrder;
    genesis_file?: SortOrder;
    status?: SortOrder;
    tool_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: installationCountOrderByAggregateInput;
    _max?: installationMaxOrderByAggregateInput;
    _min?: installationMinOrderByAggregateInput;
  };

  export type installationScalarWhereWithAggregatesInput = {
    AND?: installationScalarWhereWithAggregatesInput | installationScalarWhereWithAggregatesInput[];
    OR?: installationScalarWhereWithAggregatesInput[];
    NOT?: installationScalarWhereWithAggregatesInput | installationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'installation'> | string;
    organization_id?: UuidWithAggregatesFilter<'installation'> | string;
    server_id?: UuidWithAggregatesFilter<'installation'> | string;
    coin_name?: StringWithAggregatesFilter<'installation'> | string;
    coin_ticker?: StringWithAggregatesFilter<'installation'> | string;
    logo?: StringWithAggregatesFilter<'installation'> | string;
    genesis_file?: StringWithAggregatesFilter<'installation'> | string;
    status?: StringWithAggregatesFilter<'installation'> | string;
    tool_id?: UuidWithAggregatesFilter<'installation'> | string;
    created_at?: DateTimeWithAggregatesFilter<'installation'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'installation'> | Date | string;
  };

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[];
    OR?: organizationWhereInput[];
    NOT?: organizationWhereInput | organizationWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    image?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    installation?: InstallationListRelationFilter;
    user?: UserListRelationFilter;
  };

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    image?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    installation?: installationOrderByRelationAggregateInput;
    user?: userOrderByRelationAggregateInput;
  };

  export type organizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: organizationWhereInput | organizationWhereInput[];
      OR?: organizationWhereInput[];
      NOT?: organizationWhereInput | organizationWhereInput[];
      description?: StringNullableFilter<'organization'> | string | null;
      image?: StringNullableFilter<'organization'> | string | null;
      name?: StringFilter<'organization'> | string;
      created_at?: DateTimeFilter<'organization'> | Date | string;
      updated_at?: DateTimeFilter<'organization'> | Date | string;
      installation?: InstallationListRelationFilter;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    image?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: organizationCountOrderByAggregateInput;
    _max?: organizationMaxOrderByAggregateInput;
    _min?: organizationMinOrderByAggregateInput;
  };

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    OR?: organizationScalarWhereWithAggregatesInput[];
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'organization'> | string;
    description?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    image?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    name?: StringWithAggregatesFilter<'organization'> | string;
    created_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
  };

  export type serverWhereInput = {
    AND?: serverWhereInput | serverWhereInput[];
    OR?: serverWhereInput[];
    NOT?: serverWhereInput | serverWhereInput[];
    id?: UuidFilter<'server'> | string;
    ip_adress?: StringFilter<'server'> | string;
    region?: StringFilter<'server'> | string;
    server_provider?: StringFilter<'server'> | string;
    created_at?: DateTimeFilter<'server'> | Date | string;
    updated_at?: DateTimeFilter<'server'> | Date | string;
    installation?: InstallationListRelationFilter;
  };

  export type serverOrderByWithRelationInput = {
    id?: SortOrder;
    ip_adress?: SortOrder;
    region?: SortOrder;
    server_provider?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    installation?: installationOrderByRelationAggregateInput;
  };

  export type serverWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: serverWhereInput | serverWhereInput[];
      OR?: serverWhereInput[];
      NOT?: serverWhereInput | serverWhereInput[];
      ip_adress?: StringFilter<'server'> | string;
      region?: StringFilter<'server'> | string;
      server_provider?: StringFilter<'server'> | string;
      created_at?: DateTimeFilter<'server'> | Date | string;
      updated_at?: DateTimeFilter<'server'> | Date | string;
      installation?: InstallationListRelationFilter;
    },
    'id'
  >;

  export type serverOrderByWithAggregationInput = {
    id?: SortOrder;
    ip_adress?: SortOrder;
    region?: SortOrder;
    server_provider?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: serverCountOrderByAggregateInput;
    _max?: serverMaxOrderByAggregateInput;
    _min?: serverMinOrderByAggregateInput;
  };

  export type serverScalarWhereWithAggregatesInput = {
    AND?: serverScalarWhereWithAggregatesInput | serverScalarWhereWithAggregatesInput[];
    OR?: serverScalarWhereWithAggregatesInput[];
    NOT?: serverScalarWhereWithAggregatesInput | serverScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'server'> | string;
    ip_adress?: StringWithAggregatesFilter<'server'> | string;
    region?: StringWithAggregatesFilter<'server'> | string;
    server_provider?: StringWithAggregatesFilter<'server'> | string;
    created_at?: DateTimeWithAggregatesFilter<'server'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'server'> | Date | string;
  };

  export type toolWhereInput = {
    AND?: toolWhereInput | toolWhereInput[];
    OR?: toolWhereInput[];
    NOT?: toolWhereInput | toolWhereInput[];
    id?: UuidFilter<'tool'> | string;
    tool_type?: StringFilter<'tool'> | string;
    tool_name?: StringFilter<'tool'> | string;
    price?: FloatFilter<'tool'> | number;
    created_at?: DateTimeFilter<'tool'> | Date | string;
    updated_at?: DateTimeFilter<'tool'> | Date | string;
    installation?: InstallationListRelationFilter;
  };

  export type toolOrderByWithRelationInput = {
    id?: SortOrder;
    tool_type?: SortOrder;
    tool_name?: SortOrder;
    price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    installation?: installationOrderByRelationAggregateInput;
  };

  export type toolWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: toolWhereInput | toolWhereInput[];
      OR?: toolWhereInput[];
      NOT?: toolWhereInput | toolWhereInput[];
      tool_type?: StringFilter<'tool'> | string;
      tool_name?: StringFilter<'tool'> | string;
      price?: FloatFilter<'tool'> | number;
      created_at?: DateTimeFilter<'tool'> | Date | string;
      updated_at?: DateTimeFilter<'tool'> | Date | string;
      installation?: InstallationListRelationFilter;
    },
    'id'
  >;

  export type toolOrderByWithAggregationInput = {
    id?: SortOrder;
    tool_type?: SortOrder;
    tool_name?: SortOrder;
    price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: toolCountOrderByAggregateInput;
    _avg?: toolAvgOrderByAggregateInput;
    _max?: toolMaxOrderByAggregateInput;
    _min?: toolMinOrderByAggregateInput;
    _sum?: toolSumOrderByAggregateInput;
  };

  export type toolScalarWhereWithAggregatesInput = {
    AND?: toolScalarWhereWithAggregatesInput | toolScalarWhereWithAggregatesInput[];
    OR?: toolScalarWhereWithAggregatesInput[];
    NOT?: toolScalarWhereWithAggregatesInput | toolScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'tool'> | string;
    tool_type?: StringWithAggregatesFilter<'tool'> | string;
    tool_name?: StringWithAggregatesFilter<'tool'> | string;
    price?: FloatWithAggregatesFilter<'tool'> | number;
    created_at?: DateTimeWithAggregatesFilter<'tool'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'tool'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    organization_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    organization?: XOR<OrganizationNullableRelationFilter, organizationWhereInput> | null;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    organization?: organizationOrderByWithRelationInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      organization_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      organization?: XOR<OrganizationNullableRelationFilter, organizationWhereInput> | null;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    organization_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type installationCreateInput = {
    id?: string;
    coin_name: string;
    coin_ticker: string;
    logo: string;
    genesis_file: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutInstallationInput;
    server: serverCreateNestedOneWithoutInstallationInput;
    tool: toolCreateNestedOneWithoutInstallationInput;
  };

  export type installationUncheckedCreateInput = {
    id?: string;
    organization_id: string;
    server_id: string;
    coin_name: string;
    coin_ticker: string;
    logo: string;
    genesis_file: string;
    status: string;
    tool_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type installationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    coin_name?: StringFieldUpdateOperationsInput | string;
    coin_ticker?: StringFieldUpdateOperationsInput | string;
    logo?: StringFieldUpdateOperationsInput | string;
    genesis_file?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutInstallationNestedInput;
    server?: serverUpdateOneRequiredWithoutInstallationNestedInput;
    tool?: toolUpdateOneRequiredWithoutInstallationNestedInput;
  };

  export type installationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    server_id?: StringFieldUpdateOperationsInput | string;
    coin_name?: StringFieldUpdateOperationsInput | string;
    coin_ticker?: StringFieldUpdateOperationsInput | string;
    logo?: StringFieldUpdateOperationsInput | string;
    genesis_file?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    tool_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type installationCreateManyInput = {
    id?: string;
    organization_id: string;
    server_id: string;
    coin_name: string;
    coin_ticker: string;
    logo: string;
    genesis_file: string;
    status: string;
    tool_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type installationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    coin_name?: StringFieldUpdateOperationsInput | string;
    coin_ticker?: StringFieldUpdateOperationsInput | string;
    logo?: StringFieldUpdateOperationsInput | string;
    genesis_file?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type installationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    server_id?: StringFieldUpdateOperationsInput | string;
    coin_name?: StringFieldUpdateOperationsInput | string;
    coin_ticker?: StringFieldUpdateOperationsInput | string;
    logo?: StringFieldUpdateOperationsInput | string;
    genesis_file?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    tool_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationCreateInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    installation?: installationCreateNestedManyWithoutOrganizationInput;
    user?: userCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    installation?: installationUncheckedCreateNestedManyWithoutOrganizationInput;
    user?: userUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    installation?: installationUpdateManyWithoutOrganizationNestedInput;
    user?: userUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    installation?: installationUncheckedUpdateManyWithoutOrganizationNestedInput;
    user?: userUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationCreateManyInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type serverCreateInput = {
    id?: string;
    ip_adress: string;
    region: string;
    server_provider: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    installation?: installationCreateNestedManyWithoutServerInput;
  };

  export type serverUncheckedCreateInput = {
    id?: string;
    ip_adress: string;
    region: string;
    server_provider: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    installation?: installationUncheckedCreateNestedManyWithoutServerInput;
  };

  export type serverUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ip_adress?: StringFieldUpdateOperationsInput | string;
    region?: StringFieldUpdateOperationsInput | string;
    server_provider?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    installation?: installationUpdateManyWithoutServerNestedInput;
  };

  export type serverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ip_adress?: StringFieldUpdateOperationsInput | string;
    region?: StringFieldUpdateOperationsInput | string;
    server_provider?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    installation?: installationUncheckedUpdateManyWithoutServerNestedInput;
  };

  export type serverCreateManyInput = {
    id?: string;
    ip_adress: string;
    region: string;
    server_provider: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type serverUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ip_adress?: StringFieldUpdateOperationsInput | string;
    region?: StringFieldUpdateOperationsInput | string;
    server_provider?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type serverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ip_adress?: StringFieldUpdateOperationsInput | string;
    region?: StringFieldUpdateOperationsInput | string;
    server_provider?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type toolCreateInput = {
    id?: string;
    tool_type: string;
    tool_name: string;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    installation?: installationCreateNestedManyWithoutToolInput;
  };

  export type toolUncheckedCreateInput = {
    id?: string;
    tool_type: string;
    tool_name: string;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    installation?: installationUncheckedCreateNestedManyWithoutToolInput;
  };

  export type toolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tool_type?: StringFieldUpdateOperationsInput | string;
    tool_name?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    installation?: installationUpdateManyWithoutToolNestedInput;
  };

  export type toolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tool_type?: StringFieldUpdateOperationsInput | string;
    tool_name?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    installation?: installationUncheckedUpdateManyWithoutToolNestedInput;
  };

  export type toolCreateManyInput = {
    id?: string;
    tool_type: string;
    tool_name: string;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type toolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tool_type?: StringFieldUpdateOperationsInput | string;
    tool_name?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type toolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tool_type?: StringFieldUpdateOperationsInput | string;
    tool_name?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization?: organizationCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    organization_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organization_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    organization_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organization_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type OrganizationRelationFilter = {
    is?: organizationWhereInput;
    isNot?: organizationWhereInput;
  };

  export type ServerRelationFilter = {
    is?: serverWhereInput;
    isNot?: serverWhereInput;
  };

  export type ToolRelationFilter = {
    is?: toolWhereInput;
    isNot?: toolWhereInput;
  };

  export type installationCountOrderByAggregateInput = {
    id?: SortOrder;
    organization_id?: SortOrder;
    server_id?: SortOrder;
    coin_name?: SortOrder;
    coin_ticker?: SortOrder;
    logo?: SortOrder;
    genesis_file?: SortOrder;
    status?: SortOrder;
    tool_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type installationMaxOrderByAggregateInput = {
    id?: SortOrder;
    organization_id?: SortOrder;
    server_id?: SortOrder;
    coin_name?: SortOrder;
    coin_ticker?: SortOrder;
    logo?: SortOrder;
    genesis_file?: SortOrder;
    status?: SortOrder;
    tool_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type installationMinOrderByAggregateInput = {
    id?: SortOrder;
    organization_id?: SortOrder;
    server_id?: SortOrder;
    coin_name?: SortOrder;
    coin_ticker?: SortOrder;
    logo?: SortOrder;
    genesis_file?: SortOrder;
    status?: SortOrder;
    tool_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type InstallationListRelationFilter = {
    every?: installationWhereInput;
    some?: installationWhereInput;
    none?: installationWhereInput;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type installationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    image?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    image?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    image?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type serverCountOrderByAggregateInput = {
    id?: SortOrder;
    ip_adress?: SortOrder;
    region?: SortOrder;
    server_provider?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type serverMaxOrderByAggregateInput = {
    id?: SortOrder;
    ip_adress?: SortOrder;
    region?: SortOrder;
    server_provider?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type serverMinOrderByAggregateInput = {
    id?: SortOrder;
    ip_adress?: SortOrder;
    region?: SortOrder;
    server_provider?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type toolCountOrderByAggregateInput = {
    id?: SortOrder;
    tool_type?: SortOrder;
    tool_name?: SortOrder;
    price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type toolAvgOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type toolMaxOrderByAggregateInput = {
    id?: SortOrder;
    tool_type?: SortOrder;
    tool_name?: SortOrder;
    price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type toolMinOrderByAggregateInput = {
    id?: SortOrder;
    tool_type?: SortOrder;
    tool_name?: SortOrder;
    price?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type toolSumOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type OrganizationNullableRelationFilter = {
    is?: organizationWhereInput | null;
    isNot?: organizationWhereInput | null;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type organizationCreateNestedOneWithoutInstallationInput = {
    create?: XOR<organizationCreateWithoutInstallationInput, organizationUncheckedCreateWithoutInstallationInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutInstallationInput;
    connect?: organizationWhereUniqueInput;
  };

  export type serverCreateNestedOneWithoutInstallationInput = {
    create?: XOR<serverCreateWithoutInstallationInput, serverUncheckedCreateWithoutInstallationInput>;
    connectOrCreate?: serverCreateOrConnectWithoutInstallationInput;
    connect?: serverWhereUniqueInput;
  };

  export type toolCreateNestedOneWithoutInstallationInput = {
    create?: XOR<toolCreateWithoutInstallationInput, toolUncheckedCreateWithoutInstallationInput>;
    connectOrCreate?: toolCreateOrConnectWithoutInstallationInput;
    connect?: toolWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type organizationUpdateOneRequiredWithoutInstallationNestedInput = {
    create?: XOR<organizationCreateWithoutInstallationInput, organizationUncheckedCreateWithoutInstallationInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutInstallationInput;
    upsert?: organizationUpsertWithoutInstallationInput;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutInstallationInput, organizationUpdateWithoutInstallationInput>,
      organizationUncheckedUpdateWithoutInstallationInput
    >;
  };

  export type serverUpdateOneRequiredWithoutInstallationNestedInput = {
    create?: XOR<serverCreateWithoutInstallationInput, serverUncheckedCreateWithoutInstallationInput>;
    connectOrCreate?: serverCreateOrConnectWithoutInstallationInput;
    upsert?: serverUpsertWithoutInstallationInput;
    connect?: serverWhereUniqueInput;
    update?: XOR<
      XOR<serverUpdateToOneWithWhereWithoutInstallationInput, serverUpdateWithoutInstallationInput>,
      serverUncheckedUpdateWithoutInstallationInput
    >;
  };

  export type toolUpdateOneRequiredWithoutInstallationNestedInput = {
    create?: XOR<toolCreateWithoutInstallationInput, toolUncheckedCreateWithoutInstallationInput>;
    connectOrCreate?: toolCreateOrConnectWithoutInstallationInput;
    upsert?: toolUpsertWithoutInstallationInput;
    connect?: toolWhereUniqueInput;
    update?: XOR<
      XOR<toolUpdateToOneWithWhereWithoutInstallationInput, toolUpdateWithoutInstallationInput>,
      toolUncheckedUpdateWithoutInstallationInput
    >;
  };

  export type installationCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<installationCreateWithoutOrganizationInput, installationUncheckedCreateWithoutOrganizationInput>
      | installationCreateWithoutOrganizationInput[]
      | installationUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | installationCreateOrConnectWithoutOrganizationInput
      | installationCreateOrConnectWithoutOrganizationInput[];
    createMany?: installationCreateManyOrganizationInputEnvelope;
    connect?: installationWhereUniqueInput | installationWhereUniqueInput[];
  };

  export type userCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>
      | userCreateWithoutOrganizationInput[]
      | userUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput | userCreateOrConnectWithoutOrganizationInput[];
    createMany?: userCreateManyOrganizationInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type installationUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<installationCreateWithoutOrganizationInput, installationUncheckedCreateWithoutOrganizationInput>
      | installationCreateWithoutOrganizationInput[]
      | installationUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | installationCreateOrConnectWithoutOrganizationInput
      | installationCreateOrConnectWithoutOrganizationInput[];
    createMany?: installationCreateManyOrganizationInputEnvelope;
    connect?: installationWhereUniqueInput | installationWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>
      | userCreateWithoutOrganizationInput[]
      | userUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput | userCreateOrConnectWithoutOrganizationInput[];
    createMany?: userCreateManyOrganizationInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type installationUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<installationCreateWithoutOrganizationInput, installationUncheckedCreateWithoutOrganizationInput>
      | installationCreateWithoutOrganizationInput[]
      | installationUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | installationCreateOrConnectWithoutOrganizationInput
      | installationCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | installationUpsertWithWhereUniqueWithoutOrganizationInput
      | installationUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: installationCreateManyOrganizationInputEnvelope;
    set?: installationWhereUniqueInput | installationWhereUniqueInput[];
    disconnect?: installationWhereUniqueInput | installationWhereUniqueInput[];
    delete?: installationWhereUniqueInput | installationWhereUniqueInput[];
    connect?: installationWhereUniqueInput | installationWhereUniqueInput[];
    update?:
      | installationUpdateWithWhereUniqueWithoutOrganizationInput
      | installationUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | installationUpdateManyWithWhereWithoutOrganizationInput
      | installationUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: installationScalarWhereInput | installationScalarWhereInput[];
  };

  export type userUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>
      | userCreateWithoutOrganizationInput[]
      | userUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput | userCreateOrConnectWithoutOrganizationInput[];
    upsert?: userUpsertWithWhereUniqueWithoutOrganizationInput | userUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: userCreateManyOrganizationInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutOrganizationInput | userUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: userUpdateManyWithWhereWithoutOrganizationInput | userUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type installationUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<installationCreateWithoutOrganizationInput, installationUncheckedCreateWithoutOrganizationInput>
      | installationCreateWithoutOrganizationInput[]
      | installationUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | installationCreateOrConnectWithoutOrganizationInput
      | installationCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | installationUpsertWithWhereUniqueWithoutOrganizationInput
      | installationUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: installationCreateManyOrganizationInputEnvelope;
    set?: installationWhereUniqueInput | installationWhereUniqueInput[];
    disconnect?: installationWhereUniqueInput | installationWhereUniqueInput[];
    delete?: installationWhereUniqueInput | installationWhereUniqueInput[];
    connect?: installationWhereUniqueInput | installationWhereUniqueInput[];
    update?:
      | installationUpdateWithWhereUniqueWithoutOrganizationInput
      | installationUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | installationUpdateManyWithWhereWithoutOrganizationInput
      | installationUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: installationScalarWhereInput | installationScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>
      | userCreateWithoutOrganizationInput[]
      | userUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput | userCreateOrConnectWithoutOrganizationInput[];
    upsert?: userUpsertWithWhereUniqueWithoutOrganizationInput | userUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: userCreateManyOrganizationInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutOrganizationInput | userUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: userUpdateManyWithWhereWithoutOrganizationInput | userUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type installationCreateNestedManyWithoutServerInput = {
    create?:
      | XOR<installationCreateWithoutServerInput, installationUncheckedCreateWithoutServerInput>
      | installationCreateWithoutServerInput[]
      | installationUncheckedCreateWithoutServerInput[];
    connectOrCreate?: installationCreateOrConnectWithoutServerInput | installationCreateOrConnectWithoutServerInput[];
    createMany?: installationCreateManyServerInputEnvelope;
    connect?: installationWhereUniqueInput | installationWhereUniqueInput[];
  };

  export type installationUncheckedCreateNestedManyWithoutServerInput = {
    create?:
      | XOR<installationCreateWithoutServerInput, installationUncheckedCreateWithoutServerInput>
      | installationCreateWithoutServerInput[]
      | installationUncheckedCreateWithoutServerInput[];
    connectOrCreate?: installationCreateOrConnectWithoutServerInput | installationCreateOrConnectWithoutServerInput[];
    createMany?: installationCreateManyServerInputEnvelope;
    connect?: installationWhereUniqueInput | installationWhereUniqueInput[];
  };

  export type installationUpdateManyWithoutServerNestedInput = {
    create?:
      | XOR<installationCreateWithoutServerInput, installationUncheckedCreateWithoutServerInput>
      | installationCreateWithoutServerInput[]
      | installationUncheckedCreateWithoutServerInput[];
    connectOrCreate?: installationCreateOrConnectWithoutServerInput | installationCreateOrConnectWithoutServerInput[];
    upsert?:
      | installationUpsertWithWhereUniqueWithoutServerInput
      | installationUpsertWithWhereUniqueWithoutServerInput[];
    createMany?: installationCreateManyServerInputEnvelope;
    set?: installationWhereUniqueInput | installationWhereUniqueInput[];
    disconnect?: installationWhereUniqueInput | installationWhereUniqueInput[];
    delete?: installationWhereUniqueInput | installationWhereUniqueInput[];
    connect?: installationWhereUniqueInput | installationWhereUniqueInput[];
    update?:
      | installationUpdateWithWhereUniqueWithoutServerInput
      | installationUpdateWithWhereUniqueWithoutServerInput[];
    updateMany?:
      | installationUpdateManyWithWhereWithoutServerInput
      | installationUpdateManyWithWhereWithoutServerInput[];
    deleteMany?: installationScalarWhereInput | installationScalarWhereInput[];
  };

  export type installationUncheckedUpdateManyWithoutServerNestedInput = {
    create?:
      | XOR<installationCreateWithoutServerInput, installationUncheckedCreateWithoutServerInput>
      | installationCreateWithoutServerInput[]
      | installationUncheckedCreateWithoutServerInput[];
    connectOrCreate?: installationCreateOrConnectWithoutServerInput | installationCreateOrConnectWithoutServerInput[];
    upsert?:
      | installationUpsertWithWhereUniqueWithoutServerInput
      | installationUpsertWithWhereUniqueWithoutServerInput[];
    createMany?: installationCreateManyServerInputEnvelope;
    set?: installationWhereUniqueInput | installationWhereUniqueInput[];
    disconnect?: installationWhereUniqueInput | installationWhereUniqueInput[];
    delete?: installationWhereUniqueInput | installationWhereUniqueInput[];
    connect?: installationWhereUniqueInput | installationWhereUniqueInput[];
    update?:
      | installationUpdateWithWhereUniqueWithoutServerInput
      | installationUpdateWithWhereUniqueWithoutServerInput[];
    updateMany?:
      | installationUpdateManyWithWhereWithoutServerInput
      | installationUpdateManyWithWhereWithoutServerInput[];
    deleteMany?: installationScalarWhereInput | installationScalarWhereInput[];
  };

  export type installationCreateNestedManyWithoutToolInput = {
    create?:
      | XOR<installationCreateWithoutToolInput, installationUncheckedCreateWithoutToolInput>
      | installationCreateWithoutToolInput[]
      | installationUncheckedCreateWithoutToolInput[];
    connectOrCreate?: installationCreateOrConnectWithoutToolInput | installationCreateOrConnectWithoutToolInput[];
    createMany?: installationCreateManyToolInputEnvelope;
    connect?: installationWhereUniqueInput | installationWhereUniqueInput[];
  };

  export type installationUncheckedCreateNestedManyWithoutToolInput = {
    create?:
      | XOR<installationCreateWithoutToolInput, installationUncheckedCreateWithoutToolInput>
      | installationCreateWithoutToolInput[]
      | installationUncheckedCreateWithoutToolInput[];
    connectOrCreate?: installationCreateOrConnectWithoutToolInput | installationCreateOrConnectWithoutToolInput[];
    createMany?: installationCreateManyToolInputEnvelope;
    connect?: installationWhereUniqueInput | installationWhereUniqueInput[];
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type installationUpdateManyWithoutToolNestedInput = {
    create?:
      | XOR<installationCreateWithoutToolInput, installationUncheckedCreateWithoutToolInput>
      | installationCreateWithoutToolInput[]
      | installationUncheckedCreateWithoutToolInput[];
    connectOrCreate?: installationCreateOrConnectWithoutToolInput | installationCreateOrConnectWithoutToolInput[];
    upsert?: installationUpsertWithWhereUniqueWithoutToolInput | installationUpsertWithWhereUniqueWithoutToolInput[];
    createMany?: installationCreateManyToolInputEnvelope;
    set?: installationWhereUniqueInput | installationWhereUniqueInput[];
    disconnect?: installationWhereUniqueInput | installationWhereUniqueInput[];
    delete?: installationWhereUniqueInput | installationWhereUniqueInput[];
    connect?: installationWhereUniqueInput | installationWhereUniqueInput[];
    update?: installationUpdateWithWhereUniqueWithoutToolInput | installationUpdateWithWhereUniqueWithoutToolInput[];
    updateMany?: installationUpdateManyWithWhereWithoutToolInput | installationUpdateManyWithWhereWithoutToolInput[];
    deleteMany?: installationScalarWhereInput | installationScalarWhereInput[];
  };

  export type installationUncheckedUpdateManyWithoutToolNestedInput = {
    create?:
      | XOR<installationCreateWithoutToolInput, installationUncheckedCreateWithoutToolInput>
      | installationCreateWithoutToolInput[]
      | installationUncheckedCreateWithoutToolInput[];
    connectOrCreate?: installationCreateOrConnectWithoutToolInput | installationCreateOrConnectWithoutToolInput[];
    upsert?: installationUpsertWithWhereUniqueWithoutToolInput | installationUpsertWithWhereUniqueWithoutToolInput[];
    createMany?: installationCreateManyToolInputEnvelope;
    set?: installationWhereUniqueInput | installationWhereUniqueInput[];
    disconnect?: installationWhereUniqueInput | installationWhereUniqueInput[];
    delete?: installationWhereUniqueInput | installationWhereUniqueInput[];
    connect?: installationWhereUniqueInput | installationWhereUniqueInput[];
    update?: installationUpdateWithWhereUniqueWithoutToolInput | installationUpdateWithWhereUniqueWithoutToolInput[];
    updateMany?: installationUpdateManyWithWhereWithoutToolInput | installationUpdateManyWithWhereWithoutToolInput[];
    deleteMany?: installationScalarWhereInput | installationScalarWhereInput[];
  };

  export type organizationCreateNestedOneWithoutUserInput = {
    create?: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput;
    connect?: organizationWhereUniqueInput;
  };

  export type organizationUpdateOneWithoutUserNestedInput = {
    create?: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput;
    upsert?: organizationUpsertWithoutUserInput;
    disconnect?: organizationWhereInput | boolean;
    delete?: organizationWhereInput | boolean;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutUserInput, organizationUpdateWithoutUserInput>,
      organizationUncheckedUpdateWithoutUserInput
    >;
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type organizationCreateWithoutInstallationInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutInstallationInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutInstallationInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutInstallationInput, organizationUncheckedCreateWithoutInstallationInput>;
  };

  export type serverCreateWithoutInstallationInput = {
    id?: string;
    ip_adress: string;
    region: string;
    server_provider: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type serverUncheckedCreateWithoutInstallationInput = {
    id?: string;
    ip_adress: string;
    region: string;
    server_provider: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type serverCreateOrConnectWithoutInstallationInput = {
    where: serverWhereUniqueInput;
    create: XOR<serverCreateWithoutInstallationInput, serverUncheckedCreateWithoutInstallationInput>;
  };

  export type toolCreateWithoutInstallationInput = {
    id?: string;
    tool_type: string;
    tool_name: string;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type toolUncheckedCreateWithoutInstallationInput = {
    id?: string;
    tool_type: string;
    tool_name: string;
    price: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type toolCreateOrConnectWithoutInstallationInput = {
    where: toolWhereUniqueInput;
    create: XOR<toolCreateWithoutInstallationInput, toolUncheckedCreateWithoutInstallationInput>;
  };

  export type organizationUpsertWithoutInstallationInput = {
    update: XOR<organizationUpdateWithoutInstallationInput, organizationUncheckedUpdateWithoutInstallationInput>;
    create: XOR<organizationCreateWithoutInstallationInput, organizationUncheckedCreateWithoutInstallationInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutInstallationInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutInstallationInput, organizationUncheckedUpdateWithoutInstallationInput>;
  };

  export type organizationUpdateWithoutInstallationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutInstallationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type serverUpsertWithoutInstallationInput = {
    update: XOR<serverUpdateWithoutInstallationInput, serverUncheckedUpdateWithoutInstallationInput>;
    create: XOR<serverCreateWithoutInstallationInput, serverUncheckedCreateWithoutInstallationInput>;
    where?: serverWhereInput;
  };

  export type serverUpdateToOneWithWhereWithoutInstallationInput = {
    where?: serverWhereInput;
    data: XOR<serverUpdateWithoutInstallationInput, serverUncheckedUpdateWithoutInstallationInput>;
  };

  export type serverUpdateWithoutInstallationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ip_adress?: StringFieldUpdateOperationsInput | string;
    region?: StringFieldUpdateOperationsInput | string;
    server_provider?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type serverUncheckedUpdateWithoutInstallationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ip_adress?: StringFieldUpdateOperationsInput | string;
    region?: StringFieldUpdateOperationsInput | string;
    server_provider?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type toolUpsertWithoutInstallationInput = {
    update: XOR<toolUpdateWithoutInstallationInput, toolUncheckedUpdateWithoutInstallationInput>;
    create: XOR<toolCreateWithoutInstallationInput, toolUncheckedCreateWithoutInstallationInput>;
    where?: toolWhereInput;
  };

  export type toolUpdateToOneWithWhereWithoutInstallationInput = {
    where?: toolWhereInput;
    data: XOR<toolUpdateWithoutInstallationInput, toolUncheckedUpdateWithoutInstallationInput>;
  };

  export type toolUpdateWithoutInstallationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tool_type?: StringFieldUpdateOperationsInput | string;
    tool_name?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type toolUncheckedUpdateWithoutInstallationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tool_type?: StringFieldUpdateOperationsInput | string;
    tool_name?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type installationCreateWithoutOrganizationInput = {
    id?: string;
    coin_name: string;
    coin_ticker: string;
    logo: string;
    genesis_file: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    server: serverCreateNestedOneWithoutInstallationInput;
    tool: toolCreateNestedOneWithoutInstallationInput;
  };

  export type installationUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    server_id: string;
    coin_name: string;
    coin_ticker: string;
    logo: string;
    genesis_file: string;
    status: string;
    tool_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type installationCreateOrConnectWithoutOrganizationInput = {
    where: installationWhereUniqueInput;
    create: XOR<installationCreateWithoutOrganizationInput, installationUncheckedCreateWithoutOrganizationInput>;
  };

  export type installationCreateManyOrganizationInputEnvelope = {
    data: installationCreateManyOrganizationInput | installationCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userCreateOrConnectWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type userCreateManyOrganizationInputEnvelope = {
    data: userCreateManyOrganizationInput | userCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type installationUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: installationWhereUniqueInput;
    update: XOR<installationUpdateWithoutOrganizationInput, installationUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<installationCreateWithoutOrganizationInput, installationUncheckedCreateWithoutOrganizationInput>;
  };

  export type installationUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: installationWhereUniqueInput;
    data: XOR<installationUpdateWithoutOrganizationInput, installationUncheckedUpdateWithoutOrganizationInput>;
  };

  export type installationUpdateManyWithWhereWithoutOrganizationInput = {
    where: installationScalarWhereInput;
    data: XOR<installationUpdateManyMutationInput, installationUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type installationScalarWhereInput = {
    AND?: installationScalarWhereInput | installationScalarWhereInput[];
    OR?: installationScalarWhereInput[];
    NOT?: installationScalarWhereInput | installationScalarWhereInput[];
    id?: UuidFilter<'installation'> | string;
    organization_id?: UuidFilter<'installation'> | string;
    server_id?: UuidFilter<'installation'> | string;
    coin_name?: StringFilter<'installation'> | string;
    coin_ticker?: StringFilter<'installation'> | string;
    logo?: StringFilter<'installation'> | string;
    genesis_file?: StringFilter<'installation'> | string;
    status?: StringFilter<'installation'> | string;
    tool_id?: UuidFilter<'installation'> | string;
    created_at?: DateTimeFilter<'installation'> | Date | string;
    updated_at?: DateTimeFilter<'installation'> | Date | string;
  };

  export type userUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type userUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
  };

  export type userUpdateManyWithWhereWithoutOrganizationInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    organization_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type installationCreateWithoutServerInput = {
    id?: string;
    coin_name: string;
    coin_ticker: string;
    logo: string;
    genesis_file: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutInstallationInput;
    tool: toolCreateNestedOneWithoutInstallationInput;
  };

  export type installationUncheckedCreateWithoutServerInput = {
    id?: string;
    organization_id: string;
    coin_name: string;
    coin_ticker: string;
    logo: string;
    genesis_file: string;
    status: string;
    tool_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type installationCreateOrConnectWithoutServerInput = {
    where: installationWhereUniqueInput;
    create: XOR<installationCreateWithoutServerInput, installationUncheckedCreateWithoutServerInput>;
  };

  export type installationCreateManyServerInputEnvelope = {
    data: installationCreateManyServerInput | installationCreateManyServerInput[];
    skipDuplicates?: boolean;
  };

  export type installationUpsertWithWhereUniqueWithoutServerInput = {
    where: installationWhereUniqueInput;
    update: XOR<installationUpdateWithoutServerInput, installationUncheckedUpdateWithoutServerInput>;
    create: XOR<installationCreateWithoutServerInput, installationUncheckedCreateWithoutServerInput>;
  };

  export type installationUpdateWithWhereUniqueWithoutServerInput = {
    where: installationWhereUniqueInput;
    data: XOR<installationUpdateWithoutServerInput, installationUncheckedUpdateWithoutServerInput>;
  };

  export type installationUpdateManyWithWhereWithoutServerInput = {
    where: installationScalarWhereInput;
    data: XOR<installationUpdateManyMutationInput, installationUncheckedUpdateManyWithoutServerInput>;
  };

  export type installationCreateWithoutToolInput = {
    id?: string;
    coin_name: string;
    coin_ticker: string;
    logo: string;
    genesis_file: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization: organizationCreateNestedOneWithoutInstallationInput;
    server: serverCreateNestedOneWithoutInstallationInput;
  };

  export type installationUncheckedCreateWithoutToolInput = {
    id?: string;
    organization_id: string;
    server_id: string;
    coin_name: string;
    coin_ticker: string;
    logo: string;
    genesis_file: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type installationCreateOrConnectWithoutToolInput = {
    where: installationWhereUniqueInput;
    create: XOR<installationCreateWithoutToolInput, installationUncheckedCreateWithoutToolInput>;
  };

  export type installationCreateManyToolInputEnvelope = {
    data: installationCreateManyToolInput | installationCreateManyToolInput[];
    skipDuplicates?: boolean;
  };

  export type installationUpsertWithWhereUniqueWithoutToolInput = {
    where: installationWhereUniqueInput;
    update: XOR<installationUpdateWithoutToolInput, installationUncheckedUpdateWithoutToolInput>;
    create: XOR<installationCreateWithoutToolInput, installationUncheckedCreateWithoutToolInput>;
  };

  export type installationUpdateWithWhereUniqueWithoutToolInput = {
    where: installationWhereUniqueInput;
    data: XOR<installationUpdateWithoutToolInput, installationUncheckedUpdateWithoutToolInput>;
  };

  export type installationUpdateManyWithWhereWithoutToolInput = {
    where: installationScalarWhereInput;
    data: XOR<installationUpdateManyMutationInput, installationUncheckedUpdateManyWithoutToolInput>;
  };

  export type organizationCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    installation?: installationCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    image?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    installation?: installationUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationCreateOrConnectWithoutUserInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type organizationUpsertWithoutUserInput = {
    update: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutUserInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
  };

  export type organizationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    installation?: installationUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    image?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    installation?: installationUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type installationCreateManyOrganizationInput = {
    id?: string;
    server_id: string;
    coin_name: string;
    coin_ticker: string;
    logo: string;
    genesis_file: string;
    status: string;
    tool_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userCreateManyOrganizationInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type installationUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    coin_name?: StringFieldUpdateOperationsInput | string;
    coin_ticker?: StringFieldUpdateOperationsInput | string;
    logo?: StringFieldUpdateOperationsInput | string;
    genesis_file?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    server?: serverUpdateOneRequiredWithoutInstallationNestedInput;
    tool?: toolUpdateOneRequiredWithoutInstallationNestedInput;
  };

  export type installationUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    server_id?: StringFieldUpdateOperationsInput | string;
    coin_name?: StringFieldUpdateOperationsInput | string;
    coin_ticker?: StringFieldUpdateOperationsInput | string;
    logo?: StringFieldUpdateOperationsInput | string;
    genesis_file?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    tool_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type installationUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    server_id?: StringFieldUpdateOperationsInput | string;
    coin_name?: StringFieldUpdateOperationsInput | string;
    coin_ticker?: StringFieldUpdateOperationsInput | string;
    logo?: StringFieldUpdateOperationsInput | string;
    genesis_file?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    tool_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type installationCreateManyServerInput = {
    id?: string;
    organization_id: string;
    coin_name: string;
    coin_ticker: string;
    logo: string;
    genesis_file: string;
    status: string;
    tool_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type installationUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    coin_name?: StringFieldUpdateOperationsInput | string;
    coin_ticker?: StringFieldUpdateOperationsInput | string;
    logo?: StringFieldUpdateOperationsInput | string;
    genesis_file?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutInstallationNestedInput;
    tool?: toolUpdateOneRequiredWithoutInstallationNestedInput;
  };

  export type installationUncheckedUpdateWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    coin_name?: StringFieldUpdateOperationsInput | string;
    coin_ticker?: StringFieldUpdateOperationsInput | string;
    logo?: StringFieldUpdateOperationsInput | string;
    genesis_file?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    tool_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type installationUncheckedUpdateManyWithoutServerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    coin_name?: StringFieldUpdateOperationsInput | string;
    coin_ticker?: StringFieldUpdateOperationsInput | string;
    logo?: StringFieldUpdateOperationsInput | string;
    genesis_file?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    tool_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type installationCreateManyToolInput = {
    id?: string;
    organization_id: string;
    server_id: string;
    coin_name: string;
    coin_ticker: string;
    logo: string;
    genesis_file: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type installationUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    coin_name?: StringFieldUpdateOperationsInput | string;
    coin_ticker?: StringFieldUpdateOperationsInput | string;
    logo?: StringFieldUpdateOperationsInput | string;
    genesis_file?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneRequiredWithoutInstallationNestedInput;
    server?: serverUpdateOneRequiredWithoutInstallationNestedInput;
  };

  export type installationUncheckedUpdateWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    server_id?: StringFieldUpdateOperationsInput | string;
    coin_name?: StringFieldUpdateOperationsInput | string;
    coin_ticker?: StringFieldUpdateOperationsInput | string;
    logo?: StringFieldUpdateOperationsInput | string;
    genesis_file?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type installationUncheckedUpdateManyWithoutToolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organization_id?: StringFieldUpdateOperationsInput | string;
    server_id?: StringFieldUpdateOperationsInput | string;
    coin_name?: StringFieldUpdateOperationsInput | string;
    coin_ticker?: StringFieldUpdateOperationsInput | string;
    logo?: StringFieldUpdateOperationsInput | string;
    genesis_file?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
   */
  export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ServerCountOutputTypeDefaultArgs instead
   */
  export type ServerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ServerCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ToolCountOutputTypeDefaultArgs instead
   */
  export type ToolCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ToolCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use installationDefaultArgs instead
   */
  export type installationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    installationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use organizationDefaultArgs instead
   */
  export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    organizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use serverDefaultArgs instead
   */
  export type serverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    serverDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use toolDefaultArgs instead
   */
  export type toolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = toolDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
