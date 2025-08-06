InertiaRails.configure do |config|
  # Set the root template that's loaded on the first page visit
  config.layout = 'application'

  # Set the default page title
  config.default_render = true

  # Set the version
  config.version = ViteRuby.digest

  # Configure SSR
  config.ssr_enabled = false
  config.ssr_url = 'http://localhost:13714'
end 