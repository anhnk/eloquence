defmodule Eloquence.PageController do
  use Eloquence.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
