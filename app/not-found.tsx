import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center p-8">
                <div className="mb-6">
                    <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
                    <div className="text-4xl mb-4">🗺️</div>
                </div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    ページが見つかりません
                </h2>
                <p className="text-gray-600 mb-8 max-w-md">
                    お探しのページは存在しないか、移動した可能性があります。<br />
                    国旗クイズで頭をスッキリさせませんか？
                </p>
                <Link 
                    href="/" 
                    className="btn-primary inline-block no-underline"
                >
                    🏁 トップページに戻る
                </Link>
            </div>
        </div>
    );
}
