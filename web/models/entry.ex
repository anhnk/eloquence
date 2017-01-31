defmodule Eloquence.Entry do
  use Eloquence.Web, :model

  schema "entries" do
    field :body, :string
    field :source, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:body, :source])
    |> validate_required([:body, :source])
  end
end
