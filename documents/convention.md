# Project Naming and Coding Conventions

## 1. File and Folder Naming

- **Component Files:** Use PascalCase for component file names, e.g., `Header.jsx`, `CartItem.jsx`.
- **Non-component Files:** Use camelCase for utility and configuration files, e.g., `apiConfig.js`, `helperFunctions.js`.
- **Folders:** Use kebab-case for folder names, e.g., `components`, `hooks`, `styles`.

## 2. Component Naming

- Use descriptive names for components.
- Use PascalCase for component names.
- Prefix component names with the feature they belong to if applicable, e.g., `CartItem`, `ProductList`.

## 3. Variables and Functions

- Use camelCase for variable and function names.
- Use descriptive names that convey the purpose of the variable/function.
- For boolean variables or functions, prefix with `is` or `has`, e.g., `isLoading`, `hasItems`.

## 4. Constants

- Use UPPER_CASE for constants.
- Define constants in a separate file if they are used across multiple files.

## 5. CSS Modules

- Use camelCase for class names in CSS modules.
- Prefix class names with the component name to avoid conflicts, e.g., `.headerTitle`, `.cartItem`.

## 6. SVG Files

- Store SVG files in the `assets` or `icons` folder.
- Use descriptive names, e.g., `logo.svg`, `shoppingCart.svg`.

## 7. ESLint and Husky

- Follow the ESLint rules defined in the project.
- Set up pre-commit hooks using Husky to enforce code linting before commits.

## 8. Storybook

- Write stories for all reusable components.

## 9. Number Formatting

- Format numbers for compact display, e.g., `9999` as `9.9k`.

## 10. Reusable Components

- Create components that are reusable and handle various use cases.
- Avoid passing overly specific props directly into components.

## 11. Documentation

- Maintain a `README.md` file at the project root with an overview and setup instructions.
