class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :handle_not_found
  include AuthenticationHelper

  private

  def handle_not_found
    render status: :not_found
  end
end
