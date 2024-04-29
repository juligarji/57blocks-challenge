module AuthenticationHelper
  def authenticate_user
    email, password = ActionController::HttpAuthentication::Basic.user_name_and_password(request)

    user = User.find_by(email: email)

    if user && user.authenticate(password)
      @current_user = user
    else
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end
end
