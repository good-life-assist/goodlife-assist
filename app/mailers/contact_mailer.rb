class ContactMailer < ApplicationMailer
  def send_mail(contact)
    @contact = contact
    mail from: '"株式会社グッドライフアシスト" <goodlifeassist.murakami@gmail.com>', reply_to: @contact.email, to: '"株式会社グッドライフアシスト" <info@good-life-assist.com>', subject: "お客様からの新しいメッセージ（作成日：#{@contact.created_at.strftime('%Y/%m/%d')}）"
  end
end
