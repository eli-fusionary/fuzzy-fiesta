import type { ReactNode } from 'react'

/**
 * Props for the DataContainer component.
 */
type BaseProps<T> = {
  /** The children to be rendered. Can be a render function to expose data to children. */
  children: ((data: NonNullable<T>) => ReactNode) | ReactNode
  /** The data to be validated and checked. */
  data: T
}

type ExactProps<T> = {
  /** The exact value to match against the data. */
  exact: T
  isEmpty?: never
  keyExists?: never
  stringContains?: never
} & BaseProps<T>

type KeyExistsProps<T> = {
  exact?: never
  isEmpty?: never
  /** The key to check for existence in the data if it is an object. */
  keyExists: keyof T
  stringContains?: never
} & BaseProps<T>

type StringContainsProps<T> = {
  exact?: never
  isEmpty?: never
  keyExists?: never
  /** The substring to check for existence in the data if it is a string. */
  stringContains: string
} & BaseProps<T>

type IsEmptyProps<T> = {
  exact?: never
  /** A boolean indicating if the data should be checked for emptiness. */
  isEmpty: boolean
  keyExists?: never
  stringContains?: never
} & BaseProps<T>

type OnlyBaseProps<T> = {
  exact?: never
  isEmpty?: never
  keyExists?: never
  stringContains?: never
} & BaseProps<T>

type DataContainerProps<T> = (
  | ExactProps<T>
  | IsEmptyProps<T>
  | KeyExistsProps<T>
  | OnlyBaseProps<T>
  | StringContainsProps<T>
) &
  BaseProps<T>

/**
 * DataContainer component checks various conditions on the data and renders its children if the conditions are met.
 *
 * @template T - The type of the data prop.
 *
 * @param {DataContainerProps<T>} props - The props for the component.
 * @returns {JSX.Element | null} - The children if the conditions are met, otherwise null.
 *
 * @example
 * // Example 1: Rendering if data is a non-empty array
 * <DataContainer data={[1, 2, 3]}>
 *   <p>The array is valid and not empty.</p>
 * </DataContainer>
 *
 * @example
 * // Example 2: Rendering if the exact value matches
 * <DataContainer data="Hello, world!" exact="Hello, world!">
 *   <p>The string matches the exact value.</p>
 * </DataContainer>
 *
 * @example
 * // Example 3: Rendering data dependent children
 * <DataContainer data={sampleString} exact="Hello, world!">
 *  {(data) => <p>The string matches the exact value: {data}</p>}
 * </DataContainer>
 */
const DataContainer = <T,>(
  props: DataContainerProps<T>,
): null | React.JSX.Element => {
  const { children, data, exact, isEmpty, keyExists, stringContains } = props

  const isValid = () => {
    if (exact !== undefined) {
      return data === exact
    }

    if (keyExists !== undefined) {
      return typeof data === 'object' && data !== null && keyExists in data
    }

    if (stringContains !== undefined) {
      return typeof data === 'string' && data.includes(stringContains)
    }

    if (isEmpty !== undefined) {
      if (Array.isArray(data)) {
        return (data.length === 0) === isEmpty
      }

      if (typeof data === 'string') {
        return (data.trim() === '') === isEmpty
      }

      if (typeof data === 'object' && data !== null) {
        return (Object.keys(data).length === 0) === isEmpty
      }

      return data !== isEmpty
    }

    switch (typeof data) {
      case 'boolean': {
        return data
      }
      case 'number': {
        return !Number.isNaN(data)
      }
      case 'object': {
        if (Array.isArray(data)) {
          return data.length > 0
        }
        return data !== null && Object.keys(data).length > 0
      }
      case 'string': {
        return data.trim() !== ''
      }
      default: {
        return false
      }
    }
  }

  if (!isValid()) {
    return null
  }

  const value = data as NonNullable<T>

  return <>{typeof children === 'function' ? children(value) : children}</>
}

export { DataContainer }
