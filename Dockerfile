FROM elixir:1.4

MAINTAINER ANH DO <dotuanhoanganh@gmail.com>

# update and install software
RUN apt-get update && apt-get upgrade -y \
    # install system depedencies
    && apt-get install -y curl wget git make sudo \
    # clean up after ourselves
    && apt-get clean

ENV PHOENIX_VERSION 1.2.1

# install the Phoenix Mix archive
RUN mix archive.install --force https://github.com/phoenixframework/archives/raw/master/phoenix_new-$PHOENIX_VERSION.ez

# install Node.js (>= 6.0.0) and NPM in order to satisfy brunch.io dependencies
# See http://www.phoenixframework.org/docs/installation#section-node-js-5-0-0-
RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - && sudo apt-get install -y nodejs

WORKDIR /code

# Install hex
RUN mix local.hex --force

# Install rebar
Run mix local.rebar --force
