// 1. 現在の日付時刻を取得
const now = new Date();

// 2. 日本語のフォーマット設定（年・月・日）
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

// 3. 日本のロケール（ja-JP）に合わせた文字列に変換
const japaneseDate = now.toLocaleDateString('ja-JP', options);

// 4. コンソールに出力
console.log( japaneseDate);