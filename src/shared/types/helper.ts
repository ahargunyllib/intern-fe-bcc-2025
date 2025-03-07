/**
 * Extract only numeric indexes (0 | 1 | 2 | ...) from a tuple or readonly array.
 */
// biome-ignore lint/suspicious/noExplicitAny: any
export type Indexes<T extends readonly any[]> = Exclude<
	// remove array methods
	keyof T,
	// biome-ignore lint/suspicious/noExplicitAny: any
	keyof any[]
> extends infer K // convert string indexes to numbers
	? K extends `${infer N extends number}`
		? N
		: never
	: never;
