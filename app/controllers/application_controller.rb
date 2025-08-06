class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has()
  allow_browser versions: :modern

  # Inertia.js configuration
  inertia_share do
    {
      translations: load_translations,
      locale: I18n.locale,
      user: current_user&.as_json(only: [:id, :email, :name]),
      flash: flash.to_hash
    }
  end

  protected

  def authenticate_user!
    redirect_to new_user_session_path unless user_signed_in?
  end

  private

  def load_translations
    @translations ||= begin
      locale_file = Rails.root.join('config', 'locales', 'frontend', "#{I18n.locale}.json")
      if File.exist?(locale_file)
        JSON.parse(File.read(locale_file))
      else
        {}
      end
    end
  end
end
