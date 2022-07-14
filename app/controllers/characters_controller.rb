class CharactersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable

    def index
        render json: Character.all
    end

    def show
        character = find_character
        render json: character
    end

    def create
        character = Character.create!(character_params)
        render json: character, status: :created
    end

private

    def find_character
        character = Character.find(params[:id])
    end

    def character_params
        params.permit(:name, :picture, :dead, :user_id)
    end 

    def render_not_found_response
        render json: {error: "Character not found"}
    end

    def render_unprocessable(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

end
