namespace :erd do
  desc "Generate Entity Relationship Diagram"
  task :generate => :environment do
    puts "Generating ERD diagram..."
    
    system("bundle exec erd --inheritance --direct --attributes=foreign_keys,content")
    
    if File.exist?("erd.pdf")
      puts "✅ ERD diagram generated successfully at erd.pdf"
    else
      puts "❌ Failed to generate ERD diagram"
    end
  end
end

# Hook into db:migrate to auto-generate ERD
Rake::Task["db:migrate"].enhance do
  if Rails.env.development?
    Rake::Task["erd:generate"].invoke rescue nil
  end
end 