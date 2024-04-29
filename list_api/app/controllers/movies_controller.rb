class MoviesController < ApplicationController
  before_action :authenticate_user
  before_action :set_movie, only: %i[show toggle_favorite]

  def index
    @movies = Movie.all.paginate(page: 1, per_page: params.fetch(:page, 1).to_i * 10)

    render json: @movies
  end

  def show
    render json: @movie
  end

  def toggle_favorite
    @movie.update!(favorite: !@movie.favorite)

    render status: :no_content
  end

  private

  def set_movie
    @movie = Movie.find(params[:id])
  end

  def pagination_params
    params.permit(:page, :per_page)
  end
end
