class UsersController < ApplicationController
  before_action :authenticate_user

  def is_auth
    render status: :no_content
  end
end
