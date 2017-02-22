defmodule Eloquence.EntryView do
  use Eloquence.Web, :view

  def render("index.json", %{entries: entries}) do
    %{entries: entries}
  end

  def render("show.json", %{entry: entry}) do
    %{
      id: entry.id,
      body: entry.body,
      source: entry.source
    }
  end

  def render("error.json", %{changeset: changeset}) do
    errors = Enum.map(changeset.errors, fn {field, detail} ->
      %{} |> Map.put(field, elem(detail, 0))
    end)

    %{errors: errors}
  end
end
