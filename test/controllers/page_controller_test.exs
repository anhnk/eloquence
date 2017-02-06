defmodule Eloquence.PageControllerTest do
  use Eloquence.ConnCase

  test "GET /", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) =~ "This is the index page."
  end
end
