/**
 * * Mapped types build on the syntax for index signatures, which are used to declare the types of properties which have not been declared ahead of time:
 */

type OnlyBoolsAndString = {
  [key: string]: boolean | string;
};

const conforms: OnlyBoolsAndString = {
  del: true,
  rodney: false,
  1: "naman",
};

/**
 * *A mapped type is a generic type which uses a union of PropertyKeys (frequently created via a keyof) to iterate through keys to create a type:
 */

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

/**
 * * In the following example,
 * *OptionsFlags will take all the properties from the type Type and change their values to be a boolean.
 */

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

var t1: FeatureFlags = {
  darkMode: () => {
    console.log("dddd");
  },
  newUserProfile: () => {
    console.log("dddd");
    return "";
  },
};
type FeatureOptions = OptionsFlags<FeatureFlags>;

// Now all the keys in type FeatureOptions will have type boolean
var t2: FeatureOptions = {
  darkMode: true,
  newUserProfile: false,
};
/**
 * * There are two additional modifiers which can be applied during mapping: readonly and ? which affect mutability and optionality respectively.
 * *You can remove or add these modifiers by prefixing with - or +. If you don’t add a prefix, then + is assumed.
 ** Following will remove 'readonly' attributes from a type's properties
*/
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

var locked :LockedAccount = {
  id : "naman",
  name : "nnnn"
}
// the following will raise an error because property id is an read only attribute
// locked.id = "aakash"


// this will remove readonly attributes from the properties
type UnlockedAccount = CreateMutable<LockedAccount>;
var unlock : UnlockedAccount = {
  id : "123",
  name : "aakash"
}
unlock.id = "naman"


/**
 * * The following will remove optional identifiers.
 */
// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};
 
type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};
 
type User = Concrete<MaybeUser>;