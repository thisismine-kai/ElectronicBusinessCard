06月15日

###  実装した機能・コンポーネント
実行コマンド：npm run dev

1. **BusinessCardコンポーネント（`src/components/BusinessCard.jsx`）作成**

   * ユーザーのアイコン、名前、GitHubリンク、スキル一覧を表示
   * スキルには `src/data/skillIcons.js` で定義したアイコンを表示
   * `display: flex` を用いてアイコンと名前を横並びに調整

2. **BusinessCardListコンポーネント（`src/components/BusinessCardList.jsx`）作成**

   * グリッドレイアウトで複数の名刺カードを並べて表示
   * カード間の隙間やサイズを `gridTemplateColumns` と `gap` で調整

3. **MyCardBoxコンポーネント（`src/MyCardBox.jsx`）作成**

   * `src/components/BusinessCardList` をラップするコンテナ
   * 全体レイアウトとタイトル表示を実装（背景色、余白、中央寄せ）

4. **スキルデータ管理　src/data（`skillIcons.js` + `cards.js`）**

   * 各ユーザーのスキルとそのアイコンの対応を定義
   * `src/data/cards.js`に仮データ（氏名・GitHubリンク・スキル・画像URL）を複数人分登録

6. **全体統合**

   * `main.jsx` で `MyCardBox` をルートに描画
   * `App.css` / `index.css` のスタイル調整
