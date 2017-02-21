defmodule Eloquence.Router do
  use Eloquence.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", Eloquence do
    pipe_through :api

    post "/entries", EntryController, :api_create
  end

  scope "/", Eloquence do
    pipe_through :browser # Use the default browser stack

    resources "/entries", EntryController
    get "/*path", PageController, :index
  end
end
