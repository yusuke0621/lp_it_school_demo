This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# 🚀 GitHub & Netlify 自動デプロイ設定

このプロジェクトでは **GitHub & Netlify の自動デプロイ** を活用し、プッシュするだけで自動的にデプロイされます。

---

## **1️⃣ GitHub と Netlify の「自動デプロイ」設定**

### **① GitHub リポジトリと Netlify を連携**
1. **Netlify にログイン**  
   👉 [Netlify](https://app.netlify.com/) にアクセスし、アカウントにログイン
2. **「New site from Git」 をクリック**
3. **「GitHub」 を選択**（OAuth認証が求められたら許可）
4. **対象のリポジトリを選択**（例: `it-starcollege`）
5. **ビルド設定を入力**
   - **ビルドコマンド:** `npm run build`（または `next build`）
   - **公開ディレクトリ:** `.next`（Next.js の場合） / `dist`（静的サイトの場合）
6. **「Deploy site」 をクリック**
7. **GitHub の `main` ブランチに push し、Netlify に自動デプロイされるか確認**

✅ **GitHub に push するだけで Netlify に自動デプロイ**

---

### **③ Deploy Preview（プレビュー環境）を有効化**
1. **Netlify の管理画面を開く**
2. **「Site settings」 → 「Build & deploy」 → 「Deploy contexts」 に移動**
3. **「Deploy Previews」 を ON にする**
   - ✅ Pull Request（PR）が作成されたら、自動でプレビュー環境が作成されるようにする

**💡 確認方法**
- GitHub で **PR（プルリクエスト）を作成**
- **Netlify の「Deploys」タブでプレビューURLが生成される**
