# MoreCon

もっと日本を便利で住みやすい国にしたいという思いから、MoreCon（more convenient）というアプリ名にしました。

○『こんなwebサービスがあれば便利になるのに』『こんなサービスが欲しい』と思ったら、その思いを投稿する。  
○ 投稿された他の人の欲しいwebサービスで実現できそうであれば作成してみる。  

上記のように『実現して欲しいサービスがあると人』と『実現できる人』を結びつけることが出来れば、もっと便利で住みやすい国に日本はなるのではないかなと思い制作しました。

アプリURL：https://www.morecon.net/   
お試しでご利用いただけるようにテストユーザー用のログインも用意してあります。    
※Qiitaにも苦労した点、工夫した点、使用技術を紹介した記事を投稿しました    
https://qiita.com/takeiin/items/41c3ade449a72f2dc3fa    

## アプリのUIと機能
### Top画面
○ログイン/新規登録/テストログイン。  
○簡易的にアプリの使用方法の記載。  

![ezgif.com-gif-maker (2).gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1233228/ec368131-2e26-fe18-50f0-733c4a9231ea.gif)

### 未制作投稿一覧画面
（新規の投稿を一覧で表示。後述の制作中投稿や完成している投稿は表示されません）   
○ユーザーの投稿一覧の閲覧。  
○実現して欲しい投稿に『want』を押したり、気になる投稿にコメント可能。  
○時系列順とwantが多く付いている投稿順の２パターンで投稿を閲覧。  
○実際に制作出来そうであれば『制作する』ボタンを押して制作可能。  
○投稿者は投稿の編集や削除も可能。  


![ezgif.com-gif-maker (4).gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1233228/020df5b3-9cf0-6129-2e52-f8e414f5eebe.gif)


### 制作中投稿一覧
（ログインユーザーもしくは他の方の制作している投稿を見ることのできる画面）   
○作成中の投稿に対してコメントで応援可能。  
○制作している方は未制作に戻す事と完了にすることが可能。  

![ezgif.com-gif-maker (6).gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1233228/b3eae281-b042-593f-391d-4663ffb81aeb.gif)



### 完成投稿一覧
○完成した投稿に対しては『ありがとう』の送付。  
○コメントで感想の共有。  
○完成したサイトの訪問。  

![ezgif.com-gif-maker (7).gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1233228/190e2d99-2b92-c9fd-6e1d-c4a11afb68c3.gif)


### ユーザーページ
○ログインユーザーのユーザーページはプロフィールの編集が可能。  
（他のユーザーのページも訪問可能）
○各種履歴の確認（投稿履歴/制作履歴/Wantを押した投稿の履歴)  

![ezgif.com-gif-maker (8).gif](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/1233228/d6fc077f-40a4-693b-80bb-ff6c7fb8bd30.gif)

## 使用技術

**フロントエンド**
- React
- ReduxToolkit  
- TypeScript
- chakra ui 
- Figma
- GraphQL 

**バックエンド**
- Amplify（DynamoDB、Cognito、S3、Route53、AppSync）

**その他ライブラリー等**
- react-share  
- react-router
- react-hook-form 
- yup
- browser-image-compression
- react-image-crop
- immer

## 機能一覧
- Topページ
  - 新規登録、ログイン
  - 簡単ログイン機能
- 各種投稿一覧ページ   
  - 新規投稿、削除、編集
  - コメント
  - いいなと思った投稿へのwant機能/完成した投稿へのありがとう機能
  - 投稿やコメントの追加読み込み機能（８件づつ取得）
  - ユーザーの名前もしくはアイコンから、そのユーザーページへ遷移
- ユーザーページ
  - ユーザー情報編集機能
  - ありがとうの総数の確認
  - 各種ユーザーの履歴確認（投稿・制作・want)
