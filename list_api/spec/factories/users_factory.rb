FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "user#{n}@test.com" }
    password { "12345" }
    # Add other attributes as needed for your User model
  end
end