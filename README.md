<h1 align="center">Manchester Centre for Robotics and AI</h1>

> A website for Manchester Centre for Robotics and AI, implemented by Jekyll.

# Project instruction for development and deploy to GitHub
## Installation

### Install npm Packages

```console
npm i
```

### Install Ruby Gems

```console
bundle
```

### Development

To run the project in a development environment, first compile assets with webpack:

```console
npm run dev
```

After assets have been built, spool up a development server with Jekyll:

```console
bundle exec jekyll s
```

### Production

To build for production, first compile webpack assets:

```console
npm run build
```

After assets have been built, generate the static files with Jekyll:

```console
bundle exec jekyll build
```
