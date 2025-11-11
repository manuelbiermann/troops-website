# Agent Guidelines for troops-website

## Commands
- **Dev**: `pnpm run dev` (runs at http://localhost:5173)
- **Build**: `pnpm run build`
- **Typecheck**: `pnpm run typecheck` (generates types then runs tsc)
- **No test suite configured**

## Tech Stack
- React Router v7 with Vite
- TypeScript (strict mode enabled)
- TailwindCSS v4 with @tailwindcss/vite
- Radix UI components (via shadcn/ui pattern)

## Code Style
- **Imports**: Group by external, internal, then types. Use `import type` for type-only imports
- **Formatting**: No ESLint/Prettier config - follow existing style (2 space indent, double quotes for JSX attributes)
- **Types**: Always use TypeScript. Leverage React Router's generated types (`Route.MetaArgs`, `Route.LinksFunction`, etc.)
- **Naming**: PascalCase for components, camelCase for functions/variables, kebab-case for files
- **Path aliases**: Use `~/` prefix for app imports (e.g., `~/lib/utils`, `~/components/ui/button`)
- **Components**: Prefer function declarations. Export utility functions with named exports
- **Styling**: Use Tailwind classes with `cn()` helper from `~/lib/utils` for conditional/merged classes
- **Error handling**: Implement `ErrorBoundary` exports in routes using `Route.ErrorBoundaryProps`
