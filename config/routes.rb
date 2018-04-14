Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :activity_entries
    end
  end

end
