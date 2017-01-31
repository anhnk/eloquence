defmodule Eloquence.Repo.Migrations.CreateEntry do
  use Ecto.Migration

  def change do
    create table(:entries) do
      add :body, :text
      add :source, :string

      timestamps()
    end

  end
end
