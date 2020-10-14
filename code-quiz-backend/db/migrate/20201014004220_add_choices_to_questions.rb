class AddChoicesToQuestions < ActiveRecord::Migration[6.0]
  def change
    add_column :questions, :choices, :text, array: true, default: []
  end
end
