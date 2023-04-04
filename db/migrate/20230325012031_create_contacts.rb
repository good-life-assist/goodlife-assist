class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.string :name, null: false, comment: 'お名前'
      t.string :email, null: false, comment: 'メールアドレス'
      t.string :phone_number, null: false, comment: '電話番号'
      t.text :message, null: false, comment: '問い合わせ内容'
      t.boolean :accepted, null: false, comment: '同意'
      t.timestamps
    end
  end
end
