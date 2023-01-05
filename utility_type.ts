/**
 * * Partial<Type>
 ** Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
 */

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});

console.log("jjj", todo2);
/**
 * * Required<Type>
 ** Constructs a type consisting of all properties of Type set to required. The opposite of Partial.
 */

interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

/**
 * *The following statement is invalid because it constructs the type Props with all properties as required.
 */
// const obj2: Required<Props> = { a: 5 }; // Invalid

/**
 * * Readonly<Type>
 * *Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
 */

interface Todonew {
  title: string;
}

const todo: Readonly<Todonew> = {
  title: "Delete inactive users",
};

/**
 * * The following statement is invalid because we cannot re-assign the readonly properties as defined in constructed type.
 */
// todo.title = "Hello";  // Invalid

/**
 * * Record<Keys, Type>
 * *Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.
 */

interface CatInfo {
  age: number;
  breed: string;
  color?: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian", color: "red" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;

/**
 * * Pick<Type, Keys>
 * *Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
 */

interface todo_interface {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<todo_interface, "title" | "completed">;

const todo_new: TodoPreview = {
  title: "Clean room",
  completed: false,
};

/**
 * *The following statement is invalid because property name 'description' doesn't exist in type TodoPreview.
 */
// const todo_new1: TodoPreview = {
//   title: "Clean room",
//   description : "strong"
//   completed: false,
// };

/**
 * * Omit<Type, Keys>
 * *Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).
 */

interface todo_omit_interface {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreviewOmit = Omit<todo_omit_interface, "description">;

const todo_omitted: TodoPreviewOmit = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

todo_omitted;

type TodoInfo = Omit<todo_omit_interface, "completed" | "createdAt">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};
/**
 * * following is Invalid because property 'completed' is omitted in the type TodoInfo
 */
// const todoInfo: TodoInfo = {
//   title: "Pick up kids",
//   completed : true,
//   description: "Kindergarten closes at 5pm",
// };

todoInfo;

/**
 * * Exclude<UnionType, ExcludedMembers>
 * *Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers.
 */

 type T0 = Exclude<"a" | "b" | "c", "a">;
     
 type T1 = Exclude<"a" | "b" | "c" | "d", "a" | "b">;
      
 type T2 = Exclude<string | number | (() => void), Function>;

let T0_0 : T0 = "c"  // valid 
 T0_0   = "b"  // valid
//  T0_0  = "a"   // Invalid because "a" is excluded from type T0.

let T1:T1 = "c" // valid 
T1  = "c" // valid
// T1  = "a" // Invalid because "a" and "b" is excluded from type T1.

/**
 * *NonNullable<Type>
 * * Constructs a type by excluding null and undefined from Type
 */

 type T4 = NonNullable<string | number | undefined>;
 type T5 = NonNullable<string[] | null | undefined>;