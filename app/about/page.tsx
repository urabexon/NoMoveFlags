import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-10 max-w-4xl">
            <div className="mb-6">
                <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm">
                    ← トップページに戻る
                </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">NoMoveFlagsについて</h2>
                
                <div className="space-y-6 text-gray-700">
                    <section>
                        <h2 className="text-xl font-semibold mb-3 text-blue-600">🌍 このアプリの目的</h2>
                        <p className="leading-relaxed">
                            NoMoveFlagsは、<strong>GeoGuessrのNo Move / Country Streakモード</strong>で勝利を目指すプレイヤーのための国旗トレーニングアプリです！
                            「あの国旗、見たことあるけど名前が出てこない...」そんな悩みを解決します。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3 text-green-600">🎯 特徴</h2>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span><strong>GeoGuessr対応国に特化</strong> - 実際にゲームで遭遇する132カ国の国旗を効率的に学習</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span><strong>多彩なゲームモード</strong> - 10問クイズから全国旗チャレンジまで、レベルに合わせて選択可能</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span><strong>ISOコード（ドメイン）クイズ</strong> - 「.jp = 日本」のようなドメイン知識も鍛えられます</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span><strong>暗記モード</strong> - 地域別に整理された国旗一覧で効率的な学習が可能</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-500 mr-2">✓</span>
                                <span><strong>成績記録</strong> - 過去のスコアを追跡して上達を実感</span>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3 text-purple-600">🚀 使い方</h2>
                        <ol className="space-y-2">
                            <li><strong>1.</strong> お好みのゲームモードを選択</li>
                            <li><strong>2.</strong> 国旗（またはISOコード）を見て、正しい国名を選択</li>
                            <li><strong>3.</strong> 結果を確認して、間違えた問題を復習</li>
                            <li><strong>4.</strong> 繰り返し練習してGeoGuessrマスターを目指そう！</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3 text-orange-600">💡 おすすめの学習方法</h2>
                        <div className="bg-orange-50 p-4 rounded-lg">
                            <ul className="space-y-1 text-sm">
                                <li>• <strong>初心者の方：</strong> 「暗記モード」で地域ごとに国旗を確認してから「10問モード」でテスト</li>
                                <li>• <strong>中級者の方：</strong> 「GeoGuessr対応国モード」で実戦に近い練習を重ねる</li>
                                <li>• <strong>上級者の方：</strong> 「全国旗モード」で完璧を目指し、「ISOコードモード」で知識の幅を広げる</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3 text-gray-600">📊 データについて</h2>
                        <div className="text-sm space-y-2">
                            <p>
                                <strong>国/地域データ：</strong> 2025年5月22日時点の
                                <a href="https://support.google.com/business/answer/6270107?hl=ja" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                                    Google Maps サポート対象国/地域リスト
                                </a>
                                をベースに作成
                            </p>
                            <p>
                                <strong>GeoGuessr対応国データ：</strong> 2025年12月14日時点の
                                <a href="https://www.plonkit.net/guide" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                                    Plonk It - GeoGuessr Guide
                                </a>
                                の情報を参考に作成
                            </p>
                        </div>
                    </section>

                    <section className="pt-6 border-t border-gray-200">
                        <p className="text-center text-gray-500 text-sm">
                            🎮 みなさんのGeoGuessrライフがより楽しくなりますように！ 🎮
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
