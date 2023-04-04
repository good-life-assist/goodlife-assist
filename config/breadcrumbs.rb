crumb :root do
  link 'ホーム', root_path
end

crumb :about do
  link "当社について"
  parent :root
end

crumb :service do
  link "保険のご案内"
  parent :root
end

crumb :faq do
  link "よくある質問"
  parent :root
end

crumb :contact do
  link "お問い合わせ", contact_path
  parent :root
end

crumb :contact_confirm do
  link "入力内容の確認"
  parent :contact
end

crumb :contact_complete do
  link "完了"
  parent :contact_confirm
end

crumb :policy do
  link "プライバシーポリシー"
  parent :root
end

crumb :invitation do
  link "勧誘方針"
  parent :root
end

crumb :sitemap do
  link "サイトマップ"
  parent :root
end