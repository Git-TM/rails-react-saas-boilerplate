class ApplicationController < ActionController::Base
  include InertiaRails::Controller
  
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has()
  allow_browser versions: :modern

  # Inertia.js configuration
  inertia_share do
    {
      locale: I18n.locale,
      user: current_user&.as_json(only: [:id, :email, :name]),
      flash: flash.to_hash
    }
  end

  protected

  def authenticate_user!
    redirect_to new_user_session_path unless user_signed_in?
  end
end
