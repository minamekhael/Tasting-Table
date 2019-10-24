Rails.application.routes.draw do
  resources :recipes
  # scope '/api' do
    # get 'recipes/index'
    # post 'recipes/create'
    # get '/show/:id', to: 'recipes#show'
    # delete '/destroy/:id', to: 'recipes#destroy'

  # end
end
