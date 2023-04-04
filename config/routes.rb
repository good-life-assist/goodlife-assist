Rails.application.routes.draw do
  root to: 'homes#index'

  resource  :about, only: [:show]
  resource  :faq, only: [:show]
  resource  :service, only: [:show]
  resource :contact, only: [:show, :create] do
    collection do
      post 'confirm'
      post 'back'
      get 'complete'
    end
  end
  resource  :invitation, only: [:show]
  resource  :policy, only: [:show]
  resource  :sitemap, only: [:show]

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end
end
