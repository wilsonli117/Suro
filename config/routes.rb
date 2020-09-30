# == Route Map
#
#                    Prefix Verb   URI Pattern                                                                              Controller#Action
#                      root GET    /                                                                                        static_pages#root
#                 api_users POST   /api/users(.:format)                                                                     api/users#create {:format=>:json}
#               api_session DELETE /api/session(.:format)                                                                   api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)                                                                   api/sessions#create {:format=>:json}
#                  api_cars GET    /api/cars(.:format)                                                                      api/cars#index {:format=>:json}
#                           POST   /api/cars(.:format)                                                                      api/cars#create {:format=>:json}
#                   api_car GET    /api/cars/:id(.:format)                                                                  api/cars#show {:format=>:json}
#                           PATCH  /api/cars/:id(.:format)                                                                  api/cars#update {:format=>:json}
#                           PUT    /api/cars/:id(.:format)                                                                  api/cars#update {:format=>:json}
#                           DELETE /api/cars/:id(.:format)                                                                  api/cars#destroy {:format=>:json}
#              api_features GET    /api/features(.:format)                                                                  api/features#index {:format=>:json}
#        rails_service_blob GET    /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET    /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET    /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT    /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST   /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :cars, only: [:index, :show, :create, :update, :destroy]
    resources :features, only: [:index]
  end
  
end
