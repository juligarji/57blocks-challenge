class CreateMovies < ActiveRecord::Migration[7.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :description
      t.string :img
      t.boolean :favorite

      t.timestamps
    end
  end
end
