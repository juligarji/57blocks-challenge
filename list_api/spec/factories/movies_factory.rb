FactoryBot.define do
  factory :movie do
    title { Faker::Movie.title }
    description { Faker::Lorem.paragraph }
    img { Faker::LoremFlickr.image(size: "300x200") }
    favorite { [true, false].sample } # Randomly set favorite to true or false

    # Add additional attributes if your Movie model has them
  end
end