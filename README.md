# Chen Software CMS

## Introduction

Chen Software utilizes [TinaCMS](https://tina.io/), a powerful, git-backed, React-based headless CMS. This system allows you to easily manage and update content on our website without requiring technical expertise. This guide will walk you through using the CMS effectively.

## Local Development

Install the project's dependencies:

```bash
pnpm install
```

Run the project locally:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building the Project Locally (Using the hosted content API)

Replace the `.env.example`, with `.env`

```env
NEXT_PUBLIC_TINA_CLIENT_ID=<get this from the project you create at app.tina.io>
TINA_TOKEN=<get this from the project you create at app.tina.io>
NEXT_PUBLIC_TINA_BRANCH=<Specify the branch with Tina configured>
```

Build the project:

```bash
pnpm build
```

## Accessing the Admin Interface

To begin editing content on the Chen Software website, visit the admin interface at:

```txt
https://chen.software/admin
```

For direct access to specific pages, use the following format:

```txt
https://chen.software/admin/#/collections/edit/page/{page-name}
```

Replace `{page-name}` with the actual page you wish to edit (e.g., "about" for the About page).

## Editing Content

1. **Login**: Access the admin interface using your credentials.
2. **Navigate**: Use the interface to browse through different content sections.
3. **Edit**: Make your desired changes to text, images, or other elements.
4. **Save**: Your changes will be saved automatically as you work.

## Publishing Changes

Chen Software's CMS uses a dual-branch system for content management:

- **content/main**: This branch contains only content changes made through the CMS
- **main**: This branch includes both content changes and development changes

### Publishing Process

1. After making your edits in the admin interface, they will take effect immediately in the `content/main` branch.
2. To make these changes visible to visitors, you need to merge `content/main` into the `main` branch.
3. Visit the following URL to create a pull request:

   ```txt
   https://github.com/Chen-Software/www.chen.software/compare/Chen-Software:main...content/main
   ```

4. Follow the GitHub interface to create and submit the pull request.
5. Once the pull request is merged, your changes will be live on the main website.

## Branch Management

- All content edits made through the CMS are automatically committed to the `content/main` branch
- The `main` branch contains the full codebase including both content and development changes
- Regular merges from `content/main` to `main` ensure content updates are published promptly

## Troubleshooting

- **Edits not appearing**: Ensure you've merged `content/main` into `main` after making changes
- **Login issues**: Contact your system administrator if you encounter authentication problems
- **Content formatting**: If formatting appears incorrect, check your markdown syntax or contact support

For advanced usage or additional features, refer to the [TinaCMS documentation](https://tina.io/docs/).
