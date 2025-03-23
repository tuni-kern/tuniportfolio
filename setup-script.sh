#!/bin/bash
rm -rf portfolioproject
npm init -y
npm install next@latest react@latest react-dom@latest
npm install --save-dev typescript @types/react @types/node @types/react-dom eslint
mkdir -p src/app src/components src/lib
touch src/app/layout.tsx src/app/page.tsx