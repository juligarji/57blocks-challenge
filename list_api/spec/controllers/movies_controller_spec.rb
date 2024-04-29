require 'rails_helper'

RSpec.describe MoviesController, type: :controller do
  describe "authenticated user" do
    let(:auth_header) { "Basic #{Base64.encode64("user1@test.com:12345")}" }

    before :all do
      create(:user)
    end

    before :each do
      create(:user)
      request.headers['Authorization'] = auth_header
    end

    describe "GET #index" do
      context "with valid pagination params" do
        it "returns paginated movies in JSON" do
          create_list(:movie, 20)

          get :index, params: { page: 1 }
          expect(response).to have_http_status(200)
          expect(JSON.parse(response.body).size).to eq(10)
        end

        it "length paginated movies for next pages in JSON" do
          create_list(:movie, 20)

          get :index, params: { page: 2 }
          expect(response).to have_http_status(200)
          expect(JSON.parse(response.body).size).to eq(20)
        end
      end

      context "with invalid pagination params (missing page)" do
        it "returns paginated movies with default page 1" do
          create_list(:movie, 15)
          get :index
          expect(response).to have_http_status(200)
          expect(JSON.parse(response.body).size).to eq(10)
        end
      end
    end

    describe "GET #show" do
      it "returns a movie in JSON" do
        movie = create(:movie)
        get :show, params: { id: movie.id }
        expect(response).to have_http_status(200)
        expect(response.content_type).to eq('application/json; charset=utf-8')
        expect(JSON.parse(response.body)['id']).to eq(movie.id)
      end

      it "returns a 404 for a non-existent movie" do
        get :show, params: { id: 100 }
        expect(response).to have_http_status(404)
      end
    end

    describe "PUT #toggle_favorite" do
      it "toggles the favorite flag and returns no content (204)" do
        movie = create(:movie, favorite: false)
        put :toggle_favorite, params: { id: movie.id }
        expect(response).to have_http_status(204)
        expect(movie.reload.favorite).to be(true)
      end

      it "returns a 404 for a non-existent movie" do
        put :toggle_favorite, params: { id: 100 }
        expect(response).to have_http_status(404)
      end
    end
  end

  describe "unauthenticated user" do
    it "returns a 401" do
      get :index, params: {}
      expect(response).to have_http_status(401)
    end
  end
end