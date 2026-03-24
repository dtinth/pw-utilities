export interface LocatorLike {
  evaluate<R>(pageFunction: (element: Element) => R | Promise<R>): Promise<R>;
}
