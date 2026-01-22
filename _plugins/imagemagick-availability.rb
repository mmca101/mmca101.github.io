module Jekyll
  module ImagemagickAvailability
    def self.command_available?(cmd)
      ENV.fetch('PATH', '').split(File::PATH_SEPARATOR).any? do |dir|
        path = File.join(dir, cmd)
        File.file?(path) && File.executable?(path)
      end
    end

    def self.imagemagick_available?
      command_available?('convert') || command_available?('magick')
    end
  end
end

Jekyll::Hooks.register :site, :after_init do |site|
  imagemagick_cfg = site.config['imagemagick']
  enabled = imagemagick_cfg.is_a?(Hash) && imagemagick_cfg['enabled']

  # Expose a single boolean for Liquid templates.
  site.config['imagemagick_available'] = enabled && Jekyll::ImagemagickAvailability.imagemagick_available?
end
