module Jekyll
  class FileExistsTag < Liquid::Tag
    def initialize(tag_name, path, tokens)
      super
      @path = path
    end

    def render(context)
      # Pipe parameter through Liquid to make additional replacements possible
      url = Liquid::Template.parse(@path).render(context)

      site = context.registers[:site]
      normalized = url.to_s.strip
      normalized = normalized.gsub(/\A"|"\z/, '')

      return 'false' if normalized.empty?

      # Check against static files (i.e. files that will actually be part of the built site)
      # to avoid relying on build artifacts that might exist locally but not be deployed.
      static_rel = normalized.start_with?('/') ? normalized : "/#{normalized}"
      static_exists = site.static_files.any? { |f| f.relative_path == static_rel }
      return 'true' if static_exists

      # Fallback: direct filesystem check in the repo source tree.
      source_path = File.join(site.source.to_s, normalized)
      File.exist?(source_path).to_s
    end
  end
end

Liquid::Template.register_tag('file_exists', Jekyll::FileExistsTag)