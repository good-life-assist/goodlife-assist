class Contact < ApplicationRecord
    self.implicit_order_column = "created_at"
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

    # Validations
    with_options presence: true do
        validates :name, { length: { maximum: 40 } }
        validates :email, length: { maximum: 255 },
                      format: { with: VALID_EMAIL_REGEX, message: 'の形式が正しくありません。' }
        validates :message
        validates :accepted, presence: { message: 'が選択されていません' }
    end
end
