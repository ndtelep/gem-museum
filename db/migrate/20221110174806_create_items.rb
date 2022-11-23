class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :team
      t.string :sport
      t.string :category
      t.string :era
      t.string :brand
      t.string :made_in
      t.boolean :game_used
      t.string :purchase_price
      t.string :asking_price
      t.string :details
      t.string :league
      t.string :image_url
      t.boolean :for_sale
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
