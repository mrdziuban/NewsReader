NewReader::Application.routes.draw do
  resources :feeds, only: [:index, :show, :create] do
    member do
      post 'refresh'
    end
    resources :entries, only: [:index]
  end

  root to: "feeds#index"
end
