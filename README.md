# JSUnityTest
ReactのTypeScript(JavaScript)コード から UnityのC#スクリプトのメソッド を呼び出す方法のテスト

<img src="https://user-images.githubusercontent.com/39244112/152668100-83fbfd39-c377-4ac2-acbc-b77ddfba5363.png" width=640px>

## 内容
- ページを開くとUnityアプリ(WebGL)が起動する
- UpdateでCubeが常時回転している(正常動作またはフリーズの確認のため)
- Button (EXPAND, SHRINK) でCubeが拡大・縮小する
- Textのinput formに文字を入力するとUnityアプリ内の文字が更新される

## テスト方法
1. リポジトリをCloneまたはダウンロードする
2. js-unity-test-react ディレクトリに移動する
3. ```npm install``` コマンドでパッケージをインストールする
4. ```npm run build``` コマンドでビルドする
5. サーバーを起動する (```serve -s build```コマンドを実行する)  
(または、js-unity-test-react > public ディレクトリに移動してから```python -m http.server 3000```コマンドを実行)
6. ブラウザで起動したサーバーのURL(例: http://localhost:3000 )にアクセスする
