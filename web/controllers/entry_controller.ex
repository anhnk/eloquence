defmodule Eloquence.EntryController do
  use Eloquence.Web, :controller

  alias Eloquence.Entry

  def index(conn, _params) do
    entries = Repo.all(Entry)
    render(conn, "index.html", entries: entries)
  end

  def api_index(conn, _params) do
    entries = Repo.all(from(e in Entry, order_by: [desc: e.inserted_at]))
    render(conn, "index.json", entries: entries)
  end

  def new(conn, _params) do
    changeset = Entry.changeset(%Entry{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"entry" => entry_params}) do
    changeset = Entry.changeset(%Entry{}, entry_params)

    case Repo.insert(changeset) do
      {:ok, _entry} ->
        conn
        |> put_flash(:info, "Entry created successfully.")
        |> redirect(to: entry_path(conn, :index))
      {:error, changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def api_create(conn, %{"entry" => entry_params}) do
    changeset = Entry.changeset(%Entry{}, entry_params)

    case Repo.insert(changeset) do
      {:ok, entry} ->
        conn
        |> render("show.json", entry: entry)
      {:error, changeset} ->
        conn
        |> render("error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    entry = Repo.get!(Entry, id)
    render(conn, "show.html", entry: entry)
  end

  def edit(conn, %{"id" => id}) do
    entry = Repo.get!(Entry, id)
    changeset = Entry.changeset(entry)
    render(conn, "edit.html", entry: entry, changeset: changeset)
  end

  def update(conn, %{"id" => id, "entry" => entry_params}) do
    entry = Repo.get!(Entry, id)
    changeset = Entry.changeset(entry, entry_params)

    case Repo.update(changeset) do
      {:ok, entry} ->
        conn
        |> put_flash(:info, "Entry updated successfully.")
        |> redirect(to: entry_path(conn, :show, entry))
      {:error, changeset} ->
        render(conn, "edit.html", entry: entry, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    entry = Repo.get!(Entry, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(entry)

    conn
    |> put_flash(:info, "Entry deleted successfully.")
    |> redirect(to: entry_path(conn, :index))
  end
end
