# NoMoveFlags 🗺️

NoMoveFlags は、GeoGuessr の No Move / Country Streak でよくある「国旗見たけど国名が出てこない」を潰すための練習アプリゲームです。
短い問題数で回せるモードと、GeoGuessr対応国だけに絞ったモード、暗記用の一覧モードを用意しています。

## 目次 📋

- [概要](#概要-)
- [特徴](#特徴-)
- [ゲームモード](#ゲームモード-)
- [技術スタック](#技術スタック-)
- [プロジェクト構成](#プロジェクト構成-)
- [はじめに](#はじめに-)
- [開発](#開発-)
- [データソース](#データソース-)
- [貢献](#貢献-)
- [ライセンス](#ライセンス-)

## 概要 🌍

NoMoveFlagsは、競技GeoGuessrにおける重要な課題である「時間的プレッシャー下での迅速かつ正確な国旗識別」に対処します。No MoveモードやCountry Streakモードでは、プレイヤーは数秒以内に国旗を正確に識別する必要があり、競技レベルでのパフォーマンス向上には体系的なトレーニングが不可欠です。

本アプリケーションは、認知学習原理、間隔反復パターン、ゲームベース学習法を活用して、国旗の記憶と想起速度を最適化します。

## 特徴 ✨
- 5つのモード
- 即フィードバック
- 暗記モード
- データが分割管理

※パフォーマンス追跡とかは気が向いたらやる

## ゲームモード 🎮

### 1. 国旗10問モード
ランダムに10問でます。

### 2. ISOコード10問モード
JP / FR / DE みたいなコードから国を当てるやつ。地味に効きます。

### 3. GeoGuessr対応国10問モード
GeoGuessrで出る国だけから10問。実戦寄り。

### 4. 全国旗モード
全データからでます。

### 5. 暗記モード
地域ごとに国旗を一覧で見るモード。眺めながら覚える用。

## 技術スタック ⚙️
- Next.js
- React
- TypeScript
- Tailwind CSS
- Static Export (Cloudflare Pages)

## プロジェクト構成 🏗️

```
nomoveflags/
├── app/                  # Next.js App Router
├── components/           # UIコンポーネント
├── context/              # ゲーム状態管理
├── data/                 # 国旗データ
└── utils/                # ゲームロジック等
```

## はじめに 🚀

### 前提条件
- Node.js 18+
- pnpm

### インストール & 起動

```bash
git clone https://github.com/yourusername/nomoveflags.git
cd nomoveflags
pnpm install
pnpm dev
```

### 本番用ビルド

```bash
pnpm build
pnpm dlx serve@latest out
```

アプリケーションは `http://localhost:3000` で利用

## 開発 🛠️

### よく使うコマンド

```bash
pnpm dev
pnpm build
pnpm lint
```
国旗データは data/ 配下にまとまってます。<br>
追加するなら additionalFlags*.ts に入れていく想定。

## データソース 📊
- 国/地域リスト：Google のサポート国/地域一覧
- GeoGuessr対応国：Plonk It（GeoGuessr Guide）

## 貢献 🤝
Issue / Pull Request 歓迎<br>
国旗データの追加・修正や、軽微なUI改善など、お気軽に。

## ライセンス 📜

このプロジェクトは[MIT License](LICENSE)の下でライセンスされています。適切な帰属表示により、個人および商用目的でこのソフトウェアを使用、変更、配布することができます。

---

**GeoGuessrコミュニティへの❤️を込めて**
